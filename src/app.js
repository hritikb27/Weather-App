import getWeatherData from "./api.js";

const searchName = document.querySelector('#search-name');
const submitBtn = document.querySelector('#submit');
const form = document.querySelector('#form');

function returnData(data){
    const weatherInfo = data.main.temp;
    const weatherDesc = data.weather[0].description;
    const cityName = data.name;

    return {cityName, weatherInfo, weatherDesc};
}

form.addEventListener('click', ()=>{
    preventDefault();
    if(!searchName.value==''){
        submitBtn.addEventListener('click', getWeatherData(searchName.value));
    }
})

export default returnData;