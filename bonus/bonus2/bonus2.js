var input = document.getElementById("input_number");
var span = document.getElementById("feedback");
var chance = document.getElementById("chances");

var chiffre_brut = Math.random() * (101 - 0) + 0;
var chiffre_net = Math.round(chiffre_brut);
var nombre_chance = 10;
chance.innerHTML=nombre_chance;


console.log(chiffre_net);
console.log(span)


function verif(){
    if(input.value>chiffre_net){
        span.innerHTML="chiffre trop élevé";
        nombre_chance--;
        chance.innerHTML=nombre_chance;
        if(nombre_chance == 0){
            alert("jeu perdu, reset en cours....");
            document.location.reload();
        }
    }

    else if(input.value<chiffre_net){
        span.innerHTML="chiffre trop petit";
        nombre_chance--;
        chance.innerHTML=nombre_chance;
        if(nombre_chance == 0){
            alert("jeu perdu, reset en cours....");
            document.location.reload();
        }

    }
    else {
        alert("trouvé!     .........refresh de la page......");
        document.location.reload();
    }
}