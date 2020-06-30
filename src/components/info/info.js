import React, { Component } from 'react';

import './info.css';
import WeatherService from '../../services/weather-service/';

class Info extends Component{
    state = {
        city : 'Dnipro',
        temp : 0
    }

    constructor(){
        super();
        this.weatherService = new WeatherService();

        this.weatherService.getWeather(this.city)
            .then(d => this.updateWeather(d));
    }

    updateWeather(d){
        const KELVIN = 273.15;
        const temp = d.main.temp - KELVIN;
        this.setState({
            temp
        });
    }

    render(){   
        const { city, temp } = this.state;
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
                    <button type="button" className="btn btn-info btn-sm">USD: 26.75</button>
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