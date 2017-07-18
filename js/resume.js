// JavaScript Document
var lengths = [85, 70, 65, 85, 85, 70, 60, 70, 65, 80, 50, 90];

var percBars = document.getElementsByClassName("bar");

for (var x = 0; x < percBars.length; x++){	
	percBars[x].style.width = lengths[x].toString() + '%';
}