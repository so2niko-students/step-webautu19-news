import React from 'react';

import './article.css';

function Article({ news }){
    console.log(news);
    if(!news){
        return null;
    }
    const {
        urlToImage,
        title,
        description,
        url
    } = news;

    return (
        <div className="card article bg-dark text-white">
            <img 
                src={ urlToImage } 
                className="card-img-top" 
                alt="Charlize Theron Is Happy To Trash Talk Steven Seagal Because He’s ‘Not Nice To Women’" />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ description }</p>
                <a href={ url } className="btn btn-primary">READ MORE</a>
            </div>
      </div>
    );
}

export default Article;