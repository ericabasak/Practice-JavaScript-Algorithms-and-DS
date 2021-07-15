// for loop --> iterates over a block of code a number of times

    for(statement 1; statement 2; statement 3){
      // block of code here
    }

// print all numbers up to 10
// function displayNums(){
//   for(let n = 0; n < 10; n++){
//     console.log(n)
//   }
// }
// displayNums();




// for/in loop --> iterates over the properties of an object

    for(key in object){
      // block of code here
    }

// const animal = {
//   type:"bear", 
//   color:"brown", 
//   age:4
// };

// let str = "";
// for(let x in animal){
//   str += animal[x] + " ";
// }





// for/of loop --> iterates over the values of an object

    for(variable of iterable){
      // block of code here 
    }

// const animals = ["zebra", "tiger", "fox"];

// let str = "";
// for(let x of animals){
//   str += x + " ";
// }






// while loop --> iterates over a block of code while a condition is true

    while(condition){
      //  block of code to be executed
    }


let num = 0
while(num <= 10) {
    console.log(num)
    num = num + 2
}


let n = 0
while(n <= 100) {
    console.log(n)
    n = n + 1
}








// do/while loop --> also iterates over a block of code while a condition is true

    do{
      // block of code to be executed
    }
    while(condition)

let n = 0
do {
    console.log(n)
    n = n + 1
} while(n <= 100)

let num = 0;
do{
  console.log(num);
  num = num + 1;
} while(num < 10);