let number_of_students_present = 10;

const total_number_of_students = 15;

let number_of_students_absent = 0;

if (number_of_students_present === total_number_of_students) {
  console.log("All students are present");
} else {
    number_of_students_absent = total_number_of_students - number_of_students_present;
    console.log("There are " + number_of_students_absent + " students absent");
    console.log("All students are not present");
}

//Nature Number Example

let natural_number = 0;
if (natural_number % 2 === 0 && natural_number !== 0) {
  console.log("The number is even");
} else if (natural_number % 2 === 1) {
  console.log("The number is odd");
} else {
  console.log("The number is zero");
}

//Loops

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(array_index = 0; array_index < numbers.length; array_index++) {
  console.log(numbers[array_index]);
}

//Find sum of numbers in an array

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum_of_nums = 0;
for(array_index = 0; array_index < numbers.length; array_index++) {
  sum_of_nums = sum_of_nums + nums[array_index];
}
console.log("The sum of the numbers is " + sum_of_nums);

//While Loop
let fruits = ["Mango","Orange","Apple","Guava","Pineapple"];
let fruit_index = 0;
while(fruit_index < fruits.length){  
    console.log(fruits[fruit_index]+" is a fruit")
    fruit_index++;
}

//Consloe log the first 50 prime numbers
let prime_num = 0;
let i = 2;

while (prime_num < 50) {
  let isPrime = true;
  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
    prime_num++;
  }
  i++;
}

