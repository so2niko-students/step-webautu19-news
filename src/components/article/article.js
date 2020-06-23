import React from 'react';

import './article.css';

function Article(props){
    return (
        <div className="card article">
            <img 
                src="https://uproxx.com/wp-content/uploads/2020/06/FURIOSA-THERON.jpg?w=1024" 
                className="card-img-top" 
                alt="Charlize Theron Is Happy To Trash Talk Steven Seagal Because He’s ‘Not Nice To Women’" />
            <div className="card-body">
                <h5 className="card-title">Charlize Theron Is Happy To Trash Talk Steven Seagal Because He’s ‘Not Nice To Women’</h5>
                <p className="card-text">Charlize Theron was in Mad Max: Fury Road, therefore she’s allowed to talk sh*t about anyone. But she’s especially allowed to talk sh*t about Steven Seagal. \r\nThe Oscar winner recently dropped by The… [+1875 chars].</p>
                <a href="https://uproxx.com/movies/charlize-theron-steven-seagal-overweight/" className="btn btn-primary">READ MORE</a>
            </div>
      </div>
    );
}

export default Article;