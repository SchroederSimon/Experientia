import { useState, useEffect } from 'react';
import { newsAPI } from '../../hooks/newsHook';
import { articleInterface } from '../../models/articlesInterface'

// Service api news

import '../../pages/News/News.css'



function News() {
    const { getTopHeadlines } = newsAPI();
    const [articles, setArticles] = useState<articleInterface[]>([]);

    useEffect(() => {
        async function fetchArticles() {
            const data = await getTopHeadlines();
            setArticles(data);
        }
        fetchArticles();
    }, []);

    return (
        <div className="news-big-container">
            <h1>EDUCATION AND JOB MARKET</h1>
            {    
                articles.slice(0, 5).map((article) => (
                    <div className="news"key={article.url}>
                        <div className="news-container" >
                            <img src={article.urlToImage} alt=""/>
                            <div className="news-text">
                                <span>{article.author}</span>
                                <h2>{article.title}</h2>
                                <p>{article.description}<span><a href={article.url} target="_blank">Read more</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="blog">
                <h1>BLOG POSTS</h1>
            </div>
        </div >
    )
}

export default News

