function init(){
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = changeBigPicture;
	}
}
function changeBigPicture(eventObj){
	var appDiv = document.getElementById("big_picture");
	appDiv.innerHTML = "";	
    var eventElement = eventObj.target;
    var imageNameParts = eventElement.id.split("_");
	var src = "img/gallery/big/" + imageNameParts[1] + ".jpg";
	var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.onerror = function(){
        alert("error!");
        eventElement.style.display = 'none';
    };
	appDiv.appendChild(imageDomElement);
}
window.onload = init;