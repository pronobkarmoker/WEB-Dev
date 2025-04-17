// Immediately Invoked Function Expression (IIFE)

// Basic IIFE
(function() {
    console.log("This is a basic IIFE.");
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("Shuvo");

// IIFE with return value
const result = (function(a, b) {
    return a + b;
})(5, 10);
console.log(`Result of IIFE: ${result}`);

// Arrow function IIFE
(() => {
    console.log("This is an arrow function IIFE.");
})();

// IIFE for module pattern
const counter = (function() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
})();
counter.increment();
counter.increment();
counter.decrement();
console.log(`Final Count: ${counter.getCount()}`);