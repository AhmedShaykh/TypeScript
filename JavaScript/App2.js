"use strict";
document.write("Hello From TS");
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
