// given an array and a number, count how many times the given number 
// repeats in the array. return -1 if the number is not in the array
// ie. numOfRepetitions(4, [2,7,6,4,2,4,5,4]), answer is 3
// ie. numOfRepetitions(11, [2,7,6,4,2,4,5,4]), answer is -1

// is this frequency counter???


// pseudocode
// in order to see how often a given number is repeated within the array,
// i would go through each element in the array.
// i'd create like a container or a tick on the side to 
// indicate how often i saw that element. 
function numOfRepetitions(num, arr){
  let obj = {};
  for(let n = 0; n < arr.length; n++){
    if(arr[i] !== num){

    } else if {
      if(arr[i] === num) {
        arr.push(obj)
      }
    } else {
      return -1
    }

  }
  return obj;
}
console.log(numOfRepetitions(11, [2,7,6,4,2,4,5,4]));
console.log(numOfRepetitions(4, [2,7,6,4,2,4,5,4]));