const greeting = "Good morning";

console.log(typeof greeting);

const my_str = new String("Good Afternoon");

//String Properties
console.log(my_str.length);

//String Methods
//replace
console.log(greeting.replace("morning", "evening"));

//slice
console.log(greeting.slice(0, 5));

//charAt
const char_at = greeting.charAt(0);
console.log(char_at);

console.log(greeting.startsWith("Good"));