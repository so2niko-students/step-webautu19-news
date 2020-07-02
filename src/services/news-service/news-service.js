export default class NewsService{
    apiUrl = 'https://newsapi.org/v2/top-headlines?';
    apiKey = '58d7638951004aa495513f5703d744f7';

    getNews(){
        const url = `${this.apiUrl}apiKey=${this.apiKey}&country=ua`;
        return fetch(url)
                .then(req => req.json())
                .then(data => this.prepareArticles(data));
    }
    
    prepareArticles(req){
        return req.articles;
    }

    getNewsSmall(){
        const url = `${this.apiUrl}country=ua&category=sports&apiKey=${this.apiKey}`;
        return fetch(url)
                .then(req => req.json())
                .then(data => this.prepareArticles(data));
    }
    prepareArticlesSmall(req){
        return req.articlesSmall;
    }
}