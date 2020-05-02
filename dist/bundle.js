/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* var alph = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w',
	'x', 'y', 'z', 'ź', 'ż', ' ']; */

var hendEncrypt = document.getElementById('bttnZaszyfruj');

var hendDecrypt = document.getElementById('bttnOdszyfruj');

function funcEncrypt() {
	var nplus = document.getElementById('entextarea').value;
	var keyValue = document.getElementById('inputNumber').value;
	document.getElementById('detextarea').innerHTML = encryp(nplus, keyValue);
}

function funcDecrypt() {
	var nmin = document.getElementById('detextarea').value;
	var keyValue = document.getElementById('inputNumber').value;
	document.getElementById('entextarea').innerHTML = decryp(nmin, keyValue);
}

function encryp(str, keyValue) {
	return str.split('').map(function (char) {
		var x = char.charCodeAt(0);
		if (x > 64 && x < 91) {
			// console.log("AA");
			// console.log(((x - 65 + parseInt(keyValue)) % 26) + 65);
			return String.fromCharCode((x - 65 + parseInt(keyValue)) % 26 + 65);
		} else if (x > 96 && x < 123) {
			// console.log("aa");
			// console.log((((x - 97 + parseInt(keyValue)) % 26) + 97));
			// let namber = x - 97 + parseInt(keyValue);
			// console.log('x: ' + x);
			// console.log('keyValue: ' + parseInt(keyValue));
			// console.log('namber: ' + namber);
			// console.log('mod: ' + (namber % 26));
			return String.fromCharCode((x - 97 + parseInt(keyValue)) % 26 + 97);
		} else {
			// console.log('#');
			return String.fromCharCode(x);
		}
	}).join('');
}

function decryp(str, keyValue) {
	return str.split('').map(function (char) {
		var x = char.charCodeAt(0);
		if (x > 64 && x < 91) {
			// console.log("AA");
			// console.log(90-((90 - x + parseInt(keyValue)) % 26));
			return String.fromCharCode(90 - (90 - x + parseInt(keyValue)) % 26);
		} else if (x > 96 && x < 123) {
			// console.log("aa");
			// console.log(122-(((122-x + parseInt(keyValue)) % 26)));
			// let namber = x - 97 + parseInt(keyValue);
			// console.log('x: ' + x);
			// console.log('keyValue: ' + parseInt(keValue));
			// console.log('namber: ' + namber);
			// console.log('mod: ' + (namber % 26));
			return String.fromCharCode(122 - (122 - x + parseInt(keyValue)) % 26);
		} else {
			// console.log('#');
			return String.fromCharCode(x);
		}
	}).join('');
}

hendEncrypt.addEventListener("click", funcEncrypt);

hendDecrypt.addEventListener('click', funcDecrypt);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);