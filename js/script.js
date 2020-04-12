"use strict";


/* var alph = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w',
	'x', 'y', 'z', 'ź', 'ż', ' ']; */

var hendEncrypt = document.getElementById('bttnZaszyfruj');

var hendDecrypt = document.getElementById('bttnOdszyfruj');

function funcEncrypt() {
	var nplus = document.getElementById('entextarea').value;
	document.getElementById('detextarea').innerHTML = encryp(nplus);
	console.log(encryp(nplus));
}

function funcDecrypt() {
	let inputText = document.getElementById('input');
	var nplus = Number(alph.length) - Number(alph.indexOF(inputText));
	cezar(alph, nplus, 'de');
}

function encryp(str) {
	return str.split('').map((char) => {
		var x = char.charCodeAt(0);
		if (x < 65 || x > 90) {
			return String.fromCharCode(x);
		} else if (x < 78) {
			return String.fromCharCode(x + 13);
		} else {
			return String.fromCharCode(x - 13);
		}

	}).join('');

}

hendEncrypt.addEventListener("click", funcEncrypt);


hendDecrypt.addEventListener('click', funcDecrypt);
