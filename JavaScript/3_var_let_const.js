var a = 9; // globally


console.log("For VAR");
var b ="shuvo";
{
    var b = 'this'
    console.log(b);// this
}
console.log(b); //this



console.log("For LET");
let c= "shuvo";
{
    let c = 'this'
    console.log(c);// this
}
console.log(c);// shuvo

const author = "shuvo";
console.log("const can not be changed");