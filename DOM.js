function appendToDom(temp, desc){
    const createDiv = document.createElement('div');
    const weatherTemperature = document.createElement('p');
    const weatherDescription = document.createElement('p');
    weatherTemperature.textContent = temp;
    weatherDescription.textContent = desc;
    createDiv.appendChild(weatherTemperature);
    createDiv.appendChild(weatherDescription);
    document.body.appendChild(createDiv);
}

export default appendToDom;