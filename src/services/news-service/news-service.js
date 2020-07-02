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

    getSmallNews(){
        const url = `${this.apiUrl}apiKey=${this.apiKey}&country=ua&category=science`;
        return fetch(url)
                .then(req => req.json())
                .then(data => this.prepareSmallArticles(data));
    }

    prepareSmallArticles(req){
        return req.cmallarticles;
    }
}