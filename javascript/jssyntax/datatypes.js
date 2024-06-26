console.log("JavaScript Datatypes");
//Premitive datatypes
let x = 40;
let y = 50;
let m = "40";

let z = x === y;
let w = z === m;
let u = x == m;

console.log(z);
console.log(w);
console.log(u);

//Non primitive datatypes
let student1 = {
    name: "John",
    age: 20
}

let student2 = {
    name: "Jane",
    age: 20
}

let student3 = student2;

let result_of_comparison = student1 === student2;
console.log(result_of_comparison);

result_of_comparison2 = student2 == student3;
console.log(result_of_comparison2);

//Boolean datatypes
const isTrue = true;
console.log(isTrue);

console.log(isTrue.valueOf());

//Big int
let big_int = 1234567890123456789012345678901234567890n;
console.log(big_int);
console.log(typeof big_int);

//Symbol datatype
const symbol1 = Symbol('');
const symbol2 = Symbol('');
const symbol3 = symbol2;

console.log(symbol1, typeof symbol1);
console.log(symbol1 === symbol2);