let graDziala = true;
let noc = 1;
let czas = 0;
let godzina = 0;
let dlugoscGodzina = 90;
let bateria = 1000;
let zuzycie = 0;
let nocneZuzycie = [10,6,5,4];
if(noc < 5){
    zuzycie+=(1/nocneZuzycie[noc-1]);
}else zuzycie+=(1/3);
//"ai" od 0 do 20
let aiFreddy = 3;
let aiBonnie = 20;
let aiChica = 3;
let aiFoxy = 3;
//ich lokalizacja: 0 - scena, 11 - lewe drzwi, 12 - prawe drzwi
let gdzieFreddy = 0;
let gdzieBonnie = 0;
let warBonnie = 0;
let gdzieChica = 0;
let warChica = 0;
let freddyChceIsc = false;
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
let wylaczonaChica1 = -1;
let wylaczonaChica2 = -1;
//Foxy
let gdzieFoxy = 0;
let czyFoxyMoze = true;
let foxyTimer = 150;

const main = document.querySelector('main');
const panel = document.getElementById('panelKamer');
const wylaczone = document.getElementById('wylaczone');
const kamery = document.getElementById('widokKamera');
const drzwiLewo = document.getElementById('drzwiLewo');
const drzwiPrawo = document.getElementById('drzwiPrawo');

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

setInterval(function(){FoxyTimer()}, 200);
setInterval(function(){CzasSekunda()}, 1000);
setInterval(function(){SzansaRuchu(0)}, 3000);
setInterval(function(){SzansaRuchu(1)}, 4800);
setInterval(function(){SzansaRuchu(2)}, 5200);
setInterval(function(){SzansaRuchu(3)}, 5100);

//co sekundę
function CzasSekunda(){
    if(graDziala){
        let Bateria = document.getElementById("bateria");
        czas+=1;
        bateria-=zuzycie;
        Bateria.innerHTML = Math.round(bateria/10)+"%";
        if(czas%dlugoscGodzina==0) CzasGodzina();
        if(bateria <= 0 && ciemnoscFaza == 0){
            NoBateria(0);
        }
    }
}

function FoxyTimer(){
    foxyTimer-=2
    if(czyKamery){
        czyFoxyMoze = false;
        foxyTimer = Math.random()*142 + 8;
    }
    if(foxyTimer<=0){
        czyFoxyMoze = true;
    }
}

