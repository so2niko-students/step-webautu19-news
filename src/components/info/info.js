import React, { Component } from 'react';

import './info.css';
import WeatherService from '../../services/weather-service/';
import ExchangeService from '../../services/exchange-service/';


class Info extends Component{
    state = {
        city : 'Dnipro',
        temp : 0,
        currency : 'EUR',
        currency2 : 'USD',
        course : 0,
        course2 : 0
    }

    constructor(){
        super();
        this.weatherService = new WeatherService();
        
        this.weatherService.getWeather(this.state.city)
            .then(d => this.updateWeather(d));
        
        this.exchangeService = new ExchangeService();

        this.exchangeService.getExchange(this.state.currency)
            .then(d => this.updateExchange(d));
        
        this.exchangeService.getExchangeUSD(this.state.currency2)
        .then(d => this.updateExchangeUSD(d));

    }

    updateWeather(d){
        const KELVIN = 273.15;
        const temp = d.main.temp - KELVIN;
        this.setState({
            temp
        });
    }

    updateExchange(d){
        const course = (+d.sale).toFixed(2);

        this.setState({
            course
        });
    }
    updateExchangeUSD(d){
        const course2 = (+d.sale).toFixed(2);

        this.setState({
            course2
        });
    }
    
    render(){   
        const { city, temp, currency, course, course2, currency2 } = this.state;
        const sign = temp >= 0 ? '+' : '-';

        return (
            <div className=" col-3 col-xl-2">
                <div className="btn-group">
        <button type="button" className="btn btn-info btn-sm">{ city } { sign }{ temp }°C</button>
                    <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </button>
                    {/* <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div> */}
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-info btn-sm">{ currency } : { course }UAH</button>
                    <button type="button" className="btn btn-info btn-sm">{ currency2 } : { course2 }UAH</button>
                    <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </button>
                    {/* <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Info;