import '../../pages/News/News.css'


function News() {

    return (
        <div className="news-big-container">
            <div className="news">
                <h1>EDUCATION AND JOB MARKET</h1>
                <div className="news-container">
                    <img src="learn.png" alt="" />
                    <div className="news-text">
                        <span>Some newspaper</span>
                        <h2>Some fancy title for the new</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Natus laudantium minima, distinctio eius vero facere rerum,
                            quae, ex esse amet quisquam cupiditate. Iusto aliquid itaque
                            dolore, laboriosam at culpa pariatur?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Natus laudantium minima, distinctio eius vero facere rerum,
                            quae, ex esse amet quisquam cupiditate. Iusto aliquid itaque
                            dolore, laboriosam at culpa pariatur?
                        </p>
                    </div>
                </div>
            </div>
            <div className="blog">
                <h1>BLOG POSTS</h1>
            </div>
        </div>
    )
}

export default News
