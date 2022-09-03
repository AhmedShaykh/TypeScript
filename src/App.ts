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