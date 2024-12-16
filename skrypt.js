const images = [
    "img/zakonczenia/noc1.png",
    "img/zakonczenia/noc2.png",
    "img/zakonczenia/noc3.png",
    "img/zakonczenia/noc4.png",
    "img/zakonczenia/noc5.png",
    "img/zakonczenia/noc6.png",
    "img/zakonczenia/noc7.png",

    "img/zakonczenia/przegrana.jpg",
    "img/zakonczenia/wygrana5.jpg",
    "img/zakonczenia/wygrana6.jpg",
    "img/zakonczenia/wygrana7.jpg",

    "img/kamery/0/nikt.jpg",
    "img/kamery/0/wszyscy.jpg",
    "img/kamery/0/freddychica.jpg",
    "img/kamery/0/freddybonnie.jpg",
    "img/kamery/0/freddy.jpg",

    "img/kamery/1/nikt.jpg",
    "img/kamery/1/bonnie0.jpg",
    "img/kamery/1/bonnie1.jpg",
    "img/kamery/1/chica0.jpg",
    "img/kamery/1/chica1.jpg",
    "img/kamery/1/freddy.jpg",

    "img/kamery/2/nikt.jpg",
    "img/kamery/2/bonnie.jpg",

    "img/kamery/3/nikt.jpg",
    "img/kamery/3/bonnie0.jpg",
    "img/kamery/3/bonnie1.jpg",

    "img/kamery/4/nikt.jpg",
    "img/kamery/4/bonnie.jpg",

    "img/kamery/5/nikt.jpg",
    "img/kamery/5/chica0.jpg",
    "img/kamery/5/chica1.jpg",
    "img/kamery/5/freddy.jpg",

    "img/kamery/6/nikt.jpg",
    "img/kamery/6/chica0.jpg",
    "img/kamery/6/chica1.jpg",
    "img/kamery/6/freddy.jpg",

    "img/kamery/7/nikt.jpg",
    "img/kamery/7/bonnie.jpg",

    "img/kamery/8/audio.jpg",

    "img/kamery/9/nikt.jpg",
    "img/kamery/9/chica0.jpg",
    "img/kamery/9/chica1.jpg",
    "img/kamery/9/freddy.jpg",

    "img/kamery/10/0.jpg",
    "img/kamery/10/1.jpg",
    "img/kamery/10/2.jpg",
    "img/kamery/10/3.jpg",


    "img/gif/bonnie.gif",
    "img/gif/chica.gif",
    "img/kamery/2/foxySprint.gif",
    "img/gif/foxy.gif",
    "img/gif/freddy.gif",
    "img/gif/power.gif",
    "img/gif/static.gif",
    "img/gif/szosta.gif",
    "img/gif/wiatrak.gif",
    "img/gif/kameryUp.gif",
    "img/gif/kameryDown.gif",

    "img/biuro/tlo.jpg",
    "img/biuro/nikt.jpg",
    "img/biuro/leweswiatlo.jpg",
    "img/biuro/bonnie.jpg",
    "img/biuro/praweswiatlo.jpg",
    "img/biuro/chica.jpg",

    "img/biuro/noprad1.jpg",
    "img/biuro/noprad2.jpg",
    "img/biuro/noprad3.jpg",

    "img/biuro/przyciski/lewenic.png",
    "img/biuro/przyciski/lewedrzwi.png",
    "img/biuro/przyciski/leweswiatlo.png",
    "img/biuro/przyciski/lewedrzwiswiatlo.png",

    "img/biuro/przyciski/prawenic.png",
    "img/biuro/przyciski/prawedrzwi.png",
    "img/biuro/przyciski/praweswiatlo.png",
    "img/biuro/przyciski/prawedrzwiswiatlo.png",

    "img/biuro/drzwi/lewe/0.png",
    "img/biuro/drzwi/lewe/1.png",
    "img/biuro/drzwi/lewe/2.png",
    "img/biuro/drzwi/lewe/3.png",
    "img/biuro/drzwi/lewe/4.png",
    "img/biuro/drzwi/lewe/5.png",
    "img/biuro/drzwi/lewe/6.png",
    "img/biuro/drzwi/lewe/7.png",
    "img/biuro/drzwi/lewe/8.png",
    "img/biuro/drzwi/lewe/9.png",
    "img/biuro/drzwi/lewe/10.png",
    "img/biuro/drzwi/lewe/11.png",
    "img/biuro/drzwi/lewe/12.png",
    "img/biuro/drzwi/lewe/13.png",
    "img/biuro/drzwi/lewe/14.png",

    "img/biuro/drzwi/prawe/0.png",
    "img/biuro/drzwi/prawe/1.png",
    "img/biuro/drzwi/prawe/2.png",
    "img/biuro/drzwi/prawe/3.png",
    "img/biuro/drzwi/prawe/4.png",
    "img/biuro/drzwi/prawe/5.png",
    "img/biuro/drzwi/prawe/6.png",
    "img/biuro/drzwi/prawe/7.png",
    "img/biuro/drzwi/prawe/8.png",
    "img/biuro/drzwi/prawe/9.png",
    "img/biuro/drzwi/prawe/10.png",
    "img/biuro/drzwi/prawe/11.png",
    "img/biuro/drzwi/prawe/12.png",
    "img/biuro/drzwi/prawe/13.png",
    "img/biuro/drzwi/prawe/14.png",

    "img/interfejs/zuzycie1.png",
    "img/interfejs/zuzycie2.png",
    "img/interfejs/zuzycie3.png",
    "img/interfejs/zuzycie4.png",
    "img/interfejs/zuzycie5.png"
];

images.forEach((src) => {
    const img = new Image();
    img.src = src;
});

//"ai" od 0 do 20
let noc;
let aiFreddy;
let aiBonnie;
let aiChica;
let aiFoxy;
let rizz = false;
let e2137 = false;
if(sessionStorage.getItem('Noc')){
    noc = sessionStorage.getItem('Noc');
    aiFreddy = sessionStorage.getItem('FreddyAI');
    aiBonnie = sessionStorage.getItem('BonnieAI');
    aiChica = sessionStorage.getItem('ChicaAI');
    aiFoxy = sessionStorage.getItem('FoxyAI');
}else{
    noc = 7;
    aiFreddy = 20;
    aiBonnie = 20;
    aiChica = 20;
    aiFoxy = 20;
}
if(sessionStorage.getItem('rizz')){
    rizz = sessionStorage.getItem('rizz');
}
if(sessionStorage.getItem('2137')){
    e2137 = sessionStorage.getItem('2137');
}
console.log("Noc "+noc+", Fred "+aiFreddy+", Boni "+aiBonnie+", Chia "+aiChica+", Foxy "+aiFoxy);
document.getElementById("noc").style.backgroundImage = 'url("img/interfejs/noc'+noc+'.png")';

