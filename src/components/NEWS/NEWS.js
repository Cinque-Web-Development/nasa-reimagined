import React, {useState, useEffect} from 'react';
import './NEWS.css'
import fetchNews from '../../services/news-api'
import NewsArticle from './newsArticle'



export default function NEWS(){
    const [news, setNews] = useState("")

async function getNEWS(){
    const newsData= await fetchNews()
    setNews(newsData.data)
    
}

useEffect(() => {
    getNEWS()
}, [])

return(
    <>
    {news ? (
    <div className="news-container">
        {news.articles.map((a,idx) => {
            return <NewsArticle
            key={idx}
            title={a.title}
            description={a.description}
            image={a.urlToImage}
            url={a.url}
            content={a.content}
            source={a.source.name}
            published={a.publishedAt}
            />
            
        })} 
    </div>
    ):( "loading...")}
    </>
)



}