//fazy 0-prad   1-brakpradu 2-oczy 3-ciemnosc 4-smierc
function NoBateria(){
    let jumpscare = document.getElementById("jumpscare");
    jumpscare.style.display = "block";
    if(ciemnoscFaza == 0){
        console.log("Zgaszenie światła");
        ciemnoscFaza = 1;
        ilosc = 0;
        jumpscare.style.backgroundImage = 'url("img/biuro/noprad1.png")';
        setTimeout(function(){NoBateriaF1()}, 5000);
        graDziala = false;
    }
    if(ciemnoscFaza == 2){
        console.log("Oczy freddiego");
        ciemnoscFaza = 3;
        ilosc = 0;
        jumpscare.style.backgroundImage = 'url("img/biuro/noprad2.png")';
        setTimeout(function(){NoBateriaF2()}, 5000);
    }
    if(ciemnoscFaza == 4){
        console.log("Ciemność");
        ciemnoscFaza = 5;
        jumpscare.style.backgroundImage = 'url("img/biuro/noprad3.png")';
        setTimeout(function(){NoBateriaF3()}, 2000);
    }
    if(ciemnoscFaza == 6){
        ciemnoscFaza = 7;
        Przegrana(0);
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
    let Zegar = document.getElementById("czas");
    console.log("-----Godzina")
    godzina++
    Zegar.innerHTML = godzina + " AM";
    switch(godzina){
        case 2:
            aiBonnie++;
            break;
        case 3:
            aiBonnie++;
            aiChica++
            //aiFoxy++
            break;
        case 4:
            aiBonnie++;
            aiChica++
            //aiFoxy++
            break;
        case 6:
            Wygrana();
    }
}

//Funkcja do szansy na ruch
function SzansaRuchu(kto){
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
                    if(warBonnie==0)warBonnie==1;
                    else warBonnie==0;
                    wylaczonaBonnie1 = gdzieBonnie;
                    wylaczonaBonnie2 = gdzieBonnie;
                    wlaczKamery(0);
                }
                if(random <= aiBonnie){
                    console.log(random);
                    console.log(aiBonnie);



                    RuchBonnie();
                }
                break;
            case 2:
                if(random2){
                    if(warChica==0)warChica==1;
                    else warChica==0;
                    wylaczonaChica1 = gdzieChica;
                    wylaczonaChica2 = gdzieChica;
                    wlaczKamery(1);
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

//Ruszanie animatroników
function RuchFreddy(){
    if(kamera != gdzieFreddy){
        switch(gdzieFreddy){ //0,1,9,8,5,6
            case 0:
                gdzieFreddy = 1;
                break;
            case 1:
                gdzieFreddy = 9;
                break;
            case 9:
                gdzieFreddy = 8;
                break;
            case 8:
                gdzieFreddy = 5;
                break;
            case 5:
                gdzieFreddy = 6;
                break;
            case 6:
                if(stanDrzwiPrawo == 1){
                    gdzieFreddy=5;
                }else Przegrana(0);
                break;
                
        }
        console.log("Fred "+gdzieFreddy);
    }
}
let bonniePowrot = [0,1,7];
function RuchBonnie(){
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
                ZmienPrawde(0);
            }
            break;
        case 4:
            if(SzansaBool(0.5)){
                gdzieBonnie = 2;
            }else{
                gdzieBonnie = 11;
                ZmienPrawde(0);
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
                random = LosowyInt(0,2);
                gdzieBonnie=bonniePowrot[random];
                ZmienPrawde(0);
            }else Przegrana(1);
            break;
    }
    wylaczonaBonnie2 = gdzieBonnie;
    wlaczKamery(0);
    console.log("Boni "+gdzieBonnie);
    PokazKamAnim();
}
let chicaPowrot = [0,8,9];
function RuchChica(){
    wylaczonaChica1 = gdzieChica;
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
                ZmienPrawde(1);
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
            }
            break;
        case 12:
            if(stanDrzwiPrawo == 1){
                random = LosowyInt(0,2);
                gdzieChica=chicaPowrot[random];
                ZmienPrawde(1);
            }else Przegrana(2);
            break;
    }
    wylaczonaChica2 = gdzieChica;
    wlaczKamery(1);
    console.log("Chia "+gdzieChica);
    PokazKamAnim();
}

function wlaczKamery(kto){ //0bonnie 1chica
    if(kto == 0){
        setInterval(function(){
            wylaczonaBonnie1 = -1;
            wylaczonaBonnie2 = -1;
            PokazKamAnim();
        }, 1000);
    }else{
        setInterval(function(){
            wylaczonaChica1 = -1;
            wylaczonaChica2 = -1;
            PokazKamAnim();
        }, 1000);
    }
}

function RuchFoxy(){
    switch(gdzieFoxy){ //0,1,5,6,8,9,12
        case 0: //kurtyna
            gdzieFoxy = 1;
            break;
        case 1: //wygląda   
            gdzieFoxy = 2;
            break;
        case 2: //stoi poza   
            gdzieFoxy = 3;
            break;
        case 3: //biegnie -------------tu zmiana - jumpscare chwilę po ustawieniu na 3
            if(stanDrzwiLewo == 1){
                random = LosowyInt(0,2);
                gdzieFoxy=0;
            }else Przegrana(3);
            break;
    }
    console.log("Foxy "+gdzieFoxy);
    PokazKamAnim();
}

