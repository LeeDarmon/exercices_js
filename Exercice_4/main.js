document.addEventListener("DOMContentLoaded", function(event) { 


    let button = document.getElementsByName("button");
    let input1 = document.getElementById("lastname");
    let input2 = document.getElementById("firstname");
    let input3 = document.getElementById("city");

    document.getElementById("button").onclick = function() {clear()};

    function clear(){

        console.log("clic");
        input1.value="";
        input2.value="";
        input3.value="";
    }






});