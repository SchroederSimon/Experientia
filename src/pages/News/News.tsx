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
        <div className="news-blog-container">
            <div className="news-left-side">
                <h1>EDUCATION AND JOB MARKET</h1>
                {
                    articles.slice(0, 5).map((article) => (
                        <div className="news-content" key={article.url} >
                            <h2>{article.title}</h2>
                            <span>{article.author}</span>
                            <img src={article.urlToImage} alt={article.title} />
                            <p>{article.description}<span><a href={article.url} target="_blank"> Read more</a></span></p>
                        </div>
                    ))
                }
            </div>
            <div className="blog-right-side">
                <h1>BLOG POSTS</h1>
                {
                    articles.slice(0, 5).map((article) => (
                        <div className="news-content" key={article.url}>
                            <img src={article.urlToImage} alt={article.title} />
                            <div className="news-information">
                                <span>{article.author}</span>
                                <h2>{article.title}</h2>
                                <p>{article.description}<span><a href={article.url} target="_blank">Read more</a></span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default News

{/* <div className="parent-container">
<div className="news-blog-container">
    <div className="left-side">
        <h1>EDUCATION AND JOB MARKET</h1>
        {
            articles.slice(0, 5).map((article) => (
                <div className="news-container" key={article.url}>
                    <div className="news-content" >
                        <img src={article.urlToImage} alt={article.title} />
                        <div className="news-information">
                            <span>{article.author}</span>
                            <h2>{article.title}</h2>
                            <p>{article.description}<span><a href={article.url} target="_blank">Read more</a></span>
                            </p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    <div className="right-side">
        <h1>EDUCATION AND JOB MARKET</h1>
        {
            articles.slice(0, 5).map((article) => (
                <div className="news-container" key={article.url}>
                    <div className="news-content" >
                        <img src={article.urlToImage} alt={article.title} />
                        <div className="news-information">
                            <span>{article.author}</span>
                            <h2>{article.title}</h2>
                            <p>{article.description}<span><a href={article.url} target="_blank">Read more</a></span></p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
</div>
</div> */}