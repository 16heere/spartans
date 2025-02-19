import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import "./NewsDetail.css";

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY_PUBLISHED,
});

const NewsDetail = () => {
    const { newsId } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const entry = await client.getEntry(newsId);

                setArticle({
                    title: entry.fields.title,
                    image: entry.fields.image
                        ? entry.fields.image.fields.file.url
                        : "",
                    content: entry.fields.article,
                    date: entry.fields.date,
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchArticle();
    }, [newsId]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className="news-detail">
            <h1>{article.title}</h1>
            {article.image && <img src={article.image} alt={article.title} />}
            <p>{article.content}</p>
            <p>
                <small>{new Date(article.date).toLocaleDateString()}</small>
            </p>
        </div>
    );
};

export default NewsDetail;
