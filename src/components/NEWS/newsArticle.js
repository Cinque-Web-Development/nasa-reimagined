import React from 'react';
import './newsArticle.css'

const NewsArticle = ({key,title, description, image, content, source, published}) => {
    return ( 
        <>
<div id="card" class="ui card">
  <div class="image">
   <div>{image}</div>
  </div>
  <div class="content">
    <a class="header">{title}</a>
    <div class="meta">
      <span class="date">{published}</span>
    </div>
    <div class="description">
     {description}
    </div>
  </div>
  <div class="extra content">
    <a>
     {source}
    </a>
  </div>
</div>

        </>
     );
}
 
export default NewsArticle;