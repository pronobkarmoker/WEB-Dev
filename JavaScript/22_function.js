// 1. Basic Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Shuvo"));

// 2. Function Expression
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 3));

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 2));

// 4. Function with Default Parameters
function sayHello(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(sayHello());
console.log(sayHello("Shuvo"));

// 5. Function with Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// 6. Function Returning an Object
function createUser(name, age) {
    return { name, age };
}
console.log(createUser("Shuvo", 25));

// 7. Function with Array as Parameter
function printArray(arr) {
    arr.forEach((item, index) => console.log(`Index ${index}: ${item}`));
}
printArray([1, 2, 3, 4]);

// 8. Function with Object as Parameter
function printObject(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
printObject({ name: "Shuvo", age: 25 });

// 9. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("This is an IIFE!");
})();

// 10. Higher-Order Function
function higherOrderFunction(callback) {
    callback();
}
higherOrderFunction(() => console.log("Callback executed!"));

// 11. Function Returning Another Function
function outerFunction() {
    return function innerFunction() {
        console.log("Inner function executed!");
    };
}
const inner = outerFunction();
inner();

// 12. Recursive Function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// 13. Function with Destructuring (Array)
function sumFirstTwo([a, b]) {
    return a + b;
}
console.log(sumFirstTwo([10, 20, 30]));

// 14. Function with Destructuring (Object)
function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printUser({ name: "Shuvo", age: 25 });

// 15. Anonymous Function
setTimeout(function () {
    console.log("Anonymous function executed!");
}, 1000);

// 16. Function with Closure
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment());
console.log(increment());

// 17. Async Function
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}
// Uncomment to test: fetchData();

// 18. Generator Function
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generatorFunction();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// 19. Function with Try-Catch
function safeDivide(a, b) {
    try {
        if (b === 0) throw new Error("Division by zero!");
        return a / b;
    } catch (error) {
        console.error(error.message);
    }
}
console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));

// 20. Currying Function
function curry(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(curry(1)(2)(3));