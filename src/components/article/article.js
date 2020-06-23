import React from 'react';

import './article.css';

function Article(props){
    const { name } = props;
    return (
    <div>{ name }</div>
    );
}

export default Article;