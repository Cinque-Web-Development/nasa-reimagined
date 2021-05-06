import React from 'react';
import './newsArticle.css'

const NewsArticle = ({title, description, url, image, content, source, published}) => {
    return ( 
    
     <div className="box">
         <img className="news-img" src={image}></img>
         <h1 className="title">{title}</h1>
         <p className="published">{published}</p>
         <p className="description">{description}</p>
         <p className="source">{source}</p>
     </div>

        
     );
}
 
export default NewsArticle;