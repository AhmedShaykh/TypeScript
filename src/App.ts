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
    AIC,
    CNC,
    BCC,
    IOT
};

console.log(Axiom.IOT);