// binary search problem

// this function accepts a sorted array and value.
// create a left pointer at the beginning of the array, and
// a right pointer at the end of the array. while the left pointer comes
// before the right pointer: create a pointer in the middle, if you find the value
// you want, return the index. if the value is too small, move the left pointer
// up. if the value is too big, move the right pointer down. if you never
// find the value, return -1.

function binarySearch(arr, val) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1; j++){
      let left
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 10))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 12))