//przefrywanie i wygrywanie
function Przegrana(kto){
    let jumpscare = document.getElementById("jumpscare");
    console.log("-----Przegrana");
    jumpscare.style.display = "block";
    switch(kto){
        case 0:
            jumpscare.style.backgroundImage = 'url("img/jumpscareFreddy.png")';
            break;
        case 1:
            jumpscare.style.backgroundImage = 'url("img/jumpscareBonnie.png")';
            break;
        case 2:
            jumpscare.style.backgroundImage = 'url("img/jumpscareChica.png")';
            break;
        case 3:
            jumpscare.style.backgroundImage = 'url("img/jumpscareFoxy.png")';
            break;

    }
    graDziala = false;
    setInterval(function(){
        if(kto == 1){
            random = LosowyInt(0,10);
            jumpscare.style.backgroundImage = 'url("img/jumpscare/bonnie/'+random+'.png")';
        }
    }, 50);
}
function Wygrana(){
    alert("Wygrałeś");
    console.log("-----Wygrana");
    graDziala = false;
}


function ObslugaDrzwi(strona){
    if(graDziala){
        if(strona == 0){
            if(stanDrzwiLewo == 0){
                console.log("Zamknięcie Lewych Drzwi");
                stanDrzwiLewo = 1;
                drzwiLewo.style.opacity = 1;
                zuzycie++;
            }else{
                console.log("Otworzenie Lewych Drzwi");
                stanDrzwiLewo = 0;
                drzwiLewo.style.opacity = 0;
                zuzycie--;
            }
        }else{
            if(stanDrzwiPrawo == 0){
                console.log("Zamknięcie Prawych Drzwi");
                stanDrzwiPrawo = 1;
                drzwiPrawo.style.opacity = 1;
                zuzycie++;
            }else{
                console.log("Otworzenie Prawych Drzwi");
                stanDrzwiPrawo = 0;
                drzwiPrawo.style.opacity = 0;
                zuzycie--;
            }
        }
    }
}

function ObslugaSwiatla(strona){
    if(graDziala){
        if(strona == 0){
            if(stanSwiatloLewo == 0){
                console.log("Zapalenie Lewego Światła");
                stanSwiatloLewo = 1;
                zuzycie++;
                PokazPrawde(0, true);
            }else{
                console.log("Zgaszenie Lewego Światła");
                stanSwiatloLewo = 0;
                zuzycie--;
                PokazPrawde(0, false);
            }
        }else{
            if(stanSwiatloPrawo == 0){
                console.log("Zapalenie Prawego Światła");
                stanSwiatloPrawo = 1;
                zuzycie++;
                PokazPrawde(1, true);
            }else{
                console.log("Zgaszenie Prawego Światła");
                stanSwiatloPrawo = 0;
                zuzycie--;
                PokazPrawde(1, false);
            }
        }
    }
}
function PokazPrawde(strona, pokaz){
    if(graDziala){
        if(strona == 0){
            if(gdzieBonnie == 11 && pokaz){
                main.style.backgroundImage = 'url("img/biuro/bonnie.png")';
            }else if(pokaz){
                main.style.backgroundImage = 'url("img/biuro/leweswiatlo.png")';
            }else{
                main.style.backgroundImage = 'url("img/biuro/nikt.png")';
            }
        }else{
            if(gdzieChica == 12 && pokaz){
                main.style.backgroundImage = 'url("img/biuro/chica.png")';
            }else if(pokaz){
                main.style.backgroundImage = 'url("img/biuro/praweswiatlo.png")';
            }else{
                main.style.backgroundImage = 'url("img/biuro/nikt.png")';
            }
        }
    }
}
function ZmienPrawde(strona){
    if(graDziala){
        console.log("zmien "+strona);
        if(strona == 0){
            if(gdzieBonnie == 11 && stanSwiatloLewo == 1){
                main.style.backgroundImage = 'url("img/biuro/bonnie.png")';
            }else if(stanSwiatloLewo == 1){
                main.style.backgroundImage = 'url("img/biuro/leweswiatlo.png")';
            }else{
                main.style.backgroundImage = 'url("img/biuro/nikt.png")';
            }
        }else{
            if(gdzieChica == 12 && stanSwiatloPrawo == 1){
                main.style.backgroundImage = 'url("img/biuro/chica.png")';
            }else if(stanSwiatloPrawo == 1){
                main.style.backgroundImage = 'url("img/biuro/praweswiatlo.png")';
            }else{
                main.style.backgroundImage = 'url("img/biuro/nikt.png")';
            }
        }
    }
}

