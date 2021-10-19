const mainDiv = document.querySelector('.main')

function appendToDom(temp, desc){
    if(document.querySelector('.content')){
        document.querySelector('.content').remove();
    }
    const createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'content')
    const weatherTemperature = document.createElement('p');
    const weatherDescription = document.createElement('p');
    weatherTemperature.textContent = `${temp}°C`;
    weatherDescription.textContent = desc;
    createDiv.appendChild(weatherTemperature);
    createDiv.appendChild(weatherDescription);
    mainDiv.appendChild(createDiv);
}

export default appendToDom;