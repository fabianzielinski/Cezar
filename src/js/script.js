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
	return str.split('').map((char) => {
		var x = char.charCodeAt(0);
		if (x > 64 && x < 91) {
			// console.log("AA");
			// console.log(((x - 65 + parseInt(keyValue)) % 26) + 65);
			return String.fromCharCode(((x - 65 + parseInt(keyValue)) % 26) + 65);
		} else if (x > 96 && x < 123) {
			// console.log("aa");
			// console.log((((x - 97 + parseInt(keyValue)) % 26) + 97));
			// let namber = x - 97 + parseInt(keyValue);
			// console.log('x: ' + x);
			// console.log('keyValue: ' + parseInt(keyValue));
			// console.log('namber: ' + namber);
			// console.log('mod: ' + (namber % 26));
			return String.fromCharCode((((x - 97 + parseInt(keyValue)) % 26) + 97));
		} else {
			// console.log('#');
			return String.fromCharCode(x);
		}

	}).join('');

}

function decryp(str, keyValue) {
	return str.split('').map((char) => {
		var x = char.charCodeAt(0);
		if (x > 64 && x < 91) {
			// console.log("AA");
			// console.log(90-((90 - x + parseInt(keyValue)) % 26));
			return String.fromCharCode(90-((90 - x + parseInt(keyValue)) % 26));
		} else if (x > 96 && x < 123) {
			// console.log("aa");
			// console.log(122-(((122-x + parseInt(keyValue)) % 26)));
			// let namber = x - 97 + parseInt(keyValue);
			// console.log('x: ' + x);
			// console.log('keyValue: ' + parseInt(keValue));
			// console.log('namber: ' + namber);
			// console.log('mod: ' + (namber % 26));
			return String.fromCharCode(122-(((122-x + parseInt(keyValue)) % 26)));
		} else {
			// console.log('#');
			return String.fromCharCode(x);
		}

	}).join('');

}

hendEncrypt.addEventListener("click", funcEncrypt);


hendDecrypt.addEventListener('click', funcDecrypt);
