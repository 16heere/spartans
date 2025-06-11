import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { useNavigate, useParams } from "react-router-dom";
import "./PlayerProfile.css";
import { Players } from "../../Teams";
import axios from "axios";

const PlayerProfile = () => {
    const [section, setSection] = useState("Bio");
    const [selectedPlayer, setSelectedPlayer] = useState("");
    const [reels, setReels] = useState([]);
    const [selectedReel, setSelectedReel] = useState(null);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loadingReels, setLoadingReels] = useState(true);
    const [loadingVideos, setLoadingVideos] = useState(true);

    const { playerFullName } = useParams();
    const navigate = useNavigate();

    const playerFirstName = playerFullName.split("-")[0];
    const playerLastName = playerFullName.split("-")[1];

    const player = Players.find(
        (p) =>
            p.firstName.toUpperCase() === playerFirstName.toUpperCase() &&
            p.lastName.toUpperCase() === playerLastName.toUpperCase()
    );

    useEffect(() => {
        const loadReels = async () => {
            setLoadingReels(true);
            if (!player || !player.playlistId) {
                setReels([]);
                setSelectedReel(null);
                setLoadingReels(false);
                return;
            }

            const playlistId = player.playlistId;
            const apiKey = process.env.REACT_APP_YT_API_KEY;

            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/playlistItems`,
                    {
                        params: {
                            part: "snippet,status",
                            maxResults: 100,
                            playlistId,
                            key: apiKey,
                        },
                    }
                );

                const items = response.data.items;

                console.log("items=");
                items.forEach((item) => {
                    console.log(item.snippet.title);
                });

                // Filter visible and "Private video" items
                const visibleItems = items.filter(
                    (item) => item.snippet.title !== "Private video"
                );
                const privateItems = items.filter(
                    (item) => item.snippet.title === "Private video"
                );

                // Extract video IDs from private items
                const privateIds = privateItems
                    .map((item) => item.snippet?.resourceId?.videoId)
                    .filter(Boolean);

                // Fetch fallback titles for private videos
                let fallbackReels = [];
                if (privateIds.length > 0) {
                    const fallbackResponse = await axios.get(
                        `https://www.googleapis.com/youtube/v3/videos`,
                        {
                            params: {
                                part: "snippet",
                                id: privateIds.join(","),
                                key: apiKey,
                            },
                        }
                    );

                    fallbackReels = fallbackResponse.data.items.map((item) => ({
                        id: item.id,
                        title: item.snippet.title,
                    }));
                }

                // Build final list of reels
                const visibleReels = visibleItems.map((item) => ({
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                }));

                const fetchedReels = [...visibleReels, ...fallbackReels];

                // Set state
                setReels(fetchedReels);
                setSelectedReel(fetchedReels[0] || null);
            } catch (error) {
                console.error("Error fetching reels:", error);
                setReels(player.reels || []);
                setSelectedReel((player.reels || [])[0] || null);
            } finally {
                setLoadingReels(false);
            }
        };

        loadReels();
    }, [player]);

    useEffect(() => {
        const fetchVideoTitles = async () => {
            if (!player || !player.videos || player.videos.length === 0) {
                setVideos([]);
                setSelectedVideo(null);
                setLoadingVideos(false);
                return;
            }

            setLoadingVideos(true);

            try {
                const apiKey = process.env.REACT_APP_YT_API_KEY;
                const videoIds = player.videos.join(",");

                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos`,
                    {
                        params: {
                            part: "snippet",
                            id: videoIds,
                            key: apiKey,
                        },
                    }
                );

                const fetchedVideos = response.data.items.map((item) => ({
                    id: item.id,
                    title: item.snippet.title,
                }));

                setVideos(fetchedVideos);
                setSelectedVideo(fetchedVideos[fetchedVideos.length - 1]);
            } catch (error) {
                console.error("Error fetching video titles:", error);
                setVideos(
                    player.videos.map((id) => ({
                        id,
                        title: `${player.firstName} ${player.lastName} - Video`,
                    }))
                );
                setSelectedVideo(player.videos[player.videos.length - 1]);
            } finally {
                setLoadingVideos(false);
            }
        };

        fetchVideoTitles();
    }, [player]);

    useEffect(() => {
        if (player && player.videos && player.videos.length > 0) {
            setSelectedVideo(player.videos[player.videos.length - 1]);
        }
    }, [player]);

    if (!player) {
        return (
            <div className="profile-wrapper no-info">
                <div className="no-player-info">
                    <h1>No Information on this Player</h1>
                </div>
            </div>
        );
    }

    const bio = player.bio || {};
    const stats = [...(player.stats || [])].sort((a, b) => b.year - a.year);
    const currentTeams = player.teams || [];

    const sameTeamPlayers = Players.filter((other) => {
        if (other.id === player.id) return false;
        return other.teams.some((team) => currentTeams.includes(team));
    });

    const handleClick = (e) => setSection(e.target.innerText);

    const handleSelectChange = (e) => {
        setSelectedPlayer(e.target.value);
        navigate(e.target.value);
    };

    const renderSection = () => {
        switch (section) {
            case "Bio":
                return (
                    <div className="bio">
                        <div
                            className="bio-description"
                            style={{ marginTop: "1rem" }}
                        >
                            {bio.description}
                            <br />
                            <br />
                            <span>
                                <strong>Jamie Tong</strong>
                                <br />
                                <span style={{ fontStyle: "italic" }}>
                                    Gravesend Spartans Head Coach
                                </span>
                            </span>
                        </div>
                        {player.honors?.length > 0 && (
                            <div className="honors-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Honour</th>
                                            <th>Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {player.honors.map((honor, index) => (
                                            <tr key={index}>
                                                <td className="honor-title">
                                                    {honor.title}
                                                </td>
                                                <td className="honor-year">
                                                    {honor.year}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                );

            case "Stats":
                return (
                    <div className="stats">
                        {player.currentSeasonStats?.teams && (
                            <>
                                <h3>Current Season Stats</h3>
                                <div className="table-container">
                                    <table className="stats-table">
                                        <thead>
                                            <tr>
                                                <th>Team</th>
                                                <th>PPG</th>
                                                {/* <th>FG%</th>
                                                <th>3PT% (FIBA)</th> */}
                                                <th>APG</th>
                                                <th>RPG</th>
                                                <th>SPG</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(
                                                player.currentSeasonStats.teams
                                            ).map(([teamName, teamStats]) => (
                                                <tr key={teamName}>
                                                    <td>{teamName}</td>
                                                    <td>
                                                        {
                                                            teamStats.pointsPerGame
                                                        }
                                                    </td>
                                                    {/* <td>
                                                        {
                                                            teamStats.fieldGoalPercentage
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            teamStats.threePointPercentage
                                                        }
                                                    </td> */}
                                                    <td>
                                                        {
                                                            teamStats.assistsPerGame
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            teamStats.reboundsPerGame
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            teamStats.stealsPerGame
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}

                        <br />
                        <br />

                        <h3>Past Seasons</h3>
                        <div className="table-container">
                            <table className="stats-table">
                                <thead>
                                    <tr>
                                        <th>Season</th>
                                        <th>PPG</th>
                                        {/* <th>FG%</th>
                                        <th>3PT%</th> */}
                                        <th>APG</th>
                                        <th>RPG</th>
                                        <th>SPG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.map((stat) => (
                                        <tr key={stat.year}>
                                            <td>
                                                {stat.year}/
                                                {(stat.year + 1) % 100}
                                            </td>
                                            <td>{stat.pointsPerGame}</td>
                                            {/* <td>{stat.fieldGoalPercentage}</td> */}
                                            {/* <td>{stat.threePointPercentage}</td> */}
                                            <td>{stat.assistsPerGame}</td>
                                            <td>{stat.reboundsPerGame}</td>
                                            <td>{stat.stealsPerGame}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );

            case "Mixtapes":
                if (loadingVideos) return <p>Loading videos...</p>;
                if (videos.length === 0) return <p>No videos available.</p>;
                if (!selectedVideo) return <p>No video selected.</p>;

                return (
                    <div className="videos-wrapper">
                        <div className="videos-player">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo.id}?rel=0`}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="videos-sidebar">
                            <h4 className="videos-heading">Video Playlist</h4>
                            {[...videos].reverse().map((video) => (
                                <div
                                    key={video.id}
                                    className={`video-item ${
                                        selectedVideo.id === video.id
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedVideo(video)}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
                                        alt={video.title}
                                        className="video-thumbnail"
                                    />
                                    <div className="video-info">
                                        <div className="video-title">
                                            {video.title}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "Reels":
                if (loadingReels) return <p>Loading reels...</p>;
                if (!reels || reels.length === 0)
                    return <p>No reels available.</p>;

                return (
                    <div className="reels-wrapper">
                        <div className="reels-player">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedReel.id}?rel=0`}
                                title={selectedReel.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="reels-sidebar">
                            <h4 className="reels-heading">Reel Playlist</h4>
                            {reels.map((reel) => (
                                <div
                                    key={reel.id}
                                    className={`reel-item ${
                                        selectedReel.id === reel.id
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedReel(reel)}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${reel.id}/default.jpg`}
                                        alt={reel.title}
                                        className="reel-thumbnail"
                                    />
                                    <div className="reel-info">
                                        <div className="reel-title">
                                            {reel.title}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return <h1>Unknown</h1>;
        }
    };

    return (
        <div className="profile-wrapper">
            <div className="player-profile">
                {(player.teams.includes("mens") ||
                    player.teams.includes("u19")) && (
                    <div className="related-bios">
                        <select
                            name="Related Bios"
                            value={selectedPlayer}
                            onChange={handleSelectChange}
                        >
                            <option value="">
                                {player
                                    ? `${player.firstName} ${player.lastName}`
                                    : `Select a player`}
                            </option>
                            {sameTeamPlayers.map((otherPlayer) => (
                                <option
                                    key={otherPlayer.id}
                                    value={`/player/${otherPlayer.firstName}-${otherPlayer.lastName}`}
                                >
                                    #{otherPlayer.number} |{" "}
                                    {otherPlayer.firstName}{" "}
                                    {otherPlayer.lastName}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div className="name-title">
                    <span>{player.number}</span>
                    <div className="player-name">
                        {player.firstName} {player.lastName}
                    </div>
                </div>

                <div className="full-player-info">
                    <div className="left-bar">
                        <div className="left-bar-cont">
                            <img className="img" src={player.image} alt="" />
                            <div className="info">
                                <p>
                                    <strong>Height:</strong>
                                    <br />
                                    {player.height}
                                </p>
                                <hr />

                                <p>
                                    <strong>Position:</strong>
                                    <br />
                                    {player.position}
                                </p>
                                <hr />
                                <p>
                                    <strong>Graduation Class:</strong>
                                    <br />
                                    {player.class}
                                </p>

                                {player.nationality && (
                                    <>
                                        <hr />
                                        <p>
                                            <strong>Nationality:</strong>
                                            <br />
                                            {player.nationality}
                                        </p>
                                    </>
                                )}

                                {player.sat && (
                                    <>
                                        <hr />
                                        <p>
                                            <strong>SAT score:</strong>
                                            <br />
                                            {player.sat}
                                        </p>
                                    </>
                                )}

                                {player.wingspan && (
                                    <>
                                        <hr />
                                        <p>
                                            <strong>Wingspan:</strong>
                                            <br />
                                            {player.wingspan}
                                        </p>
                                    </>
                                )}

                                {player.standingReach && (
                                    <>
                                        <hr />
                                        <p>
                                            <strong>Standing Reach:</strong>
                                            <br />
                                            {player.standingReach}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="right-bar">
                        <ul>
                            {["Bio", "Stats", "Mixtapes", "Reels"].map(
                                (tab) => (
                                    <li
                                        key={tab}
                                        onClick={handleClick}
                                        style={{
                                            color:
                                                section === tab
                                                    ? "black"
                                                    : "grey",
                                        }}
                                    >
                                        {tab}
                                    </li>
                                )
                            )}
                        </ul>
                        {renderSection()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerProfile;
