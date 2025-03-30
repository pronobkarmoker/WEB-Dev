/**
 * A variable representing a name.
 * @type {string}
 * @example
 * let name = "shuvo"; // A simple string
 * let greeting = "Hello, World!"; // A string with punctuation
 * let multiline = `This is
 * a multiline
 * string.`; // A template literal for multiline strings
 * let escaped = "He said, \"Hello!\""; // A string with escaped characters
 * let unicode = "😊"; // A string containing a Unicode character
 */
let name = "shuvo"
console.log(name)
console.log(name.length)

let nm = 'pronob'
console.log(nm)
console.log(nm.length)


for (let index = 0; index < name.length; index++) {
    console.log(name[index]);
}
// Example of various string methods in JavaScript

// 1. charAt() - Returns the character at a specified index
console.log(name.charAt(0)); // Output: 's'

// 2. charCodeAt() - Returns the Unicode of the character at a specified index
console.log(name.charCodeAt(0)); // Output: 115

// 3. concat() - Joins two or more strings
console.log(name.concat(" ", nm)); // Output: 'shuvo pronob'

// 4. includes() - Checks if a string contains a specified value
console.log(name.includes("hu")); // Output: true

// 5. endsWith() - Checks if a string ends with a specified value
console.log(name.endsWith("vo")); // Output: true

// 6. indexOf() - Returns the index of the first occurrence of a specified value
console.log(name.indexOf("u")); // Output: 2

// 7. lastIndexOf() - Returns the index of the last occurrence of a specified value
console.log(name.lastIndexOf("u")); // Output: 3

// 8. match() - Searches a string for a match against a regular expression
console.log(name.match(/u/g)); // Output: ['u', 'u']

// 9. repeat() - Returns a new string with a specified number of copies
console.log(name.repeat(2)); // Output: 'shuvoshuvo'

// 10. replace() - Replaces a specified value with another value
console.log(name.replace("shuvo", "Shuvo")); // Output: 'Shuvo'

// 11. search() - Searches a string for a specified value and returns its position
console.log(name.search("u")); // Output: 2

// 12. slice() - Extracts a part of a string and returns it as a new string
console.log(name.slice(1, 4)); // Output: 'huv'

// 13. split() - Splits a string into an array of substrings
console.log(name.split("")); // Output: ['s', 'h', 'u', 'v', 'o']

// 14. startsWith() - Checks if a string starts with a specified value
console.log(name.startsWith("sh")); // Output: true

// 15. substring() - Extracts characters between two indices
console.log(name.substring(1, 4)); // Output: 'huv'

// 16. toLowerCase() - Converts a string to lowercase
console.log(name.toLowerCase()); // Output: 'shuvo'

// 17. toUpperCase() - Converts a string to uppercase
console.log(name.toUpperCase()); // Output: 'SHUVO'

// 18. trim() - Removes whitespace from both ends of a string
let padded = "  hello  ";
console.log(padded.trim()); // Output: 'hello'

// 19. trimStart() - Removes whitespace from the start of a string
console.log(padded.trimStart()); // Output: 'hello  '

// 20. trimEnd() - Removes whitespace from the end of a string
console.log(padded.trimEnd()); // Output: '  hello'

// 21. valueOf() - Returns the primitive value of a string object
console.log(name.valueOf()); // Output: 'shuvo'