document.write("Hello From TS");

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
a = ["React" , "Next" , "Blockchain"];

console.log(a); // Aviod "Any" Type Because It Work Like JavaScipt;

let ts : [number, string, boolean];

console.log(ts = [4, "AHM X", true]);