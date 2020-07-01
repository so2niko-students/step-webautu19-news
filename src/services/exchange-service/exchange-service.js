export default class ExchangeService {
    apiUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

    getExchange(curr = 'EUR'){
        const url = `${this.apiUrl}`;
        return fetch(url)
           .then(req => req.json())
           .then(data =>{
           return this.prepareExchange
           (curr, data);
        } );
    }
    
    prepareExchange(curr, data){
        return data.find(course =>{
              return course.ccy === curr;
        });
    }
}