import React from "react";
import { Link } from "react-router-dom";
import { Players } from "../../Teams";

const Recruitment = () => {
    const currentYear = new Date().getFullYear();
    const allPlayers = [...Players];
    const u19Players = allPlayers.filter((player) =>
        player.teams.includes("u19")
    );

    const classes = [
        ...new Set(u19Players.map((player) => player.class)),
    ].filter((classYear) => classYear >= currentYear);

    classes.sort((a, b) => a - b);

    const groupedPlayers = classes.map((classYear) => ({
        classYear,
        players: u19Players.filter((player) => player.class === classYear),
    }));

    return (
        <div className="container">
            <h1>Recruitment Classes</h1>
            <div className="class-cards">
                {groupedPlayers.map(({ classYear }, index) => (
                    <div key={index} className="card">
                        <Link to={`/class/${classYear}`}>
                            <h2>
                                {classYear - 1}/{classYear % 100}
                            </h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recruitment;
