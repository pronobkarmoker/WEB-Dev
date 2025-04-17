// Example 1: Regular function using `this`
const obj1 = {
    name: "Object 1",
    regularFunction: function () {
        console.log("Regular Function:", this.name);
    },
};
obj1.regularFunction(); // Output: Regular Function: Object 1

// Example 2: Arrow function and `this`
const obj2 = {
    name: "Object 2",
    arrowFunction: () => {
        console.log("Arrow Function:", this.name);
    },
};
obj2.arrowFunction(); // Output: Arrow Function: undefined (arrow functions don't bind `this`)

// Example 3: Arrow function inside a regular function
const obj3 = {
    name: "Object 3",
    regularFunction: function () {
        const arrowFunction = () => {
            console.log("Arrow Function Inside Regular Function:", this.name);
        };
        arrowFunction();
    },
};
obj3.regularFunction(); // Output: Arrow Function Inside Regular Function: Object 3

// Example 4: Using `this` in event listeners
const button = document.createElement("button");
button.textContent = "Click Me";
button.addEventListener("click", function () {
    console.log("Button Clicked (Regular Function):", this);
});
button.addEventListener("click", () => {
    console.log("Button Clicked (Arrow Function):", this);
});
document.body.appendChild(button);

// Example 5: `this` in a constructor function
function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log("Constructor Function:", this.name);
    };
}
const person = new Person("John");
person.sayName(); // Output: Constructor Function: John

// Example 6: `this` in a class
class Animal {
    constructor(type) {
        this.type = type;
    }
    regularMethod() {
        console.log("Class Regular Method:", this.type);
    }
    arrowMethod = () => {
        console.log("Class Arrow Method:", this.type);
    };
}
const animal = new Animal("Dog");
animal.regularMethod(); // Output: Class Regular Method: Dog
animal.arrowMethod(); // Output: Class Arrow Method: Dog