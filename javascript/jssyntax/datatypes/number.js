let my_num = 80;
let my_float = 80.5;
console.log(typeof my_num);
console.log(typeof my_float);

let num = Number(800000000000000000000000000);
let num_test = Number("hello");
console.log(typeof num_test);
console.log(typeof num);
//Number Properties

let num_prop = Number.NEGATIVE_INFINITY;
console.log(num_prop);

//Number Methods
console.log(num.toExponential());
console.log(num.toLocaleString());
console.log(typeof num.toString());

//Static Methods
console.log(Number.isInteger(num));
console.log(Number.isInteger(num_test));
console.log(Number.isInteger(my_float));
console.log(Number.isSafeInteger(num));

if (Number.isSafeInteger(num)) {
    console.log("Number is an safe integer");
} else {
    console.log("Number is not an safe integer");
}

