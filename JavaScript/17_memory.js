// 2 types : Stack(primitive) & heap{non primitive)

// Stack example
function add(a, b) {
    return a + b; // Primitive values are stored in the stack
}
let result = add(5, 10); // Function call and local variables use the stack
console.log("Stack example - Result of add(5, 10):", result); // Output: 15

// Heap example
let person = {
    name: "John",
    age: 30
}; // Objects are stored in the heap
console.log("Heap example - Initial person object:", person); // Output: { name: 'John', age: 30 }
person.age = 31; // Modifying the object in the heap
console.log("Heap example - Modified person object:", person); // Output: { name: 'John', age: 31 }