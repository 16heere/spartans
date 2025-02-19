import React from "react";
import "./PlayerCard.css";
import { Link } from "react-router-dom";

const lowerCaseFirstLetter = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
};

const PlayerCard = ({
    id,
    firstName,
    lastName,
    number,
    image,
    position,
    profile,
}) => {
    if (profile) {
        return (
            <Link
                to={`/player/${lowerCaseFirstLetter(
                    firstName
                )}-${lowerCaseFirstLetter(lastName)}`}
            >
                <div
                    className="player-card-container"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="player-info">
                        <h4 className="player-number">{number}</h4>
                        <div className="player-text">
                            <h3>
                                {firstName} {lastName}
                            </h3>
                            <h6>{position}</h6>
                        </div>
                    </div>
                </div>
            </Link>
        );
    } else {
        return (
            <div
                className="player-card-container"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="player-info">
                    <h4 className="player-number">{number}</h4>
                    <div className="player-text">
                        <h3>
                            {firstName} {lastName}
                        </h3>
                        <h6>{position}</h6>
                    </div>
                </div>
            </div>
        );
    }
};

export default PlayerCard;
