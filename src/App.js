"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.component = void 0;
console.log('Learn TypeScript!');
function type(b, a) {
    return b / a;
}
;
console.log(type(4, 2));
let firstName = "Ahmed";
let lastName = "Shaikh";
let age = 21;
let isActiveDeveloper = true;
let working = ["JavaScript", "React", "TypeSScript"];
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log("Age " + age);
console.log("Status " + isActiveDeveloper);
console.log("Working: " + working);
const isActive = true;
console.log(isActive);
function isEven(num) {
    return num % 2 === 0;
}
;
console.log(isEven(5));
console.log(isEven(2));
console.log(isEven(10));
let a = 1; // Not Attempt
a = true;
a = ["React", "Next", "Blockchain"];
console.log(a); // Aviod "Any" Type;
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
    true, 1, "Dayyan", "Ahmed", "Usman", "Yaseen"
];
console.log(arr[2]);
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
data = { name: "Mr. X", address: "0xfnefjwnfwpfkwp[ww2[2e2e2" };
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
let wei;
wei = "Eth";
console.log(wei);
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        console.log(this.brand);
    }
}
let myCar = new Car("Bugatti");
myCar.getBrand();
class CarX {
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        console.log(this.brand);
    }
}
let myCarX = new CarX("CIVIC");
myCarX.getBrand();
console.log(`My Car ` + myCarX.brand);
class CarZ {
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        console.log(this.brand);
    }
}
let myCarZ = new CarZ("Tesla");
myCarZ.getBrand();
// console.log(myCarZ.brand); // NO Allow Direct Access In Private Property
class CarY {
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        console.log(this.brand);
    }
}
let myCarY = new CarY("BMW");
myCarY.getBrand();
class myCoin {
    constructor(name, market, year) {
        this.name = name;
        this.market = market;
        this.year = year;
    }
    getCoin() {
        console.log(this.name);
        console.log(this.market);
        console.log(this.year);
    }
}
let myCoins = new myCoin("ETH", "$1,087", 2015);
myCoins.getCoin();
function gen(a, b) {
    return [a, b];
}
console.log(gen(2, 2));
console.log(gen("2", "2"));
console.log(gen([2], [4]));
function addUser(user) {
    return user;
}
console.log(addUser("AHM X ETH"));
function artistName(artist) {
    console.log(`${artist.firstName} ${artist.lastName}`);
}
let art = {
    firstName: "Martin",
    lastName: "Garrix"
};
artistName(art);
const index_1 = require("./index");
exports.component = {
    name: "Solidity",
    version: 8,
    frameWork: "Hardhat",
};
console.log(exports.component);
console.log(index_1.metaVerse);
let matheMatician = Math.random() > 0.5 ? undefined : "Message";
console.log(matheMatician);
let thinker = null;
if (Math.random() > 0.5) {
    thinker = "Text";
}
console.log(thinker);
let scientist;
scientist = Math.random() > 0.5 ? "Newton" : 404;
if (scientist === "Newton") {
    scientist.toUpperCase();
}
console.log(scientist);
let var10;
var10 = "Rose";
console.log(var10);
const game = {
    name: "Minecraft",
    year: 2008
};
console.log(game);
const games = { name: "Minecraft" };
games.name = "GTA 5";
console.log(games);
let usman = {
    dev: "Web 3 Developer",
    salary: 400000,
};
let bilal = {
    dev: "Full Stack Blockchain Developer",
    salary: 5000000000,
};
console.log(`Usman: is ${usman.dev} & Usman Net Worth is $${usman.salary}`);
console.log(`Bilal: is ${bilal.dev} & Bilal Net Worth is $${bilal.salary}`);
let comp1 = {
    name: "TeaX",
    year: 2021,
};
console.log(comp1);
let comp2 = comp1;
console.log("Company 2", comp2);
console.log(comp2.name);
comp2 = {
    name: "PanaVerse",
    year: 2023,
};
console.log(comp2);
const series = Math.random() > 0.5 ? {
    name: "Vikings",
    storyLine: "Reality",
} : {
    name: "Stranger Things",
    fantasy: true,
};
console.log(typeof series.name, series.name);
console.log(typeof series.storyLine, series.storyLine);
console.log(typeof series.fantasy, series.fantasy);
function edm(song, rating = 0) {
    console.log(`${song} Gets Rating ${rating}/10`);
}
edm("Hardwell - Mad World", 9);
edm("Will Sparks - Dreaming", 10);
function song(singer, ...songs) {
    for (const var1 of songs) {
        console.log(`${var1} Feat. ${singer}`);
    }
}
song("Sabrina Carpenter", "On My Way", "Fast Times", "First Love");
function technoTrance(techno) {
    for (let trance of techno) {
        console.log(`${trance}`);
    }
    return techno.length;
}
technoTrance(["Will Sparks - L.S.D", "MADDIX - Formula"]);
function fun1(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
    console.log("Please Wait");
}
function fun2() {
    console.log("Working Done...!");
}
fun1(fun2);
let data1 = ['text2', 'text3', 'text4'];
data1.forEach((data, index) => {
    console.log(data, index);
});
function funName(data2) {
    console.log(data2(404));
}
funName((abc) => 4843657453);
function voidData(message) {
    console.log(message);
}
voidData("Check Void Function");
function overload(a, b) {
    return a + b;
}
;
console.log(overload("Hello ", "World"));
console.log(overload(112, 88));
let newArray = ["array", "array2", 123, 456, true];
newArray.pop();
newArray.push(789, false);
console.log(newArray);
let arrayTS;
arrayTS = ["Data", "Type", 345, 864];
console.log(arrayTS);
let arrayVar;
arrayVar = [1, 2, 3, 4], "Pakistan";
console.log(arrayVar);
let arrayDim;
// ========== 2 Dimensional Array ========== //
arrayDim = [
    ["Mon", "Tue", "Wed"],
    [4, 6, 10]
];
for (let Days in arrayDim) {
    console.log(arrayDim[Days]);
}
let Coins = ["BTC", "ETH", "BNB"];
for (let data in Coins) {
    console.log(Coins[data]);
}
// // ======== Tuples ======== //
let tuple = [4, "MATIC"];
console.log(tuple);
let tupleValue = [4, 6];
console.log(tupleValue);
const tupleConst = ["React Token", true, 505];
console.log(tupleConst);
