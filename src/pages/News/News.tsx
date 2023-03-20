import { useState, useEffect } from 'react';
import { newsAPI } from '../../hooks/newsHook';
import { useRedditPosts } from '../../hooks/redditHook';
import { articleInterface } from '../../models/articlesInterface'


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

    const posts = useRedditPosts();
    
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
                <h1>REDDIT POSTS</h1>
                {
                    posts.slice(0, 7).map((post) => (
                        <div className="news-content" key={post.url}>
                            <div className="news-information">
                                <h2>{post.title}</h2>
                                <span>{post.author}</span>
                                <p>{post.selftext?.split(' ').slice(0, 100).join(' ')}<span><a href={post.url} target="_blank"> Read more</a></span>
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