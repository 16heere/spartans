import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import "./News.css";
import { createClient } from "contentful";

const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const API_KEY_PUBLISHED = process.env.REACT_APP_CONTENTFUL_API_KEY_PUBLISHED;

const client = createClient({
    space: SPACE_ID,
    accessToken: API_KEY_PUBLISHED,
});

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const entries = await client.getEntries({
                    content_type: "news",
                });
                const articles = entries.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.title,
                    image: item.fields.image
                        ? item.fields.image.fields.file.url
                        : "",
                    content: item.fields.content,
                    date: item.fields.date,
                }));
                setNews(articles);
            } catch (error) {
                console.log(error);
            }
        };

        fetchNews();
    }, []);

    return (
        <>
            <Hero title="News" />
            <div className="news-container">
                <div className="news-grid">
                    {news.map((article) => (
                        <Link
                            to={`/news/${article.id}`}
                            key={article.id}
                            className="news-item"
                        >
                            <div>
                                <img src={article.image} alt={article.title} />
                                <div>
                                    <div>
                                        <h2>{article.title}</h2>
                                        <p>
                                            <small>
                                                {new Date(
                                                    article.date
                                                ).toLocaleDateString()}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default News;
