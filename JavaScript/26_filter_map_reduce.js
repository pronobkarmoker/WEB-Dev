
// 1. Filter: Get numbers greater than 3
const numbers = [1, 2, 3, 4, 5];
const greaterThanThree = numbers.filter(num => num > 3);
console.log(greaterThanThree); // Output: [4, 5]

// 2. Map: Convert numbers to their string representation
const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers); // Output: ["1", "2", "3", "4", "5"]

// 3. Reduce: Find the maximum number
const maxNumber = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log(maxNumber); // Output: 5

// Intermediate Examples

// 4. Filter: Get objects with a specific property value
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const adults = users.filter(user => user.age >= 30);
console.log(adults); // Output: [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

// 5. Map: Extract names from an array of objects
const names = users.map(user => user.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

// 6. Reduce: Group items by a property
const groupedByAge = users.reduce((group, user) => {
    const ageGroup = user.age >= 30 ? "30+" : "Under 30";
    if (!group[ageGroup]) group[ageGroup] = [];
    group[ageGroup].push(user);
    return group;
}, {});
console.log(groupedByAge);
// Output: { "Under 30": [{ name: "Alice", age: 25 }], "30+": [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }] }

// Advanced Examples

// 7. Filter + Map: Get squared values of even numbers
const squaredEvens = numbers.filter(num => num % 2 === 0).map(num => num * num);
console.log(squaredEvens); // Output: [4, 16]

// 8. Reduce: Flatten a nested array
const nestedArray = [[1, 2], [3, 4], [5]];
const flattenedArray = nestedArray.reduce((flat, current) => flat.concat(current), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]

// 9. Filter + Map + Reduce: Calculate the total price of items in stock
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 700, inStock: true }
];
const totalInStock = products
    .filter(product => product.inStock)
    .map(product => product.price)
    .reduce((total, price) => total + price, 0);
console.log(totalInStock); // Output: 1700

// 10. Reduce: Count occurrences of items in an array
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
console.log(fruitCount); // Output: { apple: 3, banana: 2, orange: 1 }