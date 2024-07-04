const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your age: ', (age) => {
    let a = Number.parseInt(age);
    console.log(a);

    if (a > 0 && a != 18) {
        console.log("valid");
    } else if (a == 18) {
        console.log("voter");
    } else {
        console.log("invalid");
    }


    // ternary opertor
    console.log("you can", a<18? "not vote ": "vote");

    rl.close();
});
