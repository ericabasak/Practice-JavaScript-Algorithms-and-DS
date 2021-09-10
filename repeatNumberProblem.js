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
}