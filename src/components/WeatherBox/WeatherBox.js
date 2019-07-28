import React, {Component} from 'react';
import styles from './WeatherBox.module.css';
import axios from 'axios';

class WeatherBox extends Component{
    state = {
        description: null,
        tempature: null,
    }
    componentDidMount(){
        const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q='
        const APP_ID = '&APPID=bfcfa473b679b91c8b68fadde8a394a9'
        console.log("wb cmpdidmnt " + this.props.city);
        axios.get(BASE_URL+this.props.city+APP_ID).then(response => {
            const fetchedData = response.data;
            const descr = fetchedData.weather["0"].main
            const tempDirty = fetchedData.main.temp;
            const temp = (tempDirty / 10).toFixed(2)
            this.setState({description: descr, tempature:temp})
        })
    }
    render(){
            return(
                <div className = {styles.WeatherBox}>
                    <div>
                    {this.props.city}
                    </div>
                    <div>{this.state.description}</div>
                    <div>{this.state.tempature}</div>
                
            </div>
        )
    }

}

export default WeatherBox;