/* project.html JavaScript*/
var images = document.getElementsByClassName("imageStyles");

for (var x = 0; x < images.length; x++){
	var img = images[x];
	var imgID = document.getElementById("img01");
	var captionText = document.getElementById("text");
	img.onclick = function(){
		"use strict";
		fullImg.style.display = "block";
		imgID.src = this.src;
		captionText.innerHTML = this.alt;
	};
}

var fullImg = document.getElementById('fullImage');
var span = document.getElementsByClassName("exit")[0];

span.onclick = function() { 
	"use strict";
    fullImg.style.display = "none";
};
