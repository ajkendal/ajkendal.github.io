// JavaScript Document

var percBars = document.getElementsByClassName("bar");

for (var x = 0; x < percBars.length; x++){	
	percBars[x].style.width = lengths[x].toString() + '%';
}