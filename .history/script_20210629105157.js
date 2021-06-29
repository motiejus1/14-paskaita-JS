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

    // (Math.random() * (15 - 1)) + 1 = Math.random() * 14 + 1 // 1  iki 14
    // (Math.random() * (11 - 7)) + 7 = Math.random() * 4 + 7 // 1  iki 14
     //                                   0.5 * 4 = 2 + 7 = 9; 

}

//minimali reiksme ieina i intervala, maksimali ieina
function randomFunctionWithMax(min, max) {

    return Math.floor((Math.random() * (max - min + 1)) + min);

     // (Math.random() * (15 - 1 + 1)) + 1 = Math.random() * 15 + 1 // 1  iki 15
}

let laiptines = ["laiptine1", "laiptine2", "laiptine3"] //laiptiniu skaicius masyvo lenght - 3
let laiptiniuSk = laiptines.length;

let atsitiktinisSk = randomFunctionWithMax(7, 11); // Skaiciu nuo 1 iki 15


// 1 iki 15
// Math.random() * 15
// 0.5 * 15 = 7.5
// 0.9 * 15 = 13.5
// 1 * 15 = 15
//(0 *15) + 1 = 1;


console.log(atsitiktinisSk);

let butai = [20, 22, 19, 13];