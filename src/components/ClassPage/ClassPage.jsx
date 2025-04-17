import React from "react";
import { useParams, Link } from "react-router-dom";
import { Players } from "../../Teams";
import "./ClassPage.css";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ClassPage() {
    const { year } = useParams();
    const classYear = parseInt(year, 10);
    const allPlayers = [...Players];

    const classMembers = allPlayers.filter(
        (player) => player.class === classYear
    );

    return (
        <div className="classpage-container">
            <h2 className="classpage-title">Class of {classYear}</h2>
            <div className="classpage-players">
                {classMembers.map((player, index) => (
                    <div key={index} className="classpage-player-card">
                        {player.profile ? (
                            <Link
                                to={`/player/${player.firstName}-${player.lastName}`}
                                className="classpage-player-link"
                            >
                                <img
                                    src={player.image}
                                    alt={`${player.firstName} ${player.lastName}`}
                                    className="classpage-player-img"
                                />
                                <h3>
                                    {player.firstName} <br /> {player.lastName}
                                </h3>
                                <div className="classpage-player-card-info">
                                    <p>Height: {player.height}</p>
                                    <p>Number: {player.number}</p>
                                    <p>Position: {player.position}</p>
                                    <p>
                                        Class: {player.class} ('{player.born}{" "}
                                        Born)
                                    </p>
                                    <p>
                                        Teams:{" "}
                                        {player.teams.map((team, idx) => (
                                            <span key={idx}>
                                                {capitalizeFirstLetter(team)}
                                                {idx < player.teams.length - 1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </Link>
                        ) : (
                            <>
                                <img
                                    src={player.image}
                                    alt={`${player.firstName} ${player.lastName}`}
                                    className="classpage-player-img"
                                />
                                <h3>
                                    {player.firstName} {player.lastName}
                                </h3>
                                <p>Height: {player.height}</p>
                                <p>Number: {player.number}</p>
                                <p>Position: {player.position}</p>
                                <p>
                                    Teams:{" "}
                                    {player.teams.map((team, idx) => (
                                        <span key={idx}>
                                            {team === "mens" ||
                                            team === "u19" ||
                                            team === "u16" ||
                                            team === "u14"
                                                ? `Spartans ${capitalizeFirstLetter(
                                                      team
                                                  )}`
                                                : capitalizeFirstLetter(team)}
                                            {idx < player.teams.length - 1
                                                ? ", "
                                                : ""}
                                        </span>
                                    ))}
                                </p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClassPage;
