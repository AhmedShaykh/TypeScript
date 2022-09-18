console.log('Hello TypeScript');

function type(b: number, a: number) {
    return b / a
}

console.log(type(4, 2));

let firstName: string = "Ahmed";
let lastName: string = "Shaikh";

let age: number = 21;

let isActiveDeveloper: boolean = true;

let working: string[] = ["JS", "React", "TS"];

let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);

console.log("Age " + age);

console.log("Status " + isActiveDeveloper);

console.log("Working " + working);

const isActive: boolean = true;
console.log(isActive);

function isEven(num: number) {
    return num % 2 === 0;
}

console.log(isEven(5));
console.log(isEven(2));
console.log(isEven(10));

let a: any = 1; // Not Attempt
a = true;
a = ["React", "Next", "Blockchain"];

console.log(a); // Aviod "Any" Type Because It Work Like JavaScipt;

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
    true, 1, "Bilal", "Ahmed", "Usman", "Yaseen"
];

console.log(arr[3]);
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
    val++
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
data = { name: "Mr .X", address: "0xfnefjwnfwpfkwp[ww2[2e2e2" }

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
console.log(myCarX.brand);

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
// console.log(myCarY.brand); // NO Allow Access In Protected Property & Not Important In Use!

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

import { Component } from "./App2";
import { metaVerse } from "./App2";

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

let employee: {
    pro1: string,
    pro2: number,
}

let usama = employee = {
    pro1: "Web 3 Developer",
    pro2: 400000,
}

let umar = employee = {
    pro1: "React Developer",
    pro2: 400000,
}

console.log(`Usama: ${usama.pro1},Umar: ${umar.pro1}`);
console.log(`Usama: ${usama.pro2},Umar: ${umar.pro2}`);

type company = {
    name: string;
    year: number;
}

let comp1: company = {
    name: "TeaX",
    year: 2021,
}

let comp2 = comp1;

console.log(comp2);
console.log(comp2.name);

comp2 = {
    name: "KozmoTech",
    year: 2023,
}

console.log(comp2);

const poem = Math.random() > .05 ? {
    name: "Baby Shark",
    Pages: "234",
} : {
    name: "Mumpty Dumpty",
    rhymes: true,
}

console.log(typeof poem.name);
console.log(typeof poem.Pages);
console.log(typeof poem.rhymes);