const jumpscare = document.getElementById("jumpscare");
const zapasowy = document.getElementById("zapasowy");

jumpscare.style.display = "block";
zapasowy.style.display = "block";
jumpscare.style.backgroundImage = 'url("img/zakonczenia/noc'+noc+'.png")';
let graDziala = false;
setTimeout(function(){
    jumpscare.style.backgroundImage = '';
    jumpscare.style.display = "none";
    zapasowy.style.display = "none";
    graDziala = true;
    setInterval(function(){FoxyFreddyTimer()}, 100);
    setInterval(function(){CzasSekunda()}, 1000);
    setInterval(function(){SzansaRuchu(0)}, 3000);
    setInterval(function(){SzansaRuchu(1)}, 4800);
    setInterval(function(){SzansaRuchu(2)}, 5200);
    setInterval(function(){SzansaRuchu(3)}, 5100);
}, 3000);

let czas = 0;
let godzina = 0;
let dlugoscGodzina = 90;
let bateria = 1000;
let zuzycie = 0;
let nocneZuzycie = [10,6,5,4];
if(noc == 1){
    zuzycie = 0;
}else if(noc < 5){
    zuzycie+=(1/nocneZuzycie[noc-1]);
}else zuzycie+=(1/3);
zuzycie+=1;
let bern = false;
if(sessionStorage.getItem('Bern') == 'true'){
    bateria = 300;
    bern = true;
    document.getElementById("beato").style.display = "block";
    document.getElementById("nosek").style.display = "none";
}
//ich lokalizacja: 0 - scena, 11 - lewe drzwi, 12 - prawe drzwi
let gdzieFreddy = 0;
let FredRollUdany = false;
let gdzieBonnie = 0;
let warBonnie = 0;
let gdzieChica = 0;
let warChica = 0;
//kamera na którą patrzysz i czy patrzysz na kamerę
let czyKamery = false;
let kamera = 0;
//stany drzwi i świateł: 0 - otwarte/zgaszone, 1 - zamknięte/zapalone
let stanDrzwiPrawo = 0;
let stanDrzwiLewo = 0;
let stanSwiatloPrawo = 0;
let stanSwiatloLewo = 0;
let ilosc = 0;
let ciemnoscFaza = 0;
let random;
let random2;
let wylaczonaBonnie1 = -1;
let wylaczonaBonnie2 = -1;
let wylaczonaBonnie3 = -1;
let wylaczonaChica1 = -1;
let wylaczonaChica2 = -1;
let wylaczonaChica3 = -1;
let wBiurze = [false, false, false]; //fred, boni, chia
//Foxy
let gdzieFoxy = 0;
let czyFoxyMoze = true;
let foxyTimer = 150;
let energiaFoxy = 10;
let foxyJumpscareTimer;
let foxybiegnie = false;
let foxypuka = false;

let strasznySound = [false, false];
let czyJumpscared = false;

let intervalLinie;
let coolLinie = 100;
let kameryAnimacja = false;

let Ralph = new Audio('audio/Ralph1.wav');
if(noc <= 5){
    Ralph = new Audio('audio/Ralph'+noc+'.wav');
}

let nowosci = 0;

const main = document.querySelector('main');
const panelAnimacja = document.getElementById('panelAnimacja');
const panel = document.getElementById('panelKamer');
const linie = document.getElementById('linie');
const kamery = document.getElementById('widokKamera');
const przyciskiLewo = document.getElementById('przyciskiLewo');
const przyciskiPrawo = document.getElementById('przyciskiPrawo');
const drzwiLewo = document.getElementById('drzwiLewo');
const drzwiPrawo = document.getElementById('drzwiPrawo');
const nagrywanie = document.getElementById('nagrywanie');
const wiatrak = document.getElementById('wiatrak');
const szum = document.getElementById('szum');
const bateria1 = document.getElementById('bateria1');
const bateria2 = document.getElementById('bateria2');

let oddech = document.getElementById("AUDoddech");
oddech = new Audio('audio/Breathing'+LosowyInt(1,4)+'.wav');
let patelnie = document.getElementById("AUDkitchen");
patelnie = new Audio('audio/CKitchen'+LosowyInt(1,4)+'.wav');
let patelnieFreddy = document.getElementById("AUDkitchenFred");
patelnieFreddy = new Audio('audio/ToreadorMarch.wav');
patelnieFreddy.loop = true;

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

//co sekundę
function CzasSekunda(){
    //console.log("sekunda, bateria "+bateria+", zuzycie "+zuzycie);
    //console.log("sekunda, czas "+czas+", godzina "+godzina);
    if(!czyJumpscared){
        czas+=1;
        if(bateria > 0){
            bateria-=zuzycie;
        }
        if(bateria > 0 && !bern){
            bateria1.style.backgroundImage = 'url("img/interfejs/'+Math.floor((bateria/10)/10)+'.png")';
            bateria2.style.backgroundImage = 'url("img/interfejs/'+Math.floor((bateria/10)%10)+'.png")';
        }else if(!bern){
            bateria1.style.backgroundImage = 'url("img/interfejs/0.png")';
            bateria2.style.backgroundImage = 'url("img/interfejs/0.png")';
        }
        if(czas%dlugoscGodzina==0) CzasGodzina();
        if(bateria <= 0 && bern){
            window.location.reload();
        }
        if(bateria <= 0 && ciemnoscFaza == 0 && !bern){
            NoBateria(0);
        }
        nagrywanie.style.opacity = nagrywanie.style.opacity == 1 ? 0 : 1;
        rozmiar();
        if(wBiurze[0] && !czyKamery){
            if(Math.random()<0.25){
                Przegrana(0);
            }
        }
    }
}

function FoxyFreddyTimer(){
    foxyTimer-=1;
    freddyCooldown-=1;
    foxyJumpscareTimer-=1;
    if(czyKamery){
        czyFoxyMoze = false;
        foxyTimer = Math.random()*142 + 8;
        //freddyCooldown = (1000 - 100 * aiFreddy) / 60 * 10;
    }
    if(foxyTimer<=0){
        czyFoxyMoze = true;
    }else{
        czyFoxyMoze = false;
    }
    if(foxyJumpscareTimer <= 0 && gdzieFoxy == 3 && graDziala){
        if(stanDrzwiLewo == 1){
            let pukanie = new Audio('audio/FoxysBanging.wav');
            pukanie.play();
            foxypuka = true;
            pukanie.addEventListener('ended', () => {
                foxypuka = false;
            });
            foxybiegnie = false
            console.log("foxy puka :)");
            bateria-=energiaFoxy;
            energiaFoxy+=50;
            gdzieFoxy=0;
            PokazKamAnim();
        }else Przegrana(3); 

    }
    if(freddyCooldown <= 0 && FredRollUdany == true && graDziala){
        FreddyPoruszenie();
    }
    szum.style.opacity = Math.random()/10+0.2;
}

