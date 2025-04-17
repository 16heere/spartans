import React from "react";
import { Link } from "react-router-dom";
import { Players } from "../../Teams";
import "./Recruitment.css";
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
        <div className="recruitment-container">
            <h1>Recruitment Classes</h1>
            <p className="subtitle">
                Explore our standout recruiting classes. Click on a year to see
                the full roster.
            </p>
            <div className="class-cards">
                {groupedPlayers.map(({ classYear, players }, index) => (
                    <div key={index} className="class-card">
                        <Link to={`/class/${classYear}`} className="card-link">
                            <img
                                src={`/assets/recruitment/${classYear}.png`}
                                alt={`Class of ${classYear}`}
                                className="class-image"
                            />
                            <div className="card-content">
                                <h2 className="class-year">
                                    {classYear - 1}/{classYear % 100}
                                </h2>
                                <p className="class-count">
                                    {players.length} Player
                                    {players.length > 1 ? "s" : ""}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recruitment;
