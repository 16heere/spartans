// src/components/ClassPage/ClassPage.js
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
        <div className="container">
            <h2>Class of {classYear}</h2>
            <div className="players">
                {classMembers.map((player, index) => (
                    <div key={index} className="player-card">
                        {player.profile ? (
                            <Link
                                to={`/player/${player.firstName}-${player.lastName}`}
                                className="player-link"
                            >
                                <img
                                    src={player.image}
                                    alt={`${player.firstName} ${player.lastName}`}
                                />
                                <h3>
                                    {player.firstName} {player.lastName}
                                </h3>
                                <p>Height: {player.height}</p>
                                <p>Number: {player.number}</p>
                                <p>Position: {player.position}</p>
                                <p>
                                    Teams:{" "}
                                    {player.teams.map((team, idx) => {
                                        if (
                                            team === "mens" ||
                                            team === "u19" ||
                                            team === "u16" ||
                                            team === "u14"
                                        ) {
                                            return (
                                                <span key={idx}>
                                                    Spartans{" "}
                                                    {capitalizeFirstLetter(
                                                        team
                                                    )}
                                                    {idx <
                                                    player.teams.length - 1
                                                        ? ", "
                                                        : ""}
                                                </span>
                                            );
                                        } else {
                                            return (
                                                <span key={idx}>
                                                    {capitalizeFirstLetter(
                                                        team
                                                    )}
                                                    {idx <
                                                    player.teams.length - 1
                                                        ? ", "
                                                        : ""}
                                                </span>
                                            );
                                        }
                                    })}
                                </p>
                            </Link>
                        ) : (
                            <>
                                <img
                                    src={player.image}
                                    alt={`${player.firstName} ${player.lastName}`}
                                />
                                <h3>
                                    {player.firstName} {player.lastName}
                                </h3>
                                <p>Height: {player.height}</p>
                                <p>Number: {player.number}</p>
                                <p>Position: {player.position}</p>
                                <p>
                                    Teams:{" "}
                                    {player.teams.map((team, idx) => {
                                        if (
                                            team === "mens" ||
                                            team === "u19" ||
                                            team === "u16" ||
                                            team === "u14"
                                        ) {
                                            return (
                                                <span key={idx}>
                                                    Spartans{" "}
                                                    {capitalizeFirstLetter(
                                                        team
                                                    )}
                                                    {idx <
                                                    player.teams.length - 1
                                                        ? ", "
                                                        : ""}
                                                </span>
                                            );
                                        } else {
                                            return (
                                                <span key={idx}>
                                                    {capitalizeFirstLetter(
                                                        team
                                                    )}
                                                    {idx <
                                                    player.teams.length - 1
                                                        ? ", "
                                                        : ""}
                                                </span>
                                            );
                                        }
                                    })}
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
