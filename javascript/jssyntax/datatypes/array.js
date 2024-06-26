console.log('Arrays')
let my_arr_num = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let var_types_arr = [true,5,7,"Hello World"];

console.log(my_arr_num[0]);

console.log(my_arr_num.length);

console.log(my_arr_num.lastIndexOf(1));

//Array of objects
let modified_arr = my_arr_num.push("hello");

console.log(my_arr_num);
console.log(typeof modified_arr);
console.log(typeof my_arr_num);

const names = ["John", "Jane", "James", "Jude"];

const mod = names.shift();

console.log(names);