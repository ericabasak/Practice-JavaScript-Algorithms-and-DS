// linear Search practice problem

// this function accepts an array and a value
// loop through the array and check if the current array
// element is equal to the value. if it is, return he index
// at which the element is found. if the value is never found,
// return -1

// my solution
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]
  }
}


// a correct solution
// for time complexity, O(n) as (n) grows so does the length of time
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

linearSearch([44, 7, 51, 12], 12)