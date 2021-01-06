document.addEventListener("DOMContentLoaded", function(event) { 


    document.getElementById("submit").onclick = function() {myFunction()};

    function myFunction(){

        var size = document.getElementById("shoeSize").value;
        var year = document.getElementById("yearOfBirth").value;
        var resultat ; 

        size = size*2;
        size = size+5;
        size = size*50;
        size = size - year;
        resultat = size + 1766;
      

        alert(resultat);

    }

});

  