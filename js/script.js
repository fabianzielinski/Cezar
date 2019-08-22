"use strict";

var alph  = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','q','r','s','ś','t','u','v','w',
'x','y','z','ź','ż', ' ']; 

var hendEncrypt = document.getElementById('bttnZaszyfruj');

var hendDecrypt = document.getElementById('bttnOdszyfruj');

function funcEncrypt() {
		var nplus = document.getElementById('input').value;
   		cezar(alph, nplus, 'en');
}

function funcDecrypt() {
			var nplus = Number(alph.length) - Number(alph.indexOF(document.getElementsByTagName('input')));
   			cezar(alph, nplus, 'de');
}

function cezar(alph, nplus, direction) {
 				var Ta = document.getElementById(direction +"textarea").value;
           		Text = Ta.split("");  
     		    var Coded = [];
        		Text.forEach(function (sVal, j) {
       				var poz_w_alph = alph.indexOF(sVal);
               		if (poz_w_alph != -1) {
               	 		var new_poz = Number(nplus) + poz_w_alph;
               	 		if (new_poz >= alph.length) {new_poz = new_poz - alph.length}
 								Coded.push(alph[new_poz]);
               }        
        });
        var req_stmt = Coded.join("");
        $("#"+ direction +"crypt").html(req_stmt);  
 }

hendEncrypt.addEventListener("click", funcEncrypt);
				

hendDecrypt.addEventListener('click', funcDecrypt);
