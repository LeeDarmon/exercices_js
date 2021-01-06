function switcher(image){
    var attribut = image.getAttribute("id");
    attribut = attribut + "_2"
    image.src="images/"+attribut+".jpg";
}

function initial(image){
    var attribut = image.getAttribute("id");
    image.src="images/"+attribut+".jpg";
}

