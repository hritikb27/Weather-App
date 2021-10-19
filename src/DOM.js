const mainDiv = document.querySelector('.main');
const form = document.querySelector('#form');

function appendToDom(name, temp, desc){
    if(document.querySelector('.content')){
        document.querySelector('.content').remove();
    }
    const createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'content')
    const cityName = document.createElement('p');
    const weatherTemperature = document.createElement('p');
    const weatherDescription = document.createElement('p');
    cityName.textContent = name;
    weatherTemperature.textContent = `${temp}°C`;
    weatherDescription.textContent = desc;
    createDiv.appendChild(cityName);
    createDiv.appendChild(weatherTemperature);
    createDiv.appendChild(weatherDescription);
    mainDiv.appendChild(createDiv);
};

function errorDom(){
    const content = document.querySelector('.content');
    if(content){
        content.remove()
    }
    const errorPara = document.createElement('p');
    errorPara.setAttribute('class', 'errorMessage')
    errorPara.textContent = 'Please try entering another City!';
    form.appendChild(errorPara);
};

function clearInput(){
    const errorMessage = document.querySelector('.errorMessage');
    if(errorMessage){
        errorMessage.remove();
    }
    const searchName = document.querySelector('#search-name');
    searchName.value = '';
};

export {appendToDom, errorDom, clearInput};