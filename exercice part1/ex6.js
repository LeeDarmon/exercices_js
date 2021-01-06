document.addEventListener("DOMContentLoaded", function(event) { 


    document.getElementById("submit").onclick = function() {myFunction()};

    function myFunction(){

        var num1 = document.getElementById("firstNumber").value;
        var num2 = document.getElementById("yearOfBirth").value;
        var num3 ; 
      
        num3 = num1%num2;
        alert(num3);

    }

});

  