//fazy 0-prad   1-brakpradu 2-oczy 3-ciemnosc 4-smierc
function NoBateria(){
    if(e2137 == 'true'){
        return;
    }
    document.getElementById("AUDnoise").pause();
    document.getElementById('obrazek').style.backgroundImage = 'url("img/kamery/panelKamer.jpg")';
    main.style.backgroundImage = 'url("img/kamery/panelKamer.jpg")';
    jumpscare.style.display = "block";

    wiatrak.style.display = "none";
    przyciskiLewo.style.display = "none";
    przyciskiPrawo.style.display = "none";
    panel.style.display = "none";
    czyKamery = false;
    DrzwiAnimacja(0, false);
    DrzwiAnimacja(1, false);
    if(ciemnoscFaza == 0){
        new Audio('audio/PowerOutage.wav').play();
        document.getElementById("AUDkitchenFred").pause();
        document.getElementById("AUDkitchen").pause();
        document.getElementById("AUDoddech").pause();
        document.getElementById("AUDswiatlo").pause();
        document.getElementById("AUDglitch").pause();
        document.getElementById("AUDkamery").pause();
        Ralph.pause();
        console.log("Zgaszenie światła");
        ciemnoscFaza = 1;
        ilosc = 0;
        jumpscare.style.backgroundImage = 'url("img/biuro/noprad1.jpg")';
        setTimeout(function(){NoBateriaF1()}, 5000);
        graDziala = false;
    }
    if(ciemnoscFaza == 2){
        document.getElementById("AUDmarch").play();
        console.log("Oczy freddiego");
        ciemnoscFaza = 3;
        ilosc = 0;
        jumpscare.style.backgroundImage = 'url("img/biuro/noprad2.jpg")';
        setTimeout(function(){NoBateriaF2()}, 5000);
    }
    if(ciemnoscFaza == 4){
        document.getElementById("AUDmarch").pause();
        console.log("Ciemność");
        ciemnoscFaza = 5;
        jumpscare.style.backgroundImage = 'url("img/biuro/noprad3.jpg")';
        setTimeout(function(){NoBateriaF3()}, 2000);
    }
    if(ciemnoscFaza == 6){
        ciemnoscFaza = 7;
        Przegrana(4);
    }
}
function NoBateriaF1(){
    random = SzansaBool(0.2);
    console.log("roll 1 "+random+" "+ilosc);
    if(random){
        ciemnoscFaza = 2;
        NoBateria();
    }else{
        ilosc++;
        if(ilosc >= 4){
            ciemnoscFaza = 2;
            NoBateria();
        }else{
            setTimeout(function(){NoBateriaF1()}, 5000);
        }
    }
}
function NoBateriaF2(){
    random = SzansaBool(0.2);
    console.log("roll 2 "+random+" "+ilosc);
    if(random){
        ciemnoscFaza = 4;
        NoBateria();
    }else{
        ilosc++;
        if(ilosc >= 4){
            ciemnoscFaza = 4;
            NoBateria();
        }else{
            setTimeout(function(){NoBateriaF2()}, 5000);
        }
    }
}
function NoBateriaF3(){
    random = SzansaBool(0.2);
    console.log("roll 3 "+random);
    if(random){
        ciemnoscFaza = 6;
        NoBateria();
    }else{
        setTimeout(function(){NoBateriaF3()}, 2000);
    }
}



function CzasGodzina(){
    console.log("godzina "+godzina+", czasG "+dlugoscGodzina+", czas "+czas);
    let Zegar = document.getElementById("czas");
    console.log("-----Godzina")
    godzina++
    Zegar.style.backgroundImage = 'url("img/interfejs/'+godzina+'am.png")';
    switch(godzina){
        case 2:
            aiBonnie++;
            break;
        case 3:
            aiBonnie++;
            aiChica++;
            aiFoxy++;
            break;
        case 4:
            aiBonnie++;
            aiChica++;
            aiFoxy++;
            break;
        case 6:
            if(e2137 == 'true'){
                jumpscare.style.display = "block";
                zapasowy.style.display = "block";
                panel.style.display = "none";
                Ralph.pause();
                jumpscare.style.backgroundImage = 'url("img/easterEgg/2137.jpg")';
                setTimeout(function(){window.location.assign("index.html");},5000);
                return;
            }
            Wygrana();
    }
}

//Funkcja do szansy na ruch
function SzansaRuchu(kto){
    if(e2137 == 'true'){
        return;
    }
    if(graDziala){
        random = Math.random()*19 + 1
        random2 = SzansaBool(0.3);
        switch(kto){
            case 0:
                if(random <= aiFreddy){
                    RuchFreddy();
                }
                break;
            case 1:
                if(random2){
                    warBonnie = warBonnie == 1 ? 0 : 1;
                    wylaczonaBonnie3 = gdzieBonnie;
                    wlaczKamery(2);
                }
                if(random <= aiBonnie){
                    RuchBonnie();
                }
                break;
            case 2:
                if(random2){
                    warChica = warChica == 1 ? 0 : 1;
                    wylaczonaChica3 = gdzieChica;
                    wlaczKamery(3);
                }
                if(random <= aiChica){
                    RuchChica();
                }
                break;
            case 3:
                if(random <= aiFoxy && czyFoxyMoze){
                    RuchFoxy();
                }
                break;
        }
    }
}


