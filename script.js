console.log("conecter");
/*let score = 0;
console.log(score, " initialisation")

while (score <10){
    score = score +1
    console.log(score, " en cours")
}
console.log(score," resultat")*/

const btnRed = document.getElementById("btn-red");
console.log(btnRed, " bouton rouge ");
const btnGreen = document.getElementById("btn-green");
console.log(btnGreen, " bouton vert");
const aff_mult = document.getElementById("multip");

const butt = document.getElementById("cookie");
let score = document.getElementById("score");
let res = 0;
let multip = 1;

butt.addEventListener("click", function () {
    if (parseInt(score.innerText) < 20) {
        btnGreen.style.visibility = "hidden";
        console.log("hello");
    }else{
        btnGreen.style.visibility = "visible";
    }
    res = res + 1 * multip;
    score.innerText = res.toString();
    console.log(score);
});

btnRed.addEventListener("click", function () {
    window.alert("Score réinisialiser");
    score.innerText = "0";
    res = 0;
    multip = 1;
    aff_mult.innerText = "1";
});

btnGreen.addEventListener("click", function () {
    multip = multip + 1;
    aff_mult.innerText = multip.toString();
});

  
window.onload = function(){
    if (parseInt(score.innerText) <= 10) {
        btnGreen.style.visibility = "hidden";
        console.log("hello");
    }
}

