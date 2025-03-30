// Numbers and Math in JavaScript

// 1. Number Methods
let num = 123.456;

// toString() - Converts a number to a string
console.log(num.toString()); // "123.456"

// toFixed() - Formats a number to a fixed number of decimals
console.log(num.toFixed(2)); // "123.46"

// toPrecision() - Formats a number to a specified length
console.log(num.toPrecision(5)); // "123.46"

// valueOf() - Returns the primitive value of a number
console.log(num.valueOf()); // 123.456

// isNaN() - Checks if a value is NaN
console.log(isNaN("abc")); // true

// isFinite() - Checks if a value is a finite number
console.log(isFinite(123)); // true
console.log(isFinite(Infinity)); // false

// parseInt() - Parses a string and returns an integer
console.log(parseInt("123.45")); // 123

// parseFloat() - Parses a string and returns a floating-point number
console.log(parseFloat("123.45")); // 123.45

// Number() - Converts a value to a number
console.log(Number("123")); // 123

// 2. Math Methods
// Math.PI - Returns the value of PI
console.log(Math.PI); // 3.141592653589793

// Math.round() - Rounds a number to the nearest integer
console.log(Math.round(4.7)); // 5

// Math.ceil() - Rounds a number up to the next integer
console.log(Math.ceil(4.1)); // 5

// Math.floor() - Rounds a number down to the previous integer
console.log(Math.floor(4.9)); // 4

// Math.trunc() - Returns the integer part of a number
console.log(Math.trunc(4.9)); // 4

// Math.sqrt() - Returns the square root of a number
console.log(Math.sqrt(16)); // 4

// Math.cbrt() - Returns the cube root of a number
console.log(Math.cbrt(27)); // 3

// Math.pow() - Returns the power of a number
console.log(Math.pow(2, 3)); // 8

// Math.abs() - Returns the absolute value of a number
console.log(Math.abs(-5)); // 5

// Math.min() - Returns the smallest of zero or more numbers
console.log(Math.min(1, 2, 3)); // 1

// Math.max() - Returns the largest of zero or more numbers
console.log(Math.max(1, 2, 3)); // 3

// Math.random() - Returns a random number between 0 and 1
console.log(Math.random()); // e.g., 0.123456789

// Math.log() - Returns the natural logarithm of a number
console.log(Math.log(1)); // 0

// Math.log10() - Returns the base-10 logarithm of a number
console.log(Math.log10(100)); // 2

// Math.sin() - Returns the sine of a number (in radians)
console.log(Math.sin(Math.PI / 2)); // 1

// Math.cos() - Returns the cosine of a number (in radians)
console.log(Math.cos(0)); // 1

// Math.tan() - Returns the tangent of a number (in radians)
console.log(Math.tan(Math.PI / 4)); // 1

// Math.sign() - Returns the sign of a number
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(5)); // 1

// Math.hypot() - Returns the square root of the sum of squares of its arguments
console.log(Math.hypot(3, 4)); // 5   