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
    Axiom[Axiom["WEB3"] = 0] = "WEB3";
    Axiom[Axiom["CNC"] = 1] = "CNC";
    Axiom[Axiom["BCC"] = 2] = "BCC";
    Axiom[Axiom["NFT"] = 3] = "NFT";
})(Axiom || (Axiom = {}));
;
console.log(Axiom.NFT);
let x = 30; // Not Use .....!
let y = x === 123;
if (typeof x === 'number') {
    let z = x + 10;
    console.log(z);
}
let i = 2;
while (i < 4) {
    console.log(`Learning While Loop In TS` + i);
    i++;
}
var val = 0;
var team = ["Bilal", "Ahsan", "Haris", "Junaid"];
while (team[val]) {
    console.log(team[val], `My Team Member`);
    val++;
}
var int = 0;
do {
    console.log(`Iteration No.` + int);
    int++;
} while (int <= 5);
for (var lo = 0; lo <= 10; lo++) {
    if (lo === 5) {
        console.log(lo + ` is Middle Value`);
        continue;
    }
    console.log(lo);
}
function ts(message) {
    return (console.log(message));
}
ts("Learn TypeScript");
const tsx = [];
tsx.push("Types");
console.log(tsx);
function test(a, b) {
    return a + b;
}
console.log(test(2, 5));
let obj;
obj = { name: "Ahmed", age: 21, salary: 100000 };
console.log(obj.salary);
function uint(a, b) {
    return b ? a + b : a;
}
console.log(uint("4"));
let data;
data = { name: "Mr .X", address: "0xfnefjwnfwpfkwp[ww2[2e2e2" };
console.log(data);
let datas; // Union
datas = { name: "Vitalik", rollNum: 404, address: "0xfnefjwaa46901nfwpfkwpw2e2e2" };
console.log(datas);
let datas2; // Intersection
datas2 = {
    name: "Satoshi",
    rollNum: 0,
    age: 55,
    address: "IDK",
    id: 6
};
console.log(datas2);
