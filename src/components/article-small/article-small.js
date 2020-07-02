import React from 'react';

import './article-small.css';

function ArticleSmall({ newsSmall }){
    if(!newsSmall){
        return null;
    }
    const {
        urlToImage,
        title,
        url
    } = newsSmall;
    return (
        <div className="card bg-dark text-white article-small">
            <a 
                        className="article-title"
                        href={ url}>
                <img 
                    src= { urlToImage }
                    className="card-img" 
                    alt={ title }/>
                <div className="card-img-overlay">
                    <p className="card-text">
                        <span className="article-title">
                           { title }
                        </span>
                    </p>
                </div>
            </a>
        </div>
    );
}

export default ArticleSmall;