let freddyCooldown = 0;
//Ruszanie animatroników
function RuchFreddy(){
    if(!czyKamery && gdzieFreddy != 6){
        FredRollUdany = true;
        freddyCooldown = (1000 - 100 * aiFreddy) / 60 * 10;
    }
    if(gdzieFreddy==6){
        if(czyKamery && (kamera != gdzieFreddy)){
            setTimeout(function(){FredRollUdany = true;})
        }
    }
    //console.log("Fred "+gdzieFreddy);
}
function FreddyPoruszenie(){
    if(gdzieFreddy != 6 && freddyCooldown <= 0 && czyKamery == false && FredRollUdany == true){
        switch(gdzieFreddy){ //0,1,9,8,5,6
            case 0:
                if(gdzieBonnie != 0 && gdzieChica != 0){
                gdzieFreddy = 1;
                new Audio('audio/FreddysLaugh'+LosowyInt(1,3)+'.wav').play();
                console.log("freddy smieje sie");
            }
                break;
            case 1:
                gdzieFreddy = 9;
                new Audio('audio/FreddysLaugh'+LosowyInt(1,3)+'.wav').play();
                console.log("freddy smieje sie");
                break;
            case 9:
                gdzieFreddy = 8;
                new Audio('audio/FreddysLaugh'+LosowyInt(1,3)+'.wav').play();
                console.log("freddy smieje sie");
                if(kamery == 8 && czyKamery){
                    patelnieFreddy.volume = 0.5;
                }else{
                    patelnieFreddy.volume = 0.1;
                }
                patelnieFreddy.play();
                break;
            case 8:
                gdzieFreddy = 5;
                new Audio('audio/FreddysLaugh'+LosowyInt(1,3)+'.wav').play();
                console.log("freddy smieje sie");
                patelnieFreddy.pause();
                break;
            case 5:
                gdzieFreddy = 6;
                new Audio('audio/FreddysLaugh'+LosowyInt(1,3)+'.wav').play();
                console.log("freddy smieje sie");
                break;
        }
        FredRollUdany = false;
    }
    if(gdzieFreddy == 6 && FredRollUdany == true && czyKamery == true && kamera != 6 && stanDrzwiPrawo == 0){
        new Audio('audio/FreddysLaugh'+LosowyInt(1,3)+'.wav').play();
        console.log("freddy smieje sie");
        wBiurze[0] = true;
        gdzieFreddy = 13;
    }
}

function RuchBonnie(){
    strasznySound[0] = false;
    wylaczonaBonnie1 = gdzieBonnie;
    switch(gdzieBonnie){ //0,1,2,3,4,7,11
        case 0:
            if(SzansaBool(0.5)){
                gdzieBonnie = 1;
            }else{
                gdzieBonnie = 7;
            }
            break;
        case 1:
            if(SzansaBool(0.5)){
                gdzieBonnie = 2;
            }else{
                gdzieBonnie = 7;
            }
            break;
        case 2:
            if(SzansaBool(0.5)){
                gdzieBonnie = 3;
            }else{
                gdzieBonnie = 4;
            }
            break;
        case 3:
            if(SzansaBool(0.5)){
                gdzieBonnie = 4;
            }else{
                gdzieBonnie = 11;
                ZmienPrawde();
            }
            break;
        case 4:
            if(SzansaBool(0.5)){
                gdzieBonnie = 2;
            }else{
                gdzieBonnie = 11;
                ZmienPrawde();
            }
            break;
        case 7:
            if(SzansaBool(0.5)){
                gdzieBonnie = 1;
            }else{
                gdzieBonnie = 2;
            }
            break;
        case 11:
            if(stanDrzwiLewo == 1){
                random = LosowyInt(0,1);
                gdzieBonnie=1;
            }else{
                wBiurze[1] = true;
                gdzieBonnie = 13;
                if(czyKamery==1){
                    Oddychanie();
                }
            }
            ZmienPrawde();
            break;
    }
    wylaczonaBonnie2 = gdzieBonnie;
    wlaczKamery(0);
    //console.log("Boni "+gdzieBonnie);
    PokazKamAnim();
}
function RuchChica(){
    strasznySound[1] = false;
    wylaczonaChica1 = gdzieChica;
    patelnie.pause();
    switch(gdzieChica){ //0,1,5,6,8,9,12
        case 0:
            gdzieChica = 1;
            break;
        case 1:
            if(SzansaBool(0.5)){
                gdzieChica = 5;
            }else{
                gdzieChica = 9;
            }
            break;
        case 5:
            if(SzansaBool(0.5)){
                gdzieChica = 1;
            }else{
                gdzieChica = 6;
            }
            break;
        case 6:
            if(SzansaBool(0.5)){
                gdzieChica = 5;
            }else{
                gdzieChica = 12;
                ZmienPrawde();
            }
            break;
        case 8:
            if(SzansaBool(0.5)){
                gdzieChica = 5;
            }else{
                gdzieChica = 9;
            }
            break;
        case 9:
            if(SzansaBool(0.5)){
                gdzieChica = 5;
            }else{
                gdzieChica = 8;
                Patelnie();
            }
            break;
        case 12:
            if(stanDrzwiPrawo == 1){
                random = LosowyInt(0,1);
                gdzieChica=1;
            }else{
                wBiurze[2] = true;
                gdzieChica = 13;
                if(czyKamery==1){
                    Oddychanie();
                }
            }
            ZmienPrawde();
            break;
    }
    wylaczonaChica2 = gdzieChica;
    wlaczKamery(1);
    console.log("Chia "+gdzieChica);
    PokazKamAnim();
}

function wlaczKamery(kto){ //0bonnie 1chica
    if(kto == 0){
        //console.log("wlaczenie kamer chica ruch");
        setTimeout(function(){
            wylaczonaBonnie1 = -1;
            wylaczonaBonnie2 = -1;
            if(foxybiegnie == false || (foxybiegnie == true && kamera != 2)){
                PokazKamAnim();
            }
        }, 1500);
    }else if(kto == 1){
        //console.log("wlaczenie kamer bonnie ruch");
        setTimeout(function(){
            wylaczonaChica1 = -1;
            wylaczonaChica2 = -1;
            if(foxybiegnie == false || (foxybiegnie == true && kamera != 2)){
                PokazKamAnim();
            }
        }, 1500);
    }else if(kto == 2){
        //console.log("wlaczenie kamer bonnie wariant");
        setTimeout(function(){
            wylaczonaBonnie3 = -1;
            if(foxybiegnie == false || (foxybiegnie == true && kamera != 2)){
                PokazKamAnim();
            }
        }, 1500);
    }else if(kto == 3){
        //console.log("wlaczenie kamer bonnie wariant");
        setTimeout(function(){
            wylaczonaChica3 = -1;
            if(foxybiegnie == false || (foxybiegnie == true && kamera != 2)){
                PokazKamAnim();
            }
        }, 1500);
    }
}


function RuchFoxy(){
    switch(gdzieFoxy){ //0,1,5,6,8,9,12
        case 0: //kurtyna
            gdzieFoxy = 1; //wychyla się
            break;
        case 1: //wygląda   
            gdzieFoxy = 2; //wychodzi
            break;
        case 2: //stoi poza   
            foxyJumpscareTimer = 250;
            gdzieFoxy = 3; //czeka 25 sekund
            break;
        case 3:
            break;
        default:
            gdzieFoxy=0;
            break;
    }
    //console.log("Foxy "+gdzieFoxy);
    PokazKamAnim();
}

