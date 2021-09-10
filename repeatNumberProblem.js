// given an array of numbers, find the most repeated number and return it
// ie. [3,4,5,4,4,4,1,1,6,6,6,1,1,1,4,4,4,4,4] , in this example the most repeated number is 4

// my first attempt
function numRepeats(arr){
  let currentNum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i])
      let currentNum = arr[i];
      arr[i]++
  } 
}
console.log(numRepeats());

// psuedocode
// got through each number in the array starting from left to right.
// instantiate an object
// check to see whether the number exists
// if the number does not exist, create a new key value pair
// if the number does exist, increment the value by 1
// find the key with the largest value
// return the key

// second attempt
function mostRepeatedNum(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    let elem = arr[i];
    if(obj[elem] === undefined){
      obj[elem] = 1;
    } else {
      obj[elem += 1]
    }
  }
  let maxValue = 0;
  let maxKey;

  Object.keys(obj).forEach(key => {
    let value = obj[key];
    if(value > maxValue){
      maxValue = value;
      maxKey = key;
    }
  })
  return maxKey;
}

// again
// given an array of numbers, find the most repeated number and return it
// ie. [3,4,5,4,4,4,1,1,6,6,6,1,1,1,4,4,4,4,4] in this example the most repeated number is 4

let obj = { key : value }
          { obj[arr[i]] === undefined }
          { 3   : undefined }

function mostRepeatedNumber(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] === undefined){

    }
  }
}