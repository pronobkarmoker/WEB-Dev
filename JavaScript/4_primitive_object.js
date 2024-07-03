// 7 primitive data type 
// nn bb ss u

let a = null;
let b = 345;
let c = true;
let d = BigInt("23456") + BigInt("3");
let e = "shuvo";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);


// nonPrimitive
// Objects in JS (key value pairs , mapping )

const item = {
    "shuvo": true,
    "toma": false,
    "pronob": 567,
    "purbita": undefined
}
console.log(item["shuvo"]);
console.log(item["toma"]);
console.log(item["pronob"]);
console.log(item["purbita"]);