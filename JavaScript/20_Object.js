// 1. Creating an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "sports"],
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    // Method inside an object
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

// 2. Accessing Object Properties
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe
console.log(person.address.city); // New York

// 3. Modifying Object Properties
person.age = 31;
person.hobbies.push("coding");
console.log(person.age); // 31
console.log(person.hobbies); // ["reading", "traveling", "sports", "coding"]

// 4. Adding New Properties
person.nationality = "American";
console.log(person.nationality); // American

// 5. Deleting Properties
delete person.isEmployed;
console.log(person.isEmployed); // undefined

// 6. Checking for Property Existence
console.log("age" in person); // true
console.log(person.hasOwnProperty("salary")); // false

// 7. Looping Through an Object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 8. Object Methods
console.log(person.getFullName()); // John Doe

// 9. Object Destructuring
const { firstName, age, address: { city } } = person;
console.log(firstName, age, city); // John 31 New York

// 10. Object Spread Operator
const updatedPerson = { ...person, age: 32, gender: "male" };
console.log(updatedPerson);

// 11. Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person)); // ["firstName", "lastName", "age", "hobbies", "address", "getFullName", "nationality"]
console.log(Object.values(person)); // Values of the object
console.log(Object.entries(person)); // [["firstName", "John"], ["lastName", "Doe"], ...]

// 12. Merging Objects
const additionalInfo = { salary: 50000, isMarried: false };
const mergedPerson = { ...person, ...additionalInfo };
console.log(mergedPerson);

// 13. Freezing and Sealing Objects
Object.freeze(person);
person.age = 40; // This will not work as the object is frozen
console.log(person.age); // 31

const sealedPerson = Object.seal({ name: "Alice", age: 25 });
sealedPerson.age = 26; // Allowed
delete sealedPerson.name; // Not allowed
console.log(sealedPerson);

// 14. Creating Objects with Constructor Function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1);

// 15. Creating Objects with Classes
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
const dog = new Animal("Buddy", "Dog");
dog.speak(); // Buddy makes a noise.

// 16. Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 4, c: 5 }
console.log(target); // { a: 1, b: 4, c: 5 } (target is also modified)

// 17. Singleton Object
const Singleton = (function () {
    let instance;

    function createInstance() {
        return { name: "SingletonInstance" };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // true (both are the same instance)

// Example of Object Destructuring
const product = {
    id: 101,
    name: "Laptop",
    price: 1500,
    specs: {
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD"
    }
};

const { name, price, specs: { processor, ram } } = product;
console.log(`Product: ${name}, Price: $${price}, Processor: ${processor}, RAM: ${ram}`);
// Output: Product: Laptop, Price: $1500, Processor: Intel i7, RAM: 16GB