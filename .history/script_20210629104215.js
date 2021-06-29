"use strict";

// Klasės kintamieji:
// miestas - tekstas,
// pastatymo data - datos formatas, 
// adresas - tekstas,
// laiptinių skaičius - masyvas, turintis tiek elementų, kiek yra laiptinių. Pvz: [1,2,3,4]
// butų skaičius - masyvas, turintis tiek elementų, kiek butų yra laiptinėje.Pvz: [20, 22, 19, 13]
// bendras butų skaičius - suskaičiuojamas automatiškai. Apskaičiavimui susikurti statinį metodą.


let laiptines = ["laiptine1", "laiptine2", "laiptine3"] //laiptiniu skaicius masyvo lenght - 3
let laiptiniuSk = laiptines.length;

let atsitiktinisSk = Math.random() * 15; // Skaiciu nuo 0 iki 15


// 1 iki 15
// Math.random() * 15
// 0.5 * 15 = 7.5
// 0.9 * 15 = 13.5
// 1 * 15 = 15
//(0 *15 = 1;


console.log(atsitiktinisSk);

let butai = [20, 22, 19, 13];