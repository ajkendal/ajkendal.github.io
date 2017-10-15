function openFullImage(imageString) {
    "use strict";
    var img = document.createElement('img');
    img.src = imageString;
    
    document.getElementById('centeredIDImage').appendChild(img);
    
    document.getElementById('imageOverlay').style.width = "100%";
}

function closeFullImage() {
    "use strict";
    
    var clearImage = document.getElementById('centeredIDImage');
    
    while (clearImage.hasChildNodes()) {   
        clearImage.removeChild(clearImage.firstChild);
    }
    document.getElementById('imageOverlay').style.width = "0%";
}