/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import './style.css';\r\n\r\nfunction storageAvailable(type) {\r\n  let storage;\r\n  try {\r\n      storage = window[type];\r\n      var x = '__storage_test__';\r\n      storage.setItem(x, x);\r\n      storage.removeItem(x);\r\n      return true;\r\n  }\r\n  catch(e) {\r\n      return e instanceof DOMException && (\r\n          // everything except Firefox\r\n          e.code === 22 ||\r\n          // Firefox\r\n          e.code === 1014 ||\r\n          // test name field too, because code might not be present\r\n          // everything except Firefox\r\n          e.name === 'QuotaExceededError' ||\r\n          // Firefox\r\n          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\r\n          // acknowledge QuotaExceededError only if there's something already stored\r\n          (storage && storage.length !== 0);\r\n  }\r\n}\r\n\r\nif (storageAvailable('localStorage')) {\r\n\r\n} else {\r\n  alert(\"Storage is all used up, king!\");\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;