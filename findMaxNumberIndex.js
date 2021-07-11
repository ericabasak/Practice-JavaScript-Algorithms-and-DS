// HOMEWORK, find max integer in array (Return its position in the array)

// given an array of positive integers find the number with the biggest value
// return the index at which the greated integer is located in the array


arr = [2,7,6,4,11,4,5,4]

// psuedocode
// go through each element in the array
// find the max integer and returns its index

// QUESTIONS
// ***************************************
// QUESTION - IF I REMOVE COUNTER IT STILL WORKS
// *****************************************
// instead if using indexOf() how does this work under the hood?

function findMaxNumberIndex(maxNumber, arr){
  // let counter = 0;
  for(let i = 0; i < arr.length; i++){
    let currentNumber = arr[i];
    if(currentNumber === maxNumber){
      // counter++;
    }
  }
  // if(counter === 0) return -1;
  return arr.indexOf(maxNumber);
}
console.log(findMaxNumberIndex(7, [2,7,6,4,11,4,5,4]));
console.log(findMaxNumberIndex(57, [2,7,6,4,11,4,5,4]));
console.log(findMaxNumberIndex(6, [2,7,6,4,11,4,5,4]));