function KameraOtworz(){
    if(graDziala){
        if(czyKamery){
            czyKamery = false;
            panel.style.display = "none";
        }else{
            czyKamery = true;
            panel.style.display = "block";
            KameraZmien(kamera);
            czyFoxyMoze = false;
            foxyTimer = Math.random()*142 + 8;
        }
    }
}
function KameraZmien(ktora){
    if(graDziala){
        let PrzyciskKam = document.getElementById("przyciskKam"+kamera);
        PrzyciskKam.style.backgroundImage = 'url("img/kameraPrzyciski/kam'+kamera+'off.jpg")';
        kamera = ktora;
        PrzyciskKam = document.getElementById("przyciskKam"+kamera);
        PrzyciskKam.style.backgroundImage = 'url("img/kameraPrzyciski/kam'+ktora+'on.jpg")';
        PokazKamAnim();
    }   
}
//'url("img/kamery/'+ktora+'/'+co+'nikt.png")'
function PokazKamAnim(){
    let sciezka = 'url("img/kamery/'+kamera+'/';
    if(kamera != wylaczonaBonnie1 && kamera != wylaczonaBonnie2 && kamera != wylaczonaChica1 && kamera != wylaczonaChica2){
        switch(kamera){
            case 0:
                if(gdzieBonnie==0 && gdzieChica == 0){
                    sciezka += 'wszyscy';
                }else if(gdzieBonnie==0){
                    sciezka += 'freddybonnie';
                }else if(gdzieChica==0){
                    sciezka += 'freddychica';
                }else if(gdzieFreddy==0){
                    sciezka += 'freddy';
                }else{
                    sciezka += 'nikt';
                }
                break;
            case 1:
                if(gdzieChica==1){
                    sciezka += 'chica'+warChica;
                }else if(gdzieBonnie==1){
                    sciezka += 'bonnie'+warBonnie;
                }else if(gdzieFreddy==1){
                    sciezka += 'freddy';
                }else{
                    sciezka += 'nikt';
                }
                break;
            case 2:
                if(gdzieBonnie==2){
                    sciezka += 'bonnie';
                }else{
                    sciezka += 'nikt';
                }
                break;
            case 3:
                if(gdzieBonnie==3){
                    sciezka += 'bonnie'+warBonnie;
                }else{
                    sciezka += 'nikt';
                }
                break;
            case 4:
                if(gdzieBonnie==4){
                    sciezka += 'bonnie';
                }else{
                    sciezka += 'nikt';
                }
                break;
            case 5:
                if(gdzieChica==5){
                    sciezka += 'chica'+warChica;
                }else if(gdzieFreddy==5){
                    sciezka += 'freddy';
                }else{
                    sciezka += 'nikt';
                }
                break;
            case 6:
                if(gdzieChica==6){
                    sciezka += 'chica'+warChica;
                }else if(gdzieFreddy==6){
                    sciezka += 'freddy';
                }else{
                    sciezka += 'nikt';
                }
                break;
            case 7:
                if(gdzieBonnie==7){
                    sciezka += 'bonnie';
                }else{
                    sciezka += 'nikt';
                }
                break;
            case 8:
                sciezka += 'kuchnia';
                break;
            case 9:
                if(gdzieChica==9){
                    sciezka += 'chica'+warChica;
                }else if(gdzieFreddy==9){
                    sciezka += 'freddy';
                }else{
                    sciezka += 'nikt';
                }
                break;
            case 10:
                sciezka += ''+gdzieFoxy;
                break;
    
        }
        sciezka += '.png")';
    }else{
        sciezka = 'url("img/static1.png")';
    }
    //console.log("pokazkamanim");
    kamery.style.backgroundImage = sciezka;
    //console.log(sciezka);
    //console.log(panel.style.backgroundImage);
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