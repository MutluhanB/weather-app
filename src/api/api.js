import axios from 'axios';

class api {
    
    constructor(){
         //Sikrıt dökümınts
        this.BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q='
        this.APP_ID = '&APPID=bfcfa473b679b91c8b68fadde8a394a9'
        this.data = null;
    }
   
    //Getting weather data of a specific city
    getCityData = (cityName) => {
        console.log("api get city data")
        console.log("requested url: "+this.BASE_URL+cityName+this.APP_ID);
        axios.get(this.BASE_URL+cityName+this.APP_ID)
            .then(response => {
                const fetchedData = response.data
                console.log(fetchedData)
                return fetchedData;
            })        

        
         
    }
}


export default api;