import React from 'react';
import './main.css';
import Article from '../article';
import ArticleSmall from '../article-small';
import SubscribeForm from '../subscribe-form';

function Main(){
    return (
        <div className="row">
            <Article />
            <Article />
            <ArticleSmall />
            <ArticleSmall />
            <ArticleSmall />
            <SubscribeForm />
        </div>
    );
}

export default Main;