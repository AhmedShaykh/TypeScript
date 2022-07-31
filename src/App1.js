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
let ts;
console.log(ts = [4, "AHM X", true]);
