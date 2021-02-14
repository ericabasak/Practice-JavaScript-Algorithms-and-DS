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
  let middle = Math.floor((begin + end) / 2);
  // console.log(begin, middle, end);
  while(arr[middle] !== val && begin <= end) {
    if (val < arr[middle]) {
      end = middle -1;
    } else {
      begin = middle + 1;
    }
    middle = Math.floor((being + end) / 2);
  }
  if(arr[middle] === val) {
    return middle;
  }
  return -1;
};

binarySearch([1,4,5,9,11], 5)

// a solution like above but a bit shorter
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end)/ 2);
  while(arr[middle] !== elem && start <= end) {
    if(elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor(start + end)/ 2;
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([1,4,5,9,11], 5)