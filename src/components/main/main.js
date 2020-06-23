import React from 'react';
import './main.css';
import Article from '../article';
import ArticleSmall from '../article-small';
import SubscribeForm from '../subscribe-form';

function Main(){
    return (
        <div className="row">
            <Article
                name="Article 1" />
            <Article
                name="Article 2" />
            <ArticleSmall
                name="small Article 1" />
            <ArticleSmall
                name="small Article 2" />
            <ArticleSmall
                name="small Article 3" />
            <SubscribeForm />
        </div>
    );
}

export default Main;