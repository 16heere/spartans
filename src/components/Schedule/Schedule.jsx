import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaShareSquare } from "react-icons/fa";
import { createClient } from "contentful";
import "./Schedule.css";
import Hero from "../Hero/Hero";

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY_PUBLISHED,
});

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return "th"; // general rule
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };
    const dayWithSuffix = day + getOrdinalSuffix(day);

    return `${dayWithSuffix} ${month} ${year}`;
};

const Schedule = ({ contentType }) => {
    const [schedule, setSchedule] = useState([]);
    let team;

    switch (contentType) {
        case "mensSchedule":
            team = "mens";
            break;
        case "u19ISchedule":
            team = "U19 I";
            break;
        case "u19IiSchedule":
            team = "U19 II";
            break;
        case "u16Schedule":
            team = "U16";
            break;
        case "u14schedule":
            team = "U14";
            break;
        default:
            break;
    }

    useEffect(() => {
        const fetchCamps = async () => {
            try {
                const entries = await client.getEntries({
                    content_type: contentType,
                });

                const articles = entries.items.map((item) => {
                    console.log(item.fields);
                    return {
                        id: item.sys.id,
                        homeTeam: item.fields.homeTeam,
                        awayTeam: item.fields.awayTeam,
                        location: item.fields.location,
                        result: item.fields.result,
                        win: item.fields.win,
                        date: formatDate(item.fields.date.split("T")[0]),
                        dateTime: new Date(item.fields.date),
                        time: item.fields.date.split("T")[1].split("+")[0],
                        boxScore: item.fields.boxScore,
                        newsId: item.fields.newsLinkUrl,
                    };
                });
                articles.sort((a, b) => b.dateTime - a.dateTime);
                setSchedule(articles);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCamps();
    }, [contentType]);

    return (
        <>
            {console.log(team)}
            <Hero title={`${team[0].toUpperCase() + team.slice(1)} Schedule`} />
            <div className="mens-schedule-container">
                <div className="buttons-container">
                    {team === "U19 I" || team === "U19 II" ? (
                        <>
                            <Link
                                to={`/teams/u19/roster`}
                                className="nav-button"
                            >
                                Roster
                            </Link>
                            <Link to={`/teams/u19/team`} className="nav-button">
                                Team
                            </Link>
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
                        <>
                            <Link
                                to={`/teams/${team}/roster`}
                                className="nav-button"
                            >
                                Roster
                            </Link>
                            <Link
                                to={`/teams/${team}/team`}
                                className="nav-button"
                            >
                                Team
                            </Link>
                            <Link
                                to={`/teams/${team}/schedule`}
                                className="nav-button"
                            >
                                Schedule
                            </Link>
                        </>
                    )}
                </div>
                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Home Team</th>
                            <th>Result</th>
                            <th>Away Team</th>
                            <th>Location</th>
                            {contentType === "mensSchedule" ||
                            contentType === "u19ISchedule" ? (
                                <th>Links</th>
                            ) : (
                                ""
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((article, index) => (
                            <tr key={index}>
                                <td data-label="Date">{article.date}</td>
                                <td data-label="Time">{article.time}</td>
                                <td data-label="Home Team">
                                    {article.homeTeam}
                                </td>
                                <td
                                    className="result-table-data"
                                    data-label="Result"
                                    style={
                                        article.win
                                            ? { color: "limegreen" }
                                            : { color: "red" }
                                    }
                                >
                                    <div className="result-container">
                                        <span className="result-left">
                                            {article.result.split("-")[0]}
                                        </span>
                                        <span className="result-center">-</span>
                                        <span className="result-right">
                                            {article.result.split("-")[1]}
                                        </span>
                                    </div>
                                </td>
                                <td data-label="Away Team">
                                    {article.awayTeam}
                                </td>
                                <td data-label="Location">
                                    {article.location}
                                </td>
                                {contentType === "mensSchedule" ||
                                contentType === "u19ISchedule" ? (
                                    <td>
                                        {article.boxScore ? (
                                            <a
                                                href={
                                                    article.boxScore.fields.file
                                                        .url
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaChartBar className="icon-gap" />
                                                Box Score
                                            </a>
                                        ) : (
                                            ""
                                        )}
                                        {article.newsId ? (
                                            <Link
                                                to={`/news/${article.newsId}`}
                                            >
                                                <FaShareSquare className="icon-gap" />
                                                Recap
                                            </Link>
                                        ) : (
                                            ""
                                        )}
                                    </td>
                                ) : (
                                    ""
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Schedule;
