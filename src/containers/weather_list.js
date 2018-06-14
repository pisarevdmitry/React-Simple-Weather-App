import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'



 class WeatherList extends Component{
     renderWeather(cityData) {
         const name = cityData.city.name;
         const temps = cityData.list.map(weather => weather.main.temp - 273);
         const pressure = cityData.list.map(weather => weather.main.pressure);
         const humidities = cityData.list.map(weather => weather.main.humidity);
         const {lon, lat} = cityData.city.coord;


        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td className="chart"><Chart data ={temps} color='red' units = 'град'/></td>
                <td className="chart"><Chart data ={pressure} color='orange' units="hPa"/></td>
                <td className="chart"><Chart data ={humidities} color='blue' units='%'/></td>
            </tr>
        )
     }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Город</th>
                        <th>Температура(градус цельсия)</th>
                        <th>Давление(hPa)</th>
                        <th>Влажность(%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )


    }
}

function MapStateToProps({weather}) {
    return {weather}
}
export default connect(MapStateToProps)(WeatherList)