export default class NewsService{
    apiUrl = 'https://newsapi.org/v2/top-headlines?';
    apiKey = '58d7638951004aa495513f5703d744f7';

    async getNews(){
       const url = `${this.apiUrl}apiKey=${this.apiKey}&country=ua`;
      
       const res = await fetch(url);
       const body = await res.json();
       
       return this.prepareArticles(body);
    }
    
    prepareArticles(req){
        return req.articles;
    }

    async getNewsSmall(){
       const url = `${this.apiUrl}country=ua&category=sports&apiKey=${this.apiKey}`;
       const res = await fetch(url);
       const body = await res.json();
       
       return this.prepareArticles(body);
    }
   
}