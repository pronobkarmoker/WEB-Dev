const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number: ', (number) => {
  let a = Number.parseInt(number);
  
  let i = 0;
  while(i<a){
    console.log(i);
    i++;
  }
  
  rl.close();
});