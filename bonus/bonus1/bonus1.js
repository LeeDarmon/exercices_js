
    
    var input = document.getElementById("compteur");
    var compteur = 0; 
    input.value = compteur;
    var alerting = true;

    function increment(){
        console.log(alerting);
        compteur++;
        console.log(compteur);
        input.value = compteur;

        if (input.value>20){

            if(alerting ===  true){
                alert("niveau critique taux de pression");
                alerting =  false;
            }
        }
    }
    function decrement(){
        if(input.value>0){
            compteur--;
            console.log(compteur);
            input.value = compteur;
        }
        else{
            alert("la pression ne peut pas être négative")
        }
    }

    function resetter(){
        compteur = 0;
        input.value = compteur;
        alert("reseting")
    }




