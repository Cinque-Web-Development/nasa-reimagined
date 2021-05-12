import React, {useState, useEffect} from 'react';
import './NEWS.css'
import fetchNews from '../../services/news-api'
import NewsArticle from './newsArticle'



export default function NEWS(){
    const [news, setNews] = useState("")

async function getNEWS(){
    const newsData = await fetchNews()
    setNews(newsData.data.hits)
    
}

useEffect(() => {
    getNEWS()
}, [])

return(
    <>
    <div className="news-header-container">
        <h3 className="news-header">News Feed</h3>
        </div>
    {news ? (
        
    <div className="news-container">
        
        {news.map((a,idx) => {
            return <NewsArticle
            key={idx}
            title={a.title}
            description={a.description}
            image={a.imageUrl}
            url={a.url}
            content={a.content}
            source={a.source}
            published={a.pubDate}
            />
            
        })} 
    </div>
    ):( "loading...")}
    </>
)



}