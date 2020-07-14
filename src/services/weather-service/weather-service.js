export default class WeatherService{
    apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
    apiKey = '2be4153b4d0e96bbf17df69bc11a301e';

   async getWeather(city = 'Dnipro'){
        const url = `${this.apiUrl}appid=${this.apiKey}&q=${city}`;

        const res = await fetch(url);
        const body = res.json();
        
        return body;
    }
}