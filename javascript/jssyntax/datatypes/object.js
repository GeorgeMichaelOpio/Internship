const obj = {
    key: "value",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
};

const student_details = {
    first_name: "John",
    last_name: "Doe",
    age: 20,
    gender: "Male",
    address: "123 Main Street",
    city: "New York",
}

console.log(student_details.first_name);

//Asynchronous function
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
}

fetchData();