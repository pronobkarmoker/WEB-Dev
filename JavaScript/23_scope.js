// dont use var

// Global Scope
let globalVar = "I am a global variable";

function globalFunction() {
    console.log(globalVar); // Accessible here
}

// Local Scope
function localScopeExample() {
    let localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}

localScopeExample();
// console.log(localVar); // Error: localVar is not defined

// Block Scope
if (true) {
    let blockScopedVar = "I am block scoped";
    console.log(blockScopedVar); // Accessible here
}
// console.log(blockScopedVar); // Error: blockScopedVar is not defined

// Function Scope
function functionScopeExample() {
    var functionScopedVar = "I am function scoped";
    console.log(functionScopedVar); // Accessible here
}
functionScopeExample();
// console.log(functionScopedVar); // Error: functionScopedVar is not defined

// Lexical Scope
function outerFunction() {
    let outerVar = "I am from outer scope";

    function innerFunction() {
        console.log(outerVar); // Accessible due to lexical scope
    }

    innerFunction();
}
outerFunction();

// Mini Hoisting Example
console.log(hoistedVar); // Output: undefined (var is hoisted but not initialized)
var hoistedVar = "I am hoisted";

// let and const are not hoisted in the same way
// console.log(notHoistedVar); // Error: Cannot access 'notHoistedVar' before initialization
let notHoistedVar = "I am not hoisted";