let foxyBieg = new Audio('audio/FoxyRunning.wav');
function FoxyBieg(){
    //console.log("bieganie start")
    if(kamera == 2 && gdzieFoxy == 3 && foxyJumpscareTimer > 0 && czyKamery){
        foxyBieg.load();
        foxyBieg.play();
        //console.log("bieganie działa");
        foxyJumpscareTimer = 999999;
        setTimeout(function(){
            if(stanDrzwiLewo == 1){
                let pukanie = new Audio('audio/FoxysBanging.wav');
                pukanie.play();
                foxypuka = true;
                pukanie.addEventListener('ended', () => {
                    foxypuka = false;
                });
                foxybiegnie = false;
                console.log("foxy puka :)");
                bateria-=energiaFoxy;
                energiaFoxy+=50;
                gdzieFoxy=0;
                PokazKamAnim();
            }else Przegrana(3); 
        }, 3000 - aiFoxy*30);
    }
}
//przefrywanie i wygrywanie
function Przegrana(kto){
    if(e2137 == 'true'){
        return;
    }
    if(czyJumpscared == false){
        console.log("-----Przegrana");
        jumpscare.style.display = "block";
        zapasowy.style.display = "block";
        panel.style.display = "none";
        Ralph.pause();
        let czasJumpscare;
        switch(kto){
            case 0:
                if(bateria > 1){
                    czyJumpscared = true;
                    graDziala = false;
                    if(rizz == 'false'){
                        jumpscare.style.backgroundImage = 'url("img/gif/freddy.gif")';
                        czasJumpscare = 1200;
                    }else{
                        jumpscare.style.backgroundImage = 'url("img/easterEgg/freddy-rizz.gif")';
                        czasJumpscare = 3000;
                    }
                    document.getElementById("AUDjumpscare").play();
                    setTimeout(function(){
                        document.getElementById("AUDnoise").pause();
                        document.getElementById("AUDjumpscare").pause();
                        document.getElementById("AUDdeadszum").play();
                        jumpscare.style.backgroundImage = 'url("img/gif/static.gif")';
                        setTimeout(function(){jumpscare.style.backgroundImage = 'url("img/zakonczenia/przegrana.jpg")';
                            setTimeout(function(){window.location.assign("index.html");},5000);
                        },3000);
                    }, czasJumpscare);
                }
                break;
            case 1:
                if(bateria > 0){
                    czyJumpscared = true;
                    graDziala = false;
                    if(rizz == 'false'){
                        jumpscare.style.backgroundImage = 'url("img/gif/bonnie.gif")';
                        czasJumpscare = 850;
                    }else{
                        jumpscare.style.backgroundImage = 'url("img/easterEgg/bonnie-rizz.gif")';
                        czasJumpscare = 3000;
                    }
                    document.getElementById("AUDjumpscare").play();
                    setTimeout(function(){
                        document.getElementById("AUDnoise").pause();
                        document.getElementById("AUDjumpscare").pause();
                        document.getElementById("AUDdeadszum").play();
                        jumpscare.style.backgroundImage = 'url("img/gif/static.gif")';
                        setTimeout(function(){jumpscare.style.backgroundImage = 'url("img/zakonczenia/przegrana.jpg")';
                            setTimeout(function(){window.location.assign("index.html");},5000);
                        },3000);
                    }, czasJumpscare);
                }
                break;
            case 2:
                if(bateria > 0){
                    czyJumpscared = true;
                    graDziala = false;
                    if(rizz == 'false'){
                        jumpscare.style.backgroundImage = 'url("img/gif/chica.gif")';
                        czasJumpscare = 850;
                    }else{
                        jumpscare.style.backgroundImage = 'url("img/easterEgg/chica-rizz.gif")';
                        czasJumpscare = 3000;
                    }
                    document.getElementById("AUDjumpscare").play();
                    setTimeout(function(){
                        document.getElementById("AUDnoise").pause();
                        document.getElementById("AUDjumpscare").pause();
                        document.getElementById("AUDdeadszum").play();
                        jumpscare.style.backgroundImage = 'url("img/gif/static.gif")';
                        setTimeout(function(){jumpscare.style.backgroundImage = 'url("img/zakonczenia/przegrana.jpg")';
                            setTimeout(function(){window.location.assign("index.html");},5000);
                        },3000);
                    }, czasJumpscare);
                }
                break;
            case 3:
                if(bateria > 0){
                    czyJumpscared = true;
                    graDziala = false;
                    if(rizz == 'false'){
                        jumpscare.style.backgroundImage = 'url("img/gif/foxy.gif")';
                        czasJumpscare = 800;
                    }else{
                        jumpscare.style.backgroundImage = 'url("img/easterEgg/foxy-rizz.gif")';
                        czasJumpscare = 3000;
                    }
                    document.getElementById("AUDjumpscare").play();
                    setTimeout(function(){
                        document.getElementById("AUDnoise").pause();
                        document.getElementById("AUDjumpscare").pause();
                        document.getElementById("AUDdeadszum").play();
                        jumpscare.style.backgroundImage = 'url("img/gif/static.gif")';
                        setTimeout(function(){jumpscare.style.backgroundImage = 'url("img/zakonczenia/przegrana.jpg")';
                            setTimeout(function(){window.location.assign("index.html");},5000);
                        },3000);
                    }, czasJumpscare);
                }
                break;
            case 4:
                czyJumpscared = true;
                graDziala = false;
                if(rizz == 'false'){
                    jumpscare.style.backgroundImage = 'url("img/gif/power.gif")';
                    czasJumpscare = 850;
                }else{
                    jumpscare.style.backgroundImage = 'url("img/easterEgg/power-rizz.gif")';
                    czasJumpscare = 5000;
                }
                document.getElementById("AUDjumpscare").play();
                setTimeout(function(){
                    document.getElementById("AUDnoise").pause();
                    document.getElementById("AUDjumpscare").pause();
                    document.getElementById("AUDdeadszum").play();
                    jumpscare.style.backgroundImage = 'url("img/gif/static.gif")';
                    setTimeout(function(){jumpscare.style.backgroundImage = 'url("img/zakonczenia/przegrana.jpg")';
                        setTimeout(function(){window.location.assign("index.html");},5000);
                    },3000);
                }, czasJumpscare);
                break;
        }
    }
}
function Wygrana(){
    if(e2137 == 'true'){
        return;
    }
    if(czyJumpscared == false){
        sessionStorage.setItem('Noc'+noc, true);
        console.log("-----Wygrałeś");
        jumpscare.style.display = "block";
        zapasowy.style.display = "block";
        panel.style.display = "none";
        graDziala = false;
        czyJumpscared = true;
        document.getElementById("AUDmarch").pause();
        Ralph.pause();
        jumpscare.style.backgroundImage = 'url("img/gif/szosta.gif")';
        console.log("-----szosta");
        new Audio('audio/Clock.wav').play();
        setTimeout(function(){
            console.log("-----czarno");
            jumpscare.style.display = "none";
            setTimeout(function(){
                console.log("-----list");
                jumpscare.style.display = "block";
                if(noc == 5){
                    jumpscare.style.backgroundImage = 'url("img/zakonczenia/wygrana5.jpg")';
                    setTimeout(function(){window.location.assign("index.html");},7500);
                }else if(noc == 6){
                    jumpscare.style.backgroundImage = 'url("img/zakonczenia/wygrana6.jpg")';
                    setTimeout(function(){window.location.assign("index.html");},7500);
                }else if(noc == 7){
                    jumpscare.style.backgroundImage = 'url("img/zakonczenia/wygrana7.jpg")';
                    setTimeout(function(){window.location.assign("index.html");},7500);
                }else{
                    jumpscare.style.display = "none";
                    window.location.assign("index.html");
                }
            }, 2000);
        }, 2500);
    }
}

