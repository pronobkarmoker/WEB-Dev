// JSON object
const jsonData = '{"name": "John", "age": 30, "city": "New York"}';

// Parse JSON string to JavaScript object
const obj = JSON.parse(jsonData);
console.log(obj.name); // Output: John

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}

// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// It is easy for humans to read and write, and easy for machines to parse and generate.
// JSON is often used to transmit data between a server and a web application.


// {
//     "name": "John",
//     "age": 30,
//     "city": "New York"
// }