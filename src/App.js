"use strict";
console.log('Hello TypeScript');
function type(b, a) {
    return b / a;
}
console.log(type(4, 2));
let firstName = "Ahmed";
let lastName = "Shaikh";
let age = 21;
let isActiveDeveloper = true;
let working = ["JS", "React", "TS"];
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log("Age " + age);
console.log("Status " + isActiveDeveloper);
console.log("Working " + working);
const isActive = true;
console.log(isActive);
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(5));
console.log(isEven(2));
console.log(isEven(10));
let a = 1; // Not Attempt
a = true;
a = ["React", "Next", "Blockchain"];
console.log(a); // Aviod "Any" Type Because It Work Like JavaScipt;
let tsc;
console.log(tsc = [4, "AHM X", true]);
const std = {
    name: "Bilal",
    age: 21,
    courses: ["Ai", "CNC", "BC"]
};
console.log(std.name);
console.log(std.courses);
const arr = [
    true, 1, "Bilal", "Ahmed", "Usman", "Yaseen"
];
console.log(arr[3]);
console.log(arr[0]);
console.log(arr[5]);
var Axiom;
(function (Axiom) {
    Axiom[Axiom["AIC"] = 0] = "AIC";
    Axiom[Axiom["CNC"] = 1] = "CNC";
    Axiom[Axiom["BCC"] = 2] = "BCC";
    Axiom[Axiom["IOT"] = 3] = "IOT";
})(Axiom || (Axiom = {}));
;
console.log(Axiom.IOT);
let x = 30;
let y = x === 123;
if (typeof x === 'number') {
    let z = x + 10;
    console.log(z);
}
