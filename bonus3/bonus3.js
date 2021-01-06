var input = document.getElementById("results");
var chiffre = 0;
var calcul =[];
var resultat_final;


function addNumber(number){
    var number=number.getAttribute("id");
    chiffre = number;
    input.value=input.value+chiffre;
}

function addSigne(signe){
    var signe=signe.getAttribute("id");
    calcul.push(input.value);
    calcul.push(signe);
    input.value="";
}

function resultat(){
calcul.push(input.value);
 console.log(calcul);

for (let index = 0; index < calcul.length; index++) {
    console.log(calcul[index]);

var nb1 = parseInt(calcul[0]);
var nb2 = parseInt(calcul[2]);

switch (calcul[1]){
    case '+':
        resultat_final = nb1+nb2;
    break;

    case '-':
        resultat_final = nb1-nb2;
    break;

    case '*':
        resultat_final = nb1*nb2;
    break;

    case '/':
        resultat_final = nb1/nb2;
    break;
}
}
  console.log(resultat_final);
  input.value=resultat_final;

}
function resetter(){
    input.value='';
    calcul = [];
    console.log(calcul);

}