let drzwiDostepne = [true, true];
function ObslugaDrzwi(strona){
    if(graDziala){
        if(strona == 0){
            if(!wBiurze[1]){
                if(stanDrzwiLewo == 0 && drzwiDostepne[0]){
                    new Audio('audio/DoorCloseOpen.wav').play();
                    console.log("Zamknięcie Lewych Drzwi");
                    stanDrzwiLewo = 1;
                    DrzwiAnimacja(strona, true);
                    zuzycie++;
                }else if(drzwiDostepne[0]){
                    new Audio('audio/DoorCloseOpen.wav').play();
                    console.log("Otworzenie Lewych Drzwi");
                    if(foxypuka == true){
                        Przegrana(3);
                    }
                    stanDrzwiLewo = 0;
                    DrzwiAnimacja(strona, false);
                }else console.log("trwa animacja - przycisk nie zadziała");
            }else{
                new Audio('audio/DoorError.wav').play();
            }
        }else{
            if(!wBiurze[2]){
                if(stanDrzwiPrawo == 0 && drzwiDostepne[1]){
                    new Audio('audio/DoorCloseOpen.wav').play();
                    console.log("Zamknięcie Prawych Drzwi");
                    stanDrzwiPrawo = 1;
                    DrzwiAnimacja(strona, true);
                    zuzycie++;
                }else if(drzwiDostepne[1]){
                    new Audio('audio/DoorCloseOpen.wav').play();
                    console.log("Otworzenie Prawych Drzwi");
                    stanDrzwiPrawo = 0;
                    DrzwiAnimacja(strona, false);
                }else console.log("trwa animacja - przycisk nie zadziała");
            }else{
                new Audio('audio/DoorError.wav').play();
            }
           
        }
        TeksturaPrzyciskow();
        ZuzycieObrazek();
    }
}

let klatka;
function DrzwiAnimacja(strona, zamykanie){
    if(graDziala){
        if(strona == 0){
            drzwiDostepne[0] = false;
            if(zamykanie){
                klatka = 0;
                setTimeout(function(){nastepnaKlatkaDrzwi(strona,zamykanie)},10);
            }else{
                klatka = 14;
                setTimeout(function(){nastepnaKlatkaDrzwi(strona,zamykanie)},10);
            }
        }else{
            drzwiDostepne[1] = false;
            if(zamykanie){
                klatka = 0;
                setTimeout(function(){nastepnaKlatkaDrzwi(strona,zamykanie)},10);
            }else{
                klatka = 14;
                setTimeout(function(){nastepnaKlatkaDrzwi(strona,zamykanie)},10);
            }
        }
    }
}
function nastepnaKlatkaDrzwi(strona, zamykanie){
    if(zamykanie){
        if(klatka == 14){
            drzwiDostepne[strona] = true;
            return;
        }
        klatka++;
    }else{
        if(klatka == 0){
            drzwiDostepne[strona] = true;
            zuzycie--;
            ZuzycieObrazek();
            return;
        }
        klatka--;
    }
    if(strona == 0){
        drzwiLewo.style.backgroundImage = 'url("img/biuro/drzwi/lewe/'+klatka+'.png")';
        setTimeout(function(){nastepnaKlatkaDrzwi(strona,zamykanie)},10);   
    }else{
        drzwiPrawo.style.backgroundImage = 'url("img/biuro/drzwi/prawe/'+klatka+'.png")';
        setTimeout(function(){nastepnaKlatkaDrzwi(strona,zamykanie)},10);
    }
}



function ObslugaSwiatla(strona){
    if(graDziala){
        document.getElementById("AUDswiatlo").pause();
        if(strona == 0){
            if(stanSwiatloPrawo == 1){
                stanSwiatloPrawo = 0;
                zuzycie--;
            }
            if(stanSwiatloLewo == 0){
                //console.log("Zapalenie Lewego Światła");
                stanSwiatloLewo = 1;
                zuzycie++;
                PokazPrawde(0, true);
            }else{
                //console.log("Zgaszenie Lewego Światła");
                stanSwiatloLewo = 0;
                zuzycie--;
                PokazPrawde(0, false);
            }
        }else{
            if(stanSwiatloLewo == 1){
                stanSwiatloLewo = 0;
                zuzycie--;
            }
            if(stanSwiatloPrawo == 0){
                //console.log("Zapalenie Prawego Światła");
                stanSwiatloPrawo = 1;
                zuzycie++;
                PokazPrawde(1, true);
            }else{
                //console.log("Zgaszenie Prawego Światła");
                stanSwiatloPrawo = 0;
                zuzycie--;
                PokazPrawde(1, false);
            }
        }
        TeksturaPrzyciskow();
        ZuzycieObrazek();
    }
}
function TeksturaPrzyciskow(){
    if(graDziala){
        let jaki = 'url("img/biuro/przyciski/lewe';
        if(stanDrzwiLewo == 1){
            if(stanSwiatloLewo == 1) jaki += "drzwiswiatlo";
            else jaki += "drzwi";
        }else{
            if(stanSwiatloLewo == 1) jaki += "swiatlo";
            else jaki += "nic";
        }
        jaki+= '.png")'
        przyciskiLewo.style.backgroundImage = jaki;
        jaki = 'url("img/biuro/przyciski/prawe';
        if(stanDrzwiPrawo == 1){
            if(stanSwiatloPrawo == 1) jaki += "drzwiswiatlo";
            else jaki += "drzwi";
        }else{
            if(stanSwiatloPrawo == 1) jaki += "swiatlo";
            else jaki += "nic";
        }
        jaki+= '.png")'
        przyciskiPrawo.style.backgroundImage = jaki;
    }
}


