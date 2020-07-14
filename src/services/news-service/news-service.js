export default class NewsService{
    apiUrl = 'https://newsapi.org/v2/top-headlines?';
    apiKey = '58d7638951004aa495513f5703d744f7';

    async getNews(){
        const url = `${this.apiUrl}apiKey=${this.apiKey}&country=ua`;
        const res = fetch(url);
        const body = res.json();
        
        this.prepareArticles(body);
    }

    prepareArticles(req){
        return req.articles;
    }
}
