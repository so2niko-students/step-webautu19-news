import React, { Component } from 'react';
import './main.css';
import Article from '../article';
import ArticleSmall from '../article-small';
import SubscribeForm from '../subscribe-form';
import NewsService from '../../services/news-service';

class Main extends Component{
    state = {
        articles : Array(5).fill(null)
    }
    newsService = new NewsService();

    constructor(props){
        super(props);
        this.newsService.getNews().then(data => this.updateArticles(data));
    }

    updateArticles(articles){
        this.setState({ articles });
    }

    render(){
        const { articles } = this.state;
        return (
            <div className="row">
                <Article 
                    news={ articles[0] }/>
                <Article 
                    news={ articles[1] }/>
                <ArticleSmall />
                <ArticleSmall />
                <ArticleSmall />
                <SubscribeForm />
            </div>
        );
    }
}

export default Main;