function PokazPrawde(strona, pokaz){
    if(graDziala){
        if(strona == 0){
            if(gdzieBonnie == 11 && pokaz){
                main.style.backgroundImage = 'url("img/biuro/bonnie.jpg")';
                document.getElementById("AUDswiatlo").play();
                if(!strasznySound[0]){
                    new Audio('audio/WindowScare.wav').play();
                    strasznySound[0] = true;
                }
            }else if(pokaz){
                main.style.backgroundImage = 'url("img/biuro/leweswiatlo.jpg")';
                document.getElementById("AUDswiatlo").play();
            }else{
                main.style.backgroundImage = 'url("img/biuro/nikt.jpg")';
                document.getElementById("AUDswiatlo").pause();
            }
        }else{
            if(gdzieChica == 12 && pokaz){
                main.style.backgroundImage = 'url("img/biuro/chica.jpg")';
                document.getElementById("AUDswiatlo").play();
                if(!strasznySound[1]){
                    new Audio('audio/WindowScare.wav').play();
                    strasznySound[1] = true;
                }
            }else if(pokaz){
                main.style.backgroundImage = 'url("img/biuro/praweswiatlo.jpg")';
                document.getElementById("AUDswiatlo").play();
            }else{
                main.style.backgroundImage = 'url("img/biuro/nikt.jpg")';
                document.getElementById("AUDswiatlo").pause();
            }
        }
    }
}
function ZmienPrawde(){
    if(graDziala){
        console.log("zmien");
        if(stanSwiatloLewo == 1){
            if(gdzieBonnie == 11 && stanSwiatloLewo == 1){
                main.style.backgroundImage = 'url("img/biuro/bonnie.jpg")';
                if(!strasznySound[0]){
                    new Audio('audio/WindowScare.wav').play();
                    strasznySound[0] = true;
                }
            }else if(stanSwiatloLewo == 1){
                main.style.backgroundImage = 'url("img/biuro/leweswiatlo.jpg")';
            }else{
                main.style.backgroundImage = 'url("img/biuro/nikt.jpg")';
            }
        }else if(stanSwiatloPrawo == 1){
            if(gdzieChica == 12 && stanSwiatloPrawo == 1){
                main.style.backgroundImage = 'url("img/biuro/chica.jpg")';
                if(!strasznySound[1]){
                    new Audio('audio/WindowScare.wav').play();
                    strasznySound[1] = true;
                }
            }else if(stanSwiatloPrawo == 1){
                main.style.backgroundImage = 'url("img/biuro/praweswiatlo.jpg")';
            }else{
                main.style.backgroundImage = 'url("img/biuro/nikt.jpg")';
            }
        }
    }
}

intervalLinie = 40;
setInterval(function(){
    if(coolLinie > 0){
        linie.style.backgroundImage = 'url("img/linie/'+LosowyInt(1,16)+'.png")';
        coolLinie -= intervalLinie;
    }else{
        linie.style.backgroundImage = 'url("img/linie/0.png")';
    }
}, intervalLinie);


function KameraOtworz(){
    if(graDziala){
        if(kameryAnimacja == false){
            if(czyKamery){
                document.getElementById("AUDkamery").pause();
                document.getElementById("AUDglitch").pause();
                document.getElementById("AUDpanelup").pause();
                document.getElementById("AUDpaneldown").load();
                document.getElementById("AUDpaneldown").play();
                panelAnimacja.style.backgroundImage = 'url("img/gif/kameryDown.gif")';
                panelAnimacja.style.display = "block";
                panel.style.display = "none";
                kameryAnimacja = true;
                zuzycie--;
                ZuzycieObrazek(); 
                oddech.pause();
                setTimeout(function(){
                    if(kameryAnimacja == true){
                        panelAnimacja.style.display = "none";
                        czyKamery = false;
                        foxyTimer = Math.random()*142 + 8;
                        czyFoxyMoze = false;
                        setTimeout(function(){
                            kameryAnimacja = false;
                        }, 20)
                    }
                }, 180);
                if(wBiurze[1]){
                    Przegrana(1);
                }else if(wBiurze[2]){
                    Przegrana(2);
                }
                patelnie.volume = 0.2;
                patelnieFreddy.volume = 0.1;
            }else{
                document.getElementById("AUDpaneldown").pause();
                document.getElementById("AUDpanelup").load();
                document.getElementById("AUDpanelup").play();
                document.getElementById("AUDkamery").load();
                document.getElementById("AUDkamery").play();
                panelAnimacja.style.backgroundImage = 'url("img/gif/kameryUp.gif")';
                panelAnimacja.style.display = "block";
                kameryAnimacja = true;
                setTimeout(function(){
                    if(kameryAnimacja == true){
                        zuzycie++;
                        ZuzycieObrazek(); 
                        coolLinie = 200;
                        panelAnimacja.style.display = "none";
                        czyKamery = true;
                        if(Math.random()<0.1){
                            document.getElementById('plakat').style.display = "block";
                        }else{
                            document.getElementById('plakat').style.display = "none";
                        }
                        if(kamera == 6){
                            if(Math.random()<0.03){
                                nowosci = LosowyInt(1,4);
                                console.log("nowosci "+nowosci);
                            }else{
                                nowosci = 0;
                            }
                        }else if(kamera == 8){
                            patelnie.volume = 1;
                            patelnieFreddy.volume = 0.5;
                        }
                        panel.style.display = "block";
                        foxyTimer = Math.random()*142 + 8;
                        czyFoxyMoze = false;
                        KameraZmien(kamera);
                        if(wBiurze[1] || wBiurze[2]){
                            Oddychanie();
                            setInterval(function(){
                                if(graDziala && !czyJumpscared){
                                    KameraOtworz();
                                }
                            }, 30000);
                        }
                        setTimeout(function(){
                            kameryAnimacja = false;
                        }, 20)
                    }
                }, 180);
            }
        }
    }
}

function KameraZmien(ktora){
    if(graDziala){
        let PrzyciskKam = document.getElementById("przyciskKam"+kamera);
        PrzyciskKam.style.backgroundImage = 'url("img/kameraPrzyciski/kam'+kamera+'off.jpg")';
        if(kamera != ktora){
            new Audio('audio/CameraChange.wav').play();
            coolLinie = 200;
            if(Math.random()<0.1){
                nowosci = LosowyInt(1,4);
            }else{
                nowosci = 0;
            }
        }
        kamera = ktora;
        PrzyciskKam = document.getElementById("przyciskKam"+kamera);
        PrzyciskKam.style.backgroundImage = 'url("img/kameraPrzyciski/kam'+ktora+'on.jpg")';
        PokazKamAnim();
    }   
}


