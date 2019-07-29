import React, {Component} from 'react';
import styles from './WeatherBox.module.css';
import axios from 'axios';


class WeatherBox extends Component{
    state = {
        description: null,
        tempature: null,
        cityName: null,
    }
    componentDidMount(){
        const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q='
        const APP_ID = '&APPID=bfcfa473b679b91c8b68fadde8a394a9'
        console.log("wb cmpdidmnt " + this.props.city);
        axios.get(BASE_URL+this.props.city+APP_ID).then(response => {
            const fetchedData = response.data;
            const descr = fetchedData.weather["0"].main
            const tempKelvin = fetchedData.main.temp;
            const tempCelcius = (tempKelvin - 273.15).toFixed(1);
            const name = fetchedData.name;
            this.setState({description: descr, tempature:tempCelcius, cityName:name});

        })
    }

   
    render(){
        if (this.state.description === null){
            this.setState({description:"Loading"})
        }
        const iconPath = "assets/weather/"+this.state.description+".png";
        console.log(iconPath);
            return(
                <div className = {styles.WeatherBox}>
                     <div className = {styles.cityName}>{this.state.cityName}</div>
                    <div className = {styles.description}>{this.state.description}
                        <div className = {styles.icon}>
                            <img src={iconPath}></img>
                        </div>
                    </div>
                        
                    
                    <div className={styles.tempature}>{this.state.tempature} °C</div>
                </div>
                
            
        )
    }

}

export default WeatherBox;