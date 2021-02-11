// binary search problem

// write a function called binarySeach which accepts a sorted array
// and a value and returns the index at which the value exists.
// otherwise return -1.

// my solution
function binarySearch(arr, val) {
  if(arr.length === 0) {
    // some code
    for(let i = 0; i < arr.length; i++){

    }
    return arr[i]
  } 
  return -1;
}

binarySearch([1,4,5,9,11], 5)


// a correct solution
function binarySearch(arr, val) {
  let begin = 0;
  let end = arr.length - 1;
  let middle = (begin + end) / 2;
}

binarySearch([1,4,5,9,11], 5)