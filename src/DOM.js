const mainDiv = document.querySelector('.main')

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
}

export default appendToDom;