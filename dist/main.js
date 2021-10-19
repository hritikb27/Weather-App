/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendToDom": () => (/* binding */ appendToDom),
/* harmony export */   "errorDom": () => (/* binding */ errorDom),
/* harmony export */   "clearInput": () => (/* binding */ clearInput)
/* harmony export */ });
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



/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");



async function getWeatherData(city){
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.clearInput)();
    try{
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=da1415bcd179cb0a0f0f46e4d796346a`, {mode:'cors'});
    const response = await apiCall.json();
    const getData = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__["default"])(response);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.appendToDom)(getData.cityName, getData.weatherInfo, getData.weatherDesc);
    }catch{
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.errorDom)();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");


const searchName = document.querySelector('#search-name');
const submitBtn = document.querySelector('#submit');
const form = document.querySelector('#form');

function returnData(data){
    const weatherInfo = data.main.temp;
    const weatherDesc = data.weather[0].description;
    const cityName = data.name;

    return {cityName, weatherInfo, weatherDesc};
}

form.addEventListener('click', (event)=>{
    event.preventDefault();
    if(!searchName.value==''){
        submitBtn.addEventListener('click', (0,_api_js__WEBPACK_IMPORTED_MODULE_0__["default"])(searchName.value));
    }
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (returnData);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q2lDO0FBQ3lCOztBQUUxRDtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBLHFGQUFxRixLQUFLLHdEQUF3RCxZQUFZO0FBQzlKO0FBQ0Esb0JBQW9CLG1EQUFVO0FBQzlCLElBQUksb0RBQVc7QUFDZixLQUFLO0FBQ0wsUUFBUSxpREFBUTtBQUNoQjtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZTOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtREFBYztBQUMxRDtBQUNBLENBQUM7O0FBRUQsaUVBQWUsVUFBVTs7Ozs7O1VDckJ6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG5cbmZ1bmN0aW9uIGFwcGVuZFRvRG9tKG5hbWUsIHRlbXAsIGRlc2Mpe1xuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jykpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50JylcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB3ZWF0aGVyVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB3ZWF0aGVyVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt0ZW1wfcKwQ2A7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcbiAgICBjcmVhdGVEaXYuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xuICAgIGNyZWF0ZURpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyVGVtcGVyYXR1cmUpO1xuICAgIGNyZWF0ZURpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVzY3JpcHRpb24pO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KTtcbn07XG5cbmZ1bmN0aW9uIGVycm9yRG9tKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgaWYoY29udGVudCl7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlKClcbiAgICB9XG4gICAgY29uc3QgZXJyb3JQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVycm9yUGFyYS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Vycm9yTWVzc2FnZScpXG4gICAgZXJyb3JQYXJhLnRleHRDb250ZW50ID0gJ1BsZWFzZSB0cnkgZW50ZXJpbmcgYW5vdGhlciBDaXR5ISc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlcnJvclBhcmEpO1xufTtcblxuZnVuY3Rpb24gY2xlYXJJbnB1dCgpe1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1lc3NhZ2UnKTtcbiAgICBpZihlcnJvck1lc3NhZ2Upe1xuICAgICAgICBlcnJvck1lc3NhZ2UucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLW5hbWUnKTtcbiAgICBzZWFyY2hOYW1lLnZhbHVlID0gJyc7XG59O1xuXG5leHBvcnQge2FwcGVuZFRvRG9tLCBlcnJvckRvbSwgY2xlYXJJbnB1dH07IiwiaW1wb3J0IHJldHVybkRhdGEgZnJvbSAnLi9hcHAuanMnXG5pbXBvcnQge2FwcGVuZFRvRG9tLCBlcnJvckRvbSwgY2xlYXJJbnB1dH0gZnJvbSAnLi9ET00uanMnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHkpe1xuICAgIGNsZWFySW5wdXQoKTtcbiAgICB0cnl7XG4gICAgY29uc3QgYXBpQ2FsbCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWRhMTQxNWJjZDE3OWNiMGEwZjBmNDZlNGQ3OTYzNDZhYCwge21vZGU6J2NvcnMnfSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDYWxsLmpzb24oKTtcbiAgICBjb25zdCBnZXREYXRhID0gcmV0dXJuRGF0YShyZXNwb25zZSk7XG4gICAgYXBwZW5kVG9Eb20oZ2V0RGF0YS5jaXR5TmFtZSwgZ2V0RGF0YS53ZWF0aGVySW5mbywgZ2V0RGF0YS53ZWF0aGVyRGVzYyk7XG4gICAgfWNhdGNoe1xuICAgICAgICBlcnJvckRvbSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckRhdGE7IiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL2FwaS5qc1wiO1xuXG5jb25zdCBzZWFyY2hOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1uYW1lJyk7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKTtcblxuZnVuY3Rpb24gcmV0dXJuRGF0YShkYXRhKXtcbiAgICBjb25zdCB3ZWF0aGVySW5mbyA9IGRhdGEubWFpbi50ZW1wO1xuICAgIGNvbnN0IHdlYXRoZXJEZXNjID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZGF0YS5uYW1lO1xuXG4gICAgcmV0dXJuIHtjaXR5TmFtZSwgd2VhdGhlckluZm8sIHdlYXRoZXJEZXNjfTtcbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCFzZWFyY2hOYW1lLnZhbHVlPT0nJyl7XG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldFdlYXRoZXJEYXRhKHNlYXJjaE5hbWUudmFsdWUpKTtcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCByZXR1cm5EYXRhOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9