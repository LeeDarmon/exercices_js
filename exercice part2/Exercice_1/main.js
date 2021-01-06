document.addEventListener("DOMContentLoaded", function(event) { 

    let image = document.getElementById("image1");

    image.addEventListener("mouseenter", function( event ) {

console.log('ok');

image.src="images/image1_2.jpg"

    });

});