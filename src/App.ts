console.log('Learn TypeScript!');

function type(b: number, a: number) {
    return b / a
};

console.log(type(4, 2));

let firstName: string = "Ahmed";
let lastName: string = "Shaikh";

let age: number = 21;

let isActiveDeveloper: boolean = true;

let working: string[] = ["JavaScript", "React", "TypeSScript"];

let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);

console.log("Age " + age);

console.log("Status " + isActiveDeveloper);

console.log("Working: " + working);

const isActive: boolean = true;
console.log(isActive);

function isEven(num: number) {
    return num % 2 === 0;
};

console.log(isEven(5));
console.log(isEven(2));
console.log(isEven(10));

let a: any = 1; // Not Attempt
a = true;
a = ["React", "Next", "Blockchain"];

console.log(a); // Aviod "Any" Type;

let tsc: [number, string, boolean];

console.log(tsc = [4, "AHM X", true]);

type Student = {
    name: string;
    age: number;
    courses: string[];
};

const std: Student = {
    name: "Bilal",
    age: 21,
    courses: ["Ai", "CNC", "BC"]
};

console.log(std.name);
console.log(std.courses);

const arr: [boolean, number, ...string[]] = [
    true, 1, "Dayyan", "Ahmed", "Usman", "Yaseen"
];

console.log(arr[2]);
console.log(arr[0]);
console.log(arr[5]);

enum Axiom {
    WEB3,
    CNC,
    BCC,
    NFT
};

console.log(Axiom.NFT);

let x: unknown = 30; // Not Use .....!
let y = x === 123;

if (typeof x === 'number') {
    let z: number = x + 10;
    console.log(z);
}

let i: number = 2;

while (i < 4) {
    console.log(`Learning While Loop In TS` + i);
    i++
}

var val: number = 0;
var team: string[] = ["Bilal", "Ahsan", "Haris", "Junaid"];

while (team[val]) {
    console.log(team[val], `My Team Member`);
    val++;
}

var int: number = 0;

do {
    console.log(`Iteration No.` + int);
    int++;
} while (int <= 5);

for (var lo: number = 0; lo <= 10; lo++) {
    if (lo === 5) {
        console.log(lo + ` is Middle Value`);
        continue;
    }
    console.log(lo);
}

function ts(message: string): void {
    return (
        console.log(message)
    )
}

ts("Learn TypeScript");

const tsx: string[] = [];
tsx.push("Types");

console.log(tsx);

function test(a: number, b: number): number {
    return a + b;
}

console.log(test(2, 5));

let obj: { name: string, age: number, salary?: number }

obj = { name: "Ahmed", age: 21, salary: 100000 }
console.log(obj.salary);

function uint(a: string, b?: string) {
    return b ? a + b : a;
}

console.log(uint("4"));

interface dataType {
    name: string;
    id?: number;
    address: string;
}

let data: dataType;
data = { name: "Mr. X", address: "0xfnefjwnfwpfkwp[ww2[2e2e2" }

console.log(data);

interface dataTypes {
    name: string;
    rollNum: number;
    age: number;
}

let datas: dataType | dataTypes; // Union
datas = { name: "Vitalik", rollNum: 404, address: "0xfnefjwaa46901nfwpfkwpw2e2e2" }

console.log(datas);

let datas2: dataType & dataTypes; // Intersection

datas2 = {
    name: "Satoshi",
    rollNum: 0,
    age: 55,
    address: "IDK",
    id: 6
}

console.log(datas2);

type Count = string | number;

let wei: Count;
wei = "Eth";

console.log(wei);

class Car {
    brand;
    constructor(brand: string) {
        this.brand = brand;
    }

    getBrand() {
        console.log(this.brand)
    }
}

let myCar = new Car("Bugatti");
myCar.getBrand();

class CarX {
    constructor(public brand: string) {
    }

    getBrand() {
        console.log(this.brand)
    }
}

let myCarX = new CarX("CIVIC");
myCarX.getBrand();
console.log(`My Car ` + myCarX.brand);

class CarZ {
    constructor(private brand: string) {
    }

    getBrand() {
        console.log(this.brand)
    }
}

let myCarZ = new CarZ("Tesla");
myCarZ.getBrand();
// console.log(myCarZ.brand); // NO Allow Direct Access In Private Property

class CarY {
    constructor(protected brand: string) {
    }

    getBrand() {
        console.log(this.brand)
    }
}

let myCarY = new CarY("BMW");
myCarY.getBrand();
// console.log(myCarY.brand); // Protected Property Access Allow In SubClasses

interface Coin {
    name: string;
    market: string;
}

interface Coin2 {
    year: number;
}

class myCoin implements Coin, Coin2 {
    constructor(public name: string, public market: string, public year: number) {
    }

    getCoin() {
        console.log(this.name);
        console.log(this.market);
        console.log(this.year);
    }
}

let myCoins = new myCoin("ETH", "$1,087", 2015);
myCoins.getCoin();

function gen<T>(a: T, b: T): T[] {
    return [a, b]
}

