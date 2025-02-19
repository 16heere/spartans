import React from "react";
import { Link } from "react-router-dom";
import { Players } from "../../Teams";
import "./Roster.css";
import Hero from "../Hero/Hero";

const Roster = ({ team }) => {
    const Roster = Players.filter((player) => player.teams.includes(team));
    Roster.sort((a, b) => a.number - b.number);

    return (
        <div className="roster">
            <Hero title={`${team[0].toUpperCase() + team.slice(1)} Roster`} />

            <div className="buttons-container">
                <Link to={`/teams/${team}/roster`} className="nav-button">
                    Roster
                </Link>{" "}
                <Link to={`/teams/${team}/team`} className="nav-button">
                    Team
                </Link>
                {team === "u19" ? (
                    <>
                        <Link
                            to={`/teams/u19-I/schedule`}
                            className="nav-button"
                        >
                            U19 I Schedule
                        </Link>
                        <Link
                            to={`/teams/u19-II/schedule`}
                            className="nav-button"
                        >
                            U19 II Schedule
                        </Link>
                    </>
                ) : (
                    <Link to={`/teams/${team}/schedule`} className="nav-button">
                        Schedule
                    </Link>
                )}
            </div>

            <table className="roster-table">
                <thead className="roster-table-head">
                    <th>#</th>
                    <th>Player</th>
                    <th>Position</th>
                    <th>Height</th>
                </thead>
                <tbody>
                    {Roster.map((player) => {
                        return (
                            <tr className="roster-row" key={player.id}>
                                <td
                                    className="table-data"
                                    style={{ color: "grey" }}
                                >
                                    <Link
                                        to={`/player/${player.firstName}-${player.lastName}`}
                                    >
                                        {player.number}
                                    </Link>
                                </td>
                                <td className="table-data">
                                    <Link
                                        to={`/player/${player.firstName}-${player.lastName}`}
                                    >
                                        <p>
                                            {player.firstName} {player.lastName}
                                        </p>
                                    </Link>
                                </td>
                                <td
                                    className="table-data"
                                    style={{ color: "grey" }}
                                >
                                    <Link
                                        to={`/player/${player.firstName}-${player.lastName}`}
                                    >
                                        {player.position}
                                    </Link>
                                </td>
                                <td className="table-data">
                                    <Link
                                        to={`/player/${player.firstName}-${player.lastName}`}
                                    >
                                        {player.height}
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Roster;
