import returnData from './app.js'
import {appendToDom, errorDom, clearInput} from './DOM.js'

async function getWeatherData(city){
    clearInput();
    try{
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=da1415bcd179cb0a0f0f46e4d796346a`, {mode:'cors'});
    const response = await apiCall.json();
    const getData = returnData(response);
    appendToDom(getData.cityName, getData.weatherInfo, getData.weatherDesc);
    }catch{
        errorDom();
    }
}

export default getWeatherData;