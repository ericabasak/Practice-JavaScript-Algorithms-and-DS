// given an array of numbers, find the position of a given number

// psuedocode 
// go through each element of the array one at a time and see if the number matches
// return the index of that element

function findNum(elementToFind, arr){
  // is the below code necessary? let i = 0?
  // let i = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === elementToFind){
      return i;
    }
  }
  return -1;
}
console.log(findNum(91, [1,2,5,77,91,123]));
console.log(findNum(11, [1,2,5,77,91,123]));
console.log(findNum(140, [28, 31,59, 67, 99, 140]));

// again
// given an array and a number, find the position of the number and return the index
// if the number does not exist, then return -1
function findIndexOfNum(numPosition, arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === numPosition){
      return i;
    }
  }
  return -1;
}
console.log(findIndexOfNum(91, [1,2,3,4]));
console.log(findIndexOfNum(1, [0,1,3,5,9,13]));
console.log(findIndexOfNum(140, [28, 31,59, 67, 99, 140]));