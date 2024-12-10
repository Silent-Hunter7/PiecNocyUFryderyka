let numerNocy = 1;
let wybieranie = false;

document.addEventListener("DOMContentLoaded", rozmiar);
window.addEventListener("resize", rozmiar);
rozmiar();
function rozmiar(){
    let widthOkno = window.innerWidth;
    let heightOkno = window.innerHeight;
    let ratio = 16/9;
    let widthSet = widthOkno
    let heightSet = widthOkno / ratio;
    if(heightSet > heightOkno){
        heightSet = heightOkno;
        widthSet = heightOkno * ratio;
    }
    let elementy = document.querySelectorAll(".wysokosc");
    elementy.forEach(function(element){
        element.style.width = widthSet+"px";
        element.style.height = heightSet+"px";
    });
}



function UstawNoc(x){
    if(wybieranie) return;
    numerNocy = x;
    sessionStorage.setItem('Noc', numerNocy);
    switch(numerNocy){
        case 1:
            sessionStorage.setItem('FreddyAI', 0);
            sessionStorage.setItem('BonnieAI', 0);
            sessionStorage.setItem('ChicaAI', 0);
            sessionStorage.setItem('FoxyAI', 0);
            break;
        case 2:
            sessionStorage.setItem('FreddyAI', 0);
            sessionStorage.setItem('BonnieAI', 3);
            sessionStorage.setItem('ChicaAI', 1);
            sessionStorage.setItem('FoxyAI', 1);
            break;
        case 3:
            sessionStorage.setItem('FreddyAI', 1);
            sessionStorage.setItem('BonnieAI', 0);
            sessionStorage.setItem('ChicaAI', 5);
            sessionStorage.setItem('FoxyAI', 2);
            break;
        case 4:
            sessionStorage.setItem('FreddyAI', 2);
            sessionStorage.setItem('BonnieAI', 2);
            sessionStorage.setItem('ChicaAI', 4);
            sessionStorage.setItem('FoxyAI', 6);
            break;
        case 5:
            sessionStorage.setItem('FreddyAI', 3);
            sessionStorage.setItem('BonnieAI', 5);
            sessionStorage.setItem('ChicaAI', 7);
            sessionStorage.setItem('FoxyAI', 5);
            break;
        case 6:
            sessionStorage.setItem('FreddyAI', 4);
            sessionStorage.setItem('BonnieAI', 10);
            sessionStorage.setItem('ChicaAI', 12);
            sessionStorage.setItem('FoxyAI', 16);
            break;
    }
}
function Dodatkowe(){
    let menuDodatkowe = document.getElementById("dodatkowe");
    menuDodatkowe.style.display = "block";
}
function CustomChange(kto, jak){
    let input;
    switch(kto){
        case 1:
            input = document.getElementById("FreddyAI");
            break;
        case 2:
            input = document.getElementById("BonnieAI");
            break;
        case 3:
            input = document.getElementById("ChicaAI");
            break;
        case 4:
            input = document.getElementById("FoxyAI");
            break;
    }
    input.value += jak;
    if(input.value > 20) input.value = 20;
    if(input.value < 0) input.value = 0;
}