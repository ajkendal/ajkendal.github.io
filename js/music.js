// JavaScript Document

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
	"use strict";
	if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("topButton").style.display = "block";
	} else {
		document.getElementById("topButton").style.display = "none";
	}
}

function toTopFunction() {
	"use strict";
	document.body.scrollTop = 0;
	
	document.documentElement.scrollTop = 0;
}





