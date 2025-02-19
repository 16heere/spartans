// src/components/Alumni/Alumni.js
import React from "react";
import { Link } from "react-router-dom";
import { Players } from "../../Teams";
import "./Alumni.css";

function Alumni() {
    const currentYear = new Date().getFullYear() - 1;
    const allPlayers = [...Players];
    const classes = [
        ...new Set(allPlayers.map((player) => player.class)),
    ].filter((classYear) => classYear <= currentYear);
    classes.sort((a, b) => b - a);

    return (
        <div className="container">
            <h1>Alumni Classes</h1>
            <div className="class-cards">
                {classes.map((classYear, index) => (
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
}

export default Alumni;