console.log(gen<number>(2, 2));
console.log(gen<string>("2", "2"));
console.log(gen<Array<number>>([2], [4]));

function addUser<T>(user: T) {
    return user;
}

console.log(addUser<string>("AHM X ETH"));

interface Artist {
    firstName: string;
    lastName: string;
}

function artistName(artist: Artist) {
    console.log(`${artist.firstName} ${artist.lastName}`);
}

let art = {
    firstName: "Martin",
    lastName: "Garrix"
}

artistName(art);

import { Component, metaVerse } from "./index";

export const component: Component = {
    name: "Solidity",
    version: 8,
    frameWork: "Hardhat",
}

console.log(component);

console.log(metaVerse);

let matheMatician = Math.random() > 0.5 ? undefined : "Message";
console.log(matheMatician);

let thinker: string | null = null;
if (Math.random() > 0.5) {
    thinker = "Text";
}

console.log(thinker);

let scientist: number | string;
scientist = Math.random() > 0.5 ? "Newton" : 404

if (scientist === "Newton") {
    scientist.toUpperCase();
}

console.log(scientist);

type flower = "Rose" | "Tulip";

let var10: flower | string;
var10 = "Rose";
console.log(var10);

const game: { name: string, year: number } = {
    name: "Minecraft",
    year: 2008
}

console.log(game);

const games = { name: "Minecraft" };
games.name = "GTA 5";

console.log(games);

type freelancer = {
    dev: string,
    salary: number,
}

let usman: freelancer = {
    dev: "Web 3 Developer",
    salary: 400000,
}

let bilal: freelancer = {
    dev: "Full Stack Blockchain Developer",
    salary: 5000000000,
}

console.log(`Usman: is ${usman.dev} & Usman Net Worth is $${usman.salary}`);
console.log(`Bilal: is ${bilal.dev} & Bilal Net Worth is $${bilal.salary}`);

type company = {
    name: string;
    year: number;
}

let comp1: company = {
    name: "TeaX",
    year: 2021,
}

console.log(comp1);

let comp2 = comp1;

console.log("Company 2", comp2);
console.log(comp2.name);

comp2 = {
    name: "PanaVerse",
    year: 2023,
}

console.log(comp2);

const series = Math.random() > 0.5 ? {
    name: "Vikings",
    storyLine: "Reality",
} : {
    name: "Stranger Things",
    fantasy: true,
}

console.log(typeof series.name, series.name);
console.log(typeof series.storyLine, series.storyLine);
console.log(typeof series.fantasy, series.fantasy);

function edm(song: string, rating = 0) {
    console.log(`${song} Gets Rating ${rating}/10`);
}

edm("Hardwell - Mad World", 9);
edm("Will Sparks - Dreaming", 10);

function song(singer: string, ...songs: string[]) {
    for (const var1 of songs) {
        console.log(`${var1} Feat. ${singer}`)
    }
}

song("Sabrina Carpenter", "On My Way", "Fast Times", "First Love");

function technoTrance(techno: string[]) {
    for (let trance of techno) {
        console.log(`${trance}`);
    }
    return techno.length;
}

technoTrance(["Will Sparks - L.S.D", "MADDIX - Formula"]);

function fun1(callback: Function) {
    setTimeout(() => {
        callback();
    }, 2000);
    console.log("Please Wait");
}

function fun2() {
    console.log("Working Done...!")
}

fun1(fun2);

let data1 = ['text2', 'text3', 'text4'];

data1.forEach((data, index) => {
    console.log(data, index);
});

// ========= Function Type-Alias ========= //
type data1 = (abc: number) => number;

function funName(data2: data1): void {
    console.log(data2(404));
}

funName((abc) => 4843657453);

function voidData(message: string): void {
    console.log(message);
}

voidData("Check Void Function");

function overload(a: String, b: String): String;
function overload(a: number, b: number): number;
function overload(a: any, b: any): any {
    return a + b;
};

console.log(overload("Hello ", "World"));
console.log(overload(112, 88));

let newArray = ["array", "array2", 123, 456, true];
newArray.pop();
newArray.push(789, false);
console.log(newArray);

let arrayTS: (string | number)[];
arrayTS = ["Data", "Type", 345, 864];
console.log(arrayTS)

let arrayVar: string | number[];
arrayVar = [1, 2, 3, 4], "Pakistan";
console.log(arrayVar);

let arrayDim: (string | number)[][];

// ========== 2 Dimensional Array ========== //
arrayDim = [
    ["Mon", "Tue", "Wed"],
    [4, 6, 10]
]

for (let Days in arrayDim) {
    console.log(arrayDim[Days]);
}

let Coins: string[] = ["BTC", "ETH", "BNB"];

for (let data in Coins) {
    console.log(Coins[data]);
}

// // ======== Tuples ======== //
let tuple: [number, string] = [4, "MATIC"];
console.log(tuple);

let tupleValue: [number, number] = [4, 6];
console.log(tupleValue);

const tupleConst = ["React Token", true, 505] as const;
console.log(tupleConst);