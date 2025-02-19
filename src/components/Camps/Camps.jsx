import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import Hero from "../Hero/Hero";
import "./Camps.css";

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY_PUBLISHED,
});

const Camps = () => {
    const [camps, setCamps] = useState([]);

    useEffect(() => {
        const fetchCamps = async () => {
            try {
                const entries = await client.getEntries({
                    content_type: "camps",
                });
                const articles = entries.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.campTitle,
                    image: item.fields.campsImage
                        ? item.fields.campsImage.fields.file.url
                        : "",
                    youtubeLink: "https://www.youtube.com", // Replace with dynamic links if available
                }));
                setCamps(articles);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCamps();
    }, []);

    return (
        <>
            <Hero title="Camps" />
            <div className="camps-container">
                <div className="camps-grid">
                    {camps.map((article) => (
                        <div className="camp-item" key={article.id}>
                            <a
                                href={article.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="camp-image"
                                />
                            </a>
                            <div className="camp-content">
                                <h2>{article.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Camps;
