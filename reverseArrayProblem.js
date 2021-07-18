// reverse an array
// i.e. [4,3,6,7,2,7,5,6,7,1] = [1,7,6,5,7,2,7,6,3,4]


// swap first element in array with last element in the array
// then move inward from both ends until reach center of array
// return reversed array

// QUESTIONS
// why is it that is has to start from the end of the array and work backwards


function reverseArr(arr){
  let reversed = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArr([4,3,6,7,2,7,5,6,7,1]));
console.log(reverseArr([1,2,3,4,5,6,7,8,9,10]));

// again
function reversedArr(arr){
  let reversed = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i])
  }
  return reversed;
}
console.log(reverseArr([6,3,8,9,2]));
console.log(reverseArr([10,20,30,40,50,60,70,80,90,100]));