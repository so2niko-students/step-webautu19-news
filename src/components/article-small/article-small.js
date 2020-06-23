import React from 'react';

import './article-small.css';

function ArticleSmall(props){
    const { name } = props;
    return (
        <div>{ name }</div>
    );
}

export default ArticleSmall;