let num = [1,2,3,4,5,6]
console.log(num);

// join
let c = num.join("->");
console.log(c);

// pop
num.pop();
console.log(num);

// push
num.push(10);
console.log(num)

// shift  -> remove element from the start of the array
let r = num.shift()
console.log(r, num);

//unshift -> add first and return the new array length
let a = num.unshift(99)
console.log(a, num)

// delete 
console.log(num.length)
delete num[1]
console.log(num)
console.log(num.length)

// concate 
let num2 = [12,13,14,15,16,11,19,18]
let newArray = num.concat(num2)
console.log(newArray) 

// sort method
let num4 = [122,513,146,15,16,11,19,18]
num4.sort()
console.log(num4)

//