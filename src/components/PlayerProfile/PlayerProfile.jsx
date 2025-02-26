import React, { useState } from "react";
import YouTube from "react-youtube";
import { useNavigate, useParams } from "react-router-dom";
import "./PlayerProfile.css";
import { Players } from "../../Teams";

const PlayerProfile = () => {
    const [section, setSection] = useState("Bio");
    const [selectedPlayer, setSelectedPlayer] = useState("");
    const { playerFullName } = useParams();
    const playerFirstName = playerFullName.split("-")[0];
    const playerLastName = playerFullName.split("-")[1];
    const navigate = useNavigate();
    const player = Players.find(
        (player) =>
            playerFirstName.toUpperCase() === player.firstName.toUpperCase() &&
            playerLastName.toUpperCase() === player.lastName.toUpperCase()
    );

    if (!player) {
        return (
            <div className="profile-wrapper no-info">
                <div className="no-player-info">
                    <h1>No Information on this Player</h1>
                </div>
            </div>
        );
    }

    const bio = player.bio ? player.bio : {};
    const stats = player.stats ? player.stats : [];
    const videos = player.videos ? player.videos : [];
    stats.sort((a, b) => b.year - a.year);
    const currentTeams = player.teams;
    const sameTeamPlayers = Players.filter((otherPlayer) => {
        if (otherPlayer.id === player.id) return false;
        return otherPlayer.teams.some((team) => currentTeams.includes(team));
    });

    const handleClick = (e) => {
        setSection(e.target.innerText);
    };

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
                        </div>
                        <h2 style={{ marginTop: "50px" }}>Career Bests:</h2>
                        <div className="table-container">
                            <table className="bio-table stats-table">
                                <thead>
                                    <tr>
                                        <th>Points</th>
                                        <th>Rebounds</th>
                                        <th>Assists</th>
                                        <th>Steals</th>
                                        <th>FG Made</th>
                                        <th>3PT Made</th>
                                        <th>FT Made</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{bio.points}</td>
                                        <td>{bio.rebounds}</td>
                                        <td>{bio.assist}</td>
                                        <td>{bio.steals}</td>
                                        <td>{bio.fg}</td>
                                        <td>{bio.three}</td>
                                        <td>{bio.freethrow}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case "Stats":
                return (
                    <div className="stats">
                        <div className="table-container">
                            <table className="stats-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>PPG</th>
                                        <th>FG%</th>
                                        <th>3PT%</th>
                                        <th>APG</th>
                                        <th>RPG</th>
                                        <th>SPG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.map((stat) => {
                                        const partYear = (stat.year + 1) % 100;
                                        return (
                                            <tr key={stat.year}>
                                                <td>
                                                    {stat.year}/{partYear}
                                                </td>
                                                <td>{stat.pointsPerGame}</td>
                                                <td>
                                                    {stat.fieldGoalPercentage}
                                                </td>
                                                <td>
                                                    {stat.threePointPercentage}
                                                </td>
                                                <td>{stat.assistsPerGame}</td>
                                                <td>{stat.reboundsPerGame}</td>
                                                <td>{stat.stealsPerGame}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case "Videos":
                return (
                    <div className="videos">
                        {videos.toReversed().map((video) => (
                            <div key={video} className="youtube-responsive">
                                <YouTube
                                    videoId={video}
                                    opts={{ height: "150%", width: "100%" }}
                                />
                            </div>
                        ))}
                    </div>
                );
            default:
                return <h1>Unknown</h1>;
        }
    };

    if (!player) {
        return <div>Player not found</div>;
    }

    return (
        <div className="profile-wrapper">
            <div className="player-profile">
                {!player.teams.includes("mens") &&
                !player.teams.includes("u19") ? (
                    <div></div>
                ) : (
                    <div className="related-bios">
                        <select
                            name="Related Bios"
                            defaultValue=""
                            value={selectedPlayer}
                            onChange={handleSelectChange}
                        >
                            <option value="">Select a player</option>
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
                        <img className="img" src={player.image} alt="" />
                        <div className="info">
                            <p>Height: {player.height}</p>
                            <p>
                                Weight: {player.weight ? player.weight : "0KG"}
                            </p>
                            <p>Position: {player.position}</p>
                        </div>
                    </div>
                    <div className="right-bar">
                        <ul>
                            <li
                                onClick={handleClick}
                                style={
                                    section === "Bio"
                                        ? { color: "black" }
                                        : { color: "grey" }
                                }
                            >
                                Bio
                            </li>
                            <li
                                onClick={handleClick}
                                style={
                                    section === "Stats"
                                        ? { color: "black" }
                                        : { color: "grey" }
                                }
                            >
                                Stats
                            </li>
                            <li
                                onClick={handleClick}
                                style={
                                    section === "Videos"
                                        ? { color: "black" }
                                        : { color: "grey" }
                                }
                            >
                                Videos
                            </li>
                        </ul>
                        {renderSection()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerProfile;
