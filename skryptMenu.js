let numerNocy = 1;
let wybieranie = false;
const obrazek = document.getElementById('obrazek');
const szum = document.getElementById('szum');
let random;
let easteregg = 0;

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

if(Math.random()<0.01){
    easteregg = 1;
    obrazek.style.backgroundImage = 'url("img/easterEgg/MenuBern.jpg")';
    document.getElementById('tytul').style.backgroundImage = 'url("img/easterEgg/TytulBern.png")';
}


setInterval(function(){
    szum.style.opacity = Math.random()/5+0.4
    if (Math.random() < 0.03 && easteregg == 0) {
        zmienObrazek();
    }
    rozmiar();
}, 100);

function zmienObrazek(){
    console.log("menu");
    obrazek.style.backgroundImage = 'url("img/menu/menu'+Math.ceil(Math.random()*3)+'.jpg")';
    setTimeout(function(){obrazek.style.backgroundImage = 'url("img/menu/menu0.jpg")';}, Math.random()*50+50);
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
    window.location.assign("gra.html");
}
function Dodatkowe(bool){
    let menuDodatkowe = document.getElementById("dodatkowe");
    if(bool){
        menuDodatkowe.style.display = "block";
    }else{
        menuDodatkowe.style.display = "none";
    }
}
function CustomChange(kto, jak){
    let input;
    let out1;
    let out2;
    switch(kto){
        case 0:
            input = document.getElementById("FreddyAI");
            out1 = document.getElementById("outFreddy1");
            out2 = document.getElementById("outFreddy2");
            break;
        case 1:
            input = document.getElementById("BonnieAI");
            out1 = document.getElementById("outBonnie1");
            out2 = document.getElementById("outBonnie2");
            break;
        case 2:
            input = document.getElementById("ChicaAI");
            out1 = document.getElementById("outChica1");
            out2 = document.getElementById("outChica2");
            break;
        case 3:
            input = document.getElementById("FoxyAI");
            out1 = document.getElementById("outFoxy1");
            out2 = document.getElementById("outFoxy2");
            break;
    }
    if(jak > 0){
        input.value = Number(input.value)+1;
    }else{
        input.value = Number(input.value)-1;
    }
    if(input.value > 20) input.value = 20;
    if(input.value < 0) input.value = 0;
    console.log(input.value);
    console.log(Math.floor(input.value/10));
    console.log((input.value)%10);
    if(Math.floor(input.value/10) > 0){
        out1.style.backgroundImage = 'url("img/menu/'+Math.floor(input.value/10)+'.jpg")';
    }else{
        out1.style.backgroundImage = 'url("img/menu/nic.jpg")';
    }
    out2.style.backgroundImage = 'url("img/menu/'+(input.value)%10+'.jpg")';
}
function CustomStart(){
    let FreddyAI = document.getElementById('FreddyAI').value;
    let BonnieAI = document.getElementById('BonnieAI').value;
    let ChicaAI = document.getElementById('ChicaAI').value;
    let FoxyAI = document.getElementById('FoxyAI').value;
    if(FreddyAI == 1 && BonnieAI == 9 && ChicaAI == 8 && FoxyAI == 7){
        easteregg = 1;
        console.log("1987");
        document.getElementById("goldenfreddy").style.display = "block";
        setTimeout(function(){
            window.location.assign("index.html");
        }, 1000);
    }else{
        console.log("bez easter egga");
        sessionStorage.setItem('FreddyAI', FreddyAI);
        sessionStorage.setItem('BonnieAI', BonnieAI);
        sessionStorage.setItem('ChicaAI', ChicaAI);
        sessionStorage.setItem('FoxyAI', FoxyAI);
        sessionStorage.setItem('Noc', 7);
        window.location.assign("gra.html");
    }
}
let czyreklama = true;
function Zamknij(){
    if(Math.random() < 0.66){
        czyreklama = false;
        let Reklama = document.getElementById("reklama");
        Reklama.style.display = "none";
        setTimeout(function(){
            Reklama.style.display = "block";
            czyreklama = true;
        },15000+(Math.random()*15000));
    }
}
function Reklama(){
    if(czyreklama){
        window.open("https://tymekh.github.io/Szm3gle-Recipes/", "_blank");
    }
}
