document.addEventListener("DOMContentLoaded", function(event) { 


    document.getElementById("submit").onclick = function() {myFunction()};

    function myFunction(){

        var age = document.getElementById("age").value;

        if (age >= 18){
            alert("vous etes majeur");
        }
        else{
            alert("vous etes mineur")
        }

      


    }

});

  