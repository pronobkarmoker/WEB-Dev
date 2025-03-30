// Basic to Advanced Examples of Date and Time in JavaScript

// 1. Create a new Date object
let now = new Date();
console.log("Current Date and Time:", now);
console.log("Current Date and Time:", now.toDateString(), now.toTimeString() , now.toLocaleString());

// 2. Create a Date object with specific date and time
const specificDate = new Date(2023, 9, 15, 10, 30, 0); // Month is 0-indexed
console.log("Specific Date and Time:", specificDate.toDateString());

// 3. Create a Date object from a timestamp
const timestampDate = new Date(1672531200000); // Milliseconds since Jan 1, 1970
console.log("Date from Timestamp:", timestampDate);

// 4. Create a Date object from a date string
const stringDate = new Date("2023-10-15T10:30:00");
console.log("Date from String:", stringDate);

// 5. Get individual components of a date
console.log("Year:", now.getFullYear());
console.log("Month (0-indexed):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day of the Week:", now.getDay()); // 0 = Sunday, 6 = Saturday
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

// 6. Get timestamp (milliseconds since Jan 1, 1970)
console.log("Timestamp:", now.getTime());

// 7. Get UTC components
console.log("UTC Year:", now.getUTCFullYear());
console.log("UTC Month:", now.getUTCMonth());
console.log("UTC Date:", now.getUTCDate());
console.log("UTC Hours:", now.getUTCHours());

// 8. Set individual components of a date
const mutableDate = new Date();
mutableDate.setFullYear(2025);
mutableDate.setMonth(11); // December
mutableDate.setDate(25);
mutableDate.setHours(15);
mutableDate.setMinutes(45);
console.log("Modified Date:", mutableDate);

// 9. Date comparison
const date1 = new Date("2023-10-15");
const date2 = new Date("2023-10-16");
console.log("Is date1 before date2?", date1 < date2);
console.log("Is date1 equal to date2?", date1.getTime() === date2.getTime());

// 10. Formatting dates
console.log("Locale String:", now.toLocaleString());
console.log("Locale Date String:", now.toLocaleDateString());
console.log("Locale Time String:", now.toLocaleTimeString());
console.log("ISO String:", now.toISOString());
console.log("Date String:", now.toDateString());
console.log("Time String:", now.toTimeString());

// 11. Parsing dates
const parsedDate = Date.parse("2023-10-15T10:30:00");
console.log("Parsed Timestamp:", parsedDate);

// 12. Working with time zones
const options = { timeZone: "America/New_York", timeZoneName: "short" };
console.log("Date in New York:", now.toLocaleString("en-US", options));

// 13. Measuring time differences
const start = new Date();
for (let i = 0; i < 1e6; i++) {} // Simulate some work
const end = new Date();
console.log("Time taken (ms):", end - start);

// 14. Custom date formatting
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
console.log("Custom Formatted Date:", formatDate(now));

// 15. Adding/Subtracting time
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7); // Add 7 days
console.log("Future Date:", futureDate);

const pastDate = new Date();
pastDate.setHours(pastDate.getHours() - 5); // Subtract 5 hours
console.log("Past Date:", pastDate);

// 16. Using Intl.DateTimeFormat for advanced formatting
const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/New_York",
});
console.log("Formatted with Intl.DateTimeFormat:", formatter.format(now));