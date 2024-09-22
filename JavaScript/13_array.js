let a = [1,2,3,4,5,6,7, false , "shuvo"];
console.log(a)

for (let index = 0; index <= a.length; index++) {
    
    console.log(a[index])
}

a[9] = "PRONOB";  // ADD
a[1] = 23  // CNG
for (let index = 0; index < a.length; index++) {
    
    console.log(a[index])
}

console.log(typeof a)