export default class ExchangeService {
    apiUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

    async getExchange(curr = 'EUR'){
        const url = `${this.apiUrl}`;

        const res = await fetch(url);
        const body = await res.json();
        
        return this.prepareExchange(curr, body);
    }
    
    prepareExchange(curr, data){
        return data.find(course =>{
              return course.ccy === curr;
        });
    }
}
