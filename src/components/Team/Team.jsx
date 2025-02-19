import React from "react";
import { Link } from "react-router-dom";
import { Players } from "../../Teams";
import "./Team.css";
import PlayerCard from "../PlayerCard/PlayerCard";
import Hero from "../Hero/Hero";

const Team = ({ team }) => {
    const Team = Players.filter((player) => player.teams.includes(team));
    Team.sort((a, b) => a.number - b.number);

    return (
        <div className="team">
            <Hero title={`${team[0].toUpperCase() + team.slice(1)} Team`} />

            <div className="buttons-container">
                <Link to={`/teams/${team}/roster`} className="nav-button">
                    Roster
                </Link>
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

            <div className="grid-container">
                {Team.map((player) => {
                    return (
                        <PlayerCard
                            key={player.id}
                            id={player.id}
                            firstName={player.firstName}
                            lastName={player.lastName}
                            number={player.number}
                            position={player.position}
                            image={player.image}
                            profile={player.profile}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Team;
