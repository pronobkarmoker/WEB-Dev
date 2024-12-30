let num = [2 , 4 , 5, 6, 7, 10 ,66]

// foreach loop
num.forEach(element => {
    console.log(element* element *element)
});


//Arrray.form
let name = "PRONOB"
let arr = Array.from(name)
console.log(arr)

//for of
for(i of num){
    console.log(i); 
}

// for in 
for(item in num ){
    console.log(item) // index
}


