"use strict";

// Klasės kintamieji:
// miestas - tekstas,
// pastatymo data - datos formatas, 
// adresas - tekstas,
// laiptinių skaičius - masyvas, turintis tiek elementų, kiek yra laiptinių. Pvz: [1,2,3,4]
// butų skaičius - masyvas, turintis tiek elementų, kiek butų yra laiptinėje.Pvz: [20, 22, 19, 13]
// bendras butų skaičius - suskaičiuojamas automatiškai. Apskaičiavimui susikurti statinį metodą.



//minimali reiksme ieina i intervala, maksimali neieina
function randomFunction(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

//minimali reiksme ieina i intervala, maksimali ieina
function randomFunctionWithMax(min, max) {

    return Math.floor((Math.random() * (max - min + 1)) + min);

     // (Math.random() * (15 - 1 + 1)) + 1 = Math.random() * 15 + 1 // 1  iki 15
}

let laiptines = ["laiptine1", "laiptine2", "laiptine3",'laiptine4', 'laiptine5'] //laiptiniu skaicius masyvo lenght - 3

let laiptiniuSk = laiptines.length;

let atsitiktinisSk = randomFunctionWithMax(1, 100); // Skaiciu nuo 1 iki 100

console.log(atsitiktinisSk);

// let butai = [20, 22, 19, 13];
let butai = [];
for (let i = 0; i< laiptiniuSk; i++) {
    butai.push(randomFunctionWithMax(1, 100));
}

console.log(butai);

//gauname laiptiniu skaiciu +
//pagal laiptiniu skaiciu susikuriame butu masyva
//butu masyvas turi tiek elementu kiek yra laiptiniu
// kiekvienas buto masyvo elementas yra atsitiktinis skaicius