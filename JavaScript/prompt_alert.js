// let a = prompt("enter your age");
// a =Number.parseInt(a)
// console.log(a);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your age: ', (age) => {
  let a = Number.parseInt(age);
  console.log(a);
  rl.close();
});