/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\ndocument.addEventListener('DOMContentLoaded', () => {\n    if ('geolocation' in navigator) {\n        navigator.geolocation.getCurrentPosition((position) => {\n            const latitude = position.coords.latitude;\n            const longitude = position.coords.longitude;\n            const headers = new Headers();\n            headers.append('X-Req-Id', '1689180792496067-16091216986806160979-jmvzo64mxhwflejj-BAL');\n            // Запрос к API погоды\n            const apiUrl = `https://api.weather.yandex.ru/v2/forecast?lat=${latitude}&lon=${longitude}&extra=true`;\n            fetch(apiUrl, { headers })\n                .then((response) => response.json())\n                .then((data) => {\n                // Обработка данных погоды\n                const city = data.geo_object.locality.name;\n                const temperature = data.fact.temp;\n                console.log(data);\n                // Вывод данных на страницу\n                document.body.innerHTML = `\r\n              <h2>Погода в ${city}</h2>\r\n              <p>Температура: ${temperature}°C</p>\r\n            `;\n            })\n                .catch((error) => {\n                console.error('Ошибка при получении данных погоды:', error);\n            });\n        }, (error) => {\n            console.error('Ошибка получения местоположения:', error);\n        });\n    }\n    else {\n        console.error('Браузер не поддерживает геолокацию');\n    }\n});\n\n\n//# sourceURL=webpack://meteoria/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;