// map

let arr =  [ 44, 55,88]
let a = arr.map((value , index, array) =>{  // map new array dey
    console.log(value, index , array)
    return value +1 ;
})
console.log(arr)
console.log(a)

// filter

let arr2 = [45,86,9,77,12,0,4]
let b = arr2.filter((val)=>{
    return val <10
})
console.log(b)

// reduce

let arr3 = [1,2,3,4,5,6,7,8,9,10]
let c = arr3.reduce((x, y )=>{
    return x+y
})
console.log(c)