//'url("img/kamery/'+ktora+'/'+co+'nikt.png")'
function PokazKamAnim(){
    if(e2137 == 'true'){
        kamery.style.backgroundImage = 'url("img/easterEgg/2137.jpg")';
        return;
    }
    let sciezka = 'url("img/kamery/'+kamera+'/';
    if(kamera != wylaczonaBonnie1 && kamera != wylaczonaBonnie2 && kamera != wylaczonaChica1 && kamera != wylaczonaChica2 && kamera != wylaczonaBonnie3 && kamera != wylaczonaChica3){
        document.getElementById("audioonly").style.display = "none";
        document.getElementById("AUDglitch").pause();
        patelnie.volume = 0.2;
        patelnieFreddy.volume = 0.1;
        switch(kamera){
            case 0:
                if(gdzieBonnie==0 && gdzieChica == 0){
                    sciezka += 'wszyscy.jpg';
                }else if(gdzieBonnie==0){
                    sciezka += 'freddybonnie.jpg';
                }else if(gdzieChica==0){
                    sciezka += 'freddychica.jpg';
                }else if(gdzieFreddy==0){
                    sciezka += 'freddy.jpg';
                }else{
                    sciezka += 'nikt.jpg';
                }
                break;
            case 1:
                if(gdzieChica==1){
                    sciezka += 'chica'+warChica+'.jpg';
                }else if(gdzieBonnie==1){
                    sciezka += 'bonnie'+warBonnie+'.jpg';
                }else if(gdzieFreddy==1){
                    sciezka += 'freddy.jpg';
                }else{
                    sciezka += 'nikt.jpg';
                }
                break;
            case 2:
                if(foxybiegnie == false){
                if(gdzieFoxy == 3 && foxyJumpscareTimer > 0 && czyKamery){
                    sciezka += 'foxySprint.gif';
                    console.log("wykryty, zaczyna bieg");
                    FoxyBieg();
                    foxybiegnie = true;
                }else if(gdzieBonnie==2){
                    sciezka += 'bonnie.jpg';
                }else{
                    sciezka += 'nikt.jpg';
                }}
                break;
            case 3:
                if(gdzieBonnie==3){
                    sciezka += 'bonnie'+warBonnie+'.jpg';
                }else{
                    sciezka += 'nikt.jpg';
                }
                break;
            case 4:
                if(gdzieBonnie==4){
                    sciezka += 'bonnie.jpg';
                }else{
                    sciezka += 'nikt.jpg';
                }
                break;
            case 5:
                if(gdzieChica==5){
                    sciezka += 'chica'+warChica+'.jpg';
                }else if(gdzieFreddy==5){
                    sciezka += 'freddy.jpg';
                }else{
                    sciezka += 'nikt.jpg';
                }
                break;
            case 6:
                if(gdzieChica==6){
                    sciezka += 'chica'+warChica+'.jpg';
                }else if(gdzieFreddy==6){
                    sciezka += 'freddy.jpg';
                }else{
                    if(nowosci > 0){
                        console.log("nowosci ");
                        sciezka += 'nowosci'+nowosci+'.jpg';
                    }else{
                        sciezka += 'nikt.jpg';
                    }
                }
                break;
            case 7:
                if(gdzieBonnie==7){
                    sciezka += 'bonnie.jpg';
                }else{
                    sciezka += 'nikt.jpg';
                }
                break;
            case 8:
                document.getElementById("audioonly").style.display = "block";
                if(czyKamery){
                    patelnie.volume = 1;
                    patelnieFreddy.volume = 0.5;
                }
                sciezka += 'audio.jpg';
                break;
            case 9:
                if(gdzieChica==9){
                    sciezka += 'chica'+warChica+'.jpg';
                }else if(gdzieFreddy==9){
                    sciezka += 'freddy.jpg';
                }else{
                    sciezka += 'nikt.jpg';
                }
                break;
            case 10:
                sciezka += ''+gdzieFoxy+'.jpg';
                break;
    
        }
        sciezka += '")';
    }else{
        if(kamera == 2 && foxybiegnie == true){

        }else{
            if(kamera == 8){
                document.getElementById("audioonly").style.display = "block";
                patelnie.volume = 1;
                patelnieFreddy.volume = 0.5;
                sciezka += 'audio.jpg")';
            }else{
                if(czyKamery){
                    document.getElementById("AUDglitch").pause();
                    document.getElementById("AUDglitch").play();
                }
                sciezka = 'url("img/gif/static.gif")';
            }
            //console.log("wylaczona kamera");
        }
    }
    //console.log("pokazkamanim");
    kamery.style.backgroundImage = sciezka;
    //console.log(sciezka);
    //console.log(panel.style.backgroundImage);
}

function ZuzycieObrazek(){
    let zuzycieObrazek = document.getElementById('zuzycie');
    zuzycieObrazek.style.backgroundImage = 'url("img/interfejs/zuzycie'+Math.floor(zuzycie)+'.png")';
}


function SzansaBool(szansa){
    let x = Math.random();
    if(x < szansa){
        return true;
    }else{
        return false;
    }
}
function LosowyInt(odIlu, doIlu){
    if(odIlu < doIlu){
        return Math.floor(Math.random() * (doIlu - odIlu + 1)) + odIlu;
    }else{
        return 0;
    }
}

function gluchy(){
    document.getElementById("gluchy").style.display = "none";
    document.getElementById("AUDnoise").volume = 0.2;
    document.getElementById("AUDnoise").play();
    if(noc <= 5){
        Ralph.play();
        setTimeout(function(){
            document.getElementById("ralph").style.display = "block";
            Ralph.addEventListener('ended', muteRalph);
        }, 100);
    }
}
function muteRalph(){
    Ralph.pause();
    document.getElementById("ralph").style.display = "none";
}
function nosek(){
    new Audio('audio/Honk.wav').play();
}

function Oddychanie(){
    if(!czyJumpscared && graDziala && czyKamery){
        console.log("oddech");
        oddech = new Audio('audio/Breathing'+LosowyInt(1,4)+'.wav');
        oddech.volume = 0.3;
        oddech.addEventListener('ended', () => {
            setTimeout(function(){
                Oddychanie();
                console.log("oddech event");
            }, LosowyInt(1000, 10000));
        });
        oddech.play();
    }
}

function Patelnie(){
    if(!czyJumpscared && graDziala && gdzieChica == 8){
        console.log("patelnie");
        patelnie = new Audio('audio/CKitchen'+LosowyInt(1,4)+'.wav');
        if(czyKamery && kamera == 8){
            patelnie.volume = 1;
        }else{
            patelnie.volume = 0.2;
        }
        patelnie.addEventListener('ended', () => {
            setTimeout(function(){
                Patelnie();
                console.log("patelnie event");
            }, LosowyInt(100, 300));
        });
        patelnie.play();
    }
}