// sliding window problem
// this pattern involves creating a window which can be an array or
// number from one position to another.
// depending on a certain condition, the window either increases
// or closes(and new window created).
// Very useful for keeping track of a subset of data in an array or string.


// write a function called maxSubarraySum which accepts an array
// of integers and a number called n. the function should calculate
// the maximum sum of n consecutive elements in an array.

function maxSubarraySum(arr, num){
  // write edge case first
  // the num can not be greater than the length of the array
  if(num > arr.length){
    return null;
  }
  // use Infinity because what is there are -negative numbers and not just positive numbers
  // let max = -Infinity
  let max = 0;
  for(let i = 0; i < arr.length - num + 1; i++){
    let temp = 0;
    for(let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if(temp > max){
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySum([2,4,55,73],2))
console.log(maxSubarraySum([2,4,55,73],3))
console.log(maxSubarraySum([2,4,55,73],4))

// again
function maxSubarraySum(arr, num) {
  if(num > arr.length){
    return null;
  }
  let max = 0;
  for(let i = 0; i < arr.length - num + 1; i++){
    let temp = 0;
    for(let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if(temp > max){
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySum([4,7,3,9,5,44,3,93,46], 3))
console.log(maxSubarraySum([4,7], 3))


// again
function maxSubarraySum(arr, num) {
  if(num > arr.length){
    return null;
  }

  let max = 0;
  for(let i = 0; i < arr.length - num + 1;i++){
    let temp = 0;
    for(let j = 0; j < num; j++){
      temp += arr[i+j];
    }
    if(temp > max){
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySum([4,7], 3))


// again
function maxSubarraySum(arr, num) {
  if(num > arr.length){
    return null;
  }
  let max = 0;
  for(let i = 0; i < arr.length - num + 1; i++){
    let temp = 0;
    for(let j = 0; j < num; j++){
      temp += arr[i+j];
    }
    if(temp > max){
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySum([1,2,3,4,5,6,7,8,9,10], 3))

// again
function maxSubarraySum(arr, num){
  if(num > arr.length){
    return null;
  }
  let max = 0;
  for (let i = 0; i < arr.length - max + 1; i++){
    let temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i+j];
    }
    if(temp > max){
      max = temp;
    }
  }
  return max
}