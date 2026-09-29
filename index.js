let palpites = [];
let textoPalpites = document.querySelector("#palpites");
let palpiteBia = (Math.random() * 100).toFixed();
let bia = document.querySelector("#bia")
function receberPalpite(input){
if(palpites.length < 5){
    for(let i = 0; i < palpites.length; i++){
        if(input.value == palpites[i]){
            alert("Este palpite ja foi utilizado");
            input.value = ""; 
            return;
        }
    }
    if(input.value > palpiteBia){
        alert("Bia está pensando em um numero menor")
    } else if(input.value < palpiteBia){
        alert("Bia está pensando em um numero maior")
    } else{
        bia.src = "./assets/feliz.png";
    } 
    palpites.push(input.value);
    input.value = "";
    textoPalpites.innerHtml = palpites.join("-");
} else {
    alert("Suas chances acabaram");
    palpites = [];
    textoPalpites.innerHTML = "";
    input.value = "";
    bia.src = "./assets/triste.png";
}
}