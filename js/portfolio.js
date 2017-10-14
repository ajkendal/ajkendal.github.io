var images = document.getElementsByClassName("fullImageLink");

for (var x = 0; x < images.length; x++){
    console.log(x);
	var img = images[x];
	var imgID = document.getElementById("img01");
	img.onclick = function(){
		"use strict";
		fullImg.style.display = "block";
		imgID.src = this.src;
	};
}

var fullImg = document.getElementById('fullImage');
var span = document.getElementsByClassName("exit")[0];

span.onclick = function() { 
	"use strict";
    fullImg.style.display = "none";
};
