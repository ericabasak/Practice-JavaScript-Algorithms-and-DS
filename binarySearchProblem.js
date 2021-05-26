// binary search problem

// this function accepts a sorted array and value.
// create a left pointer at the beginning of the array, and
// a right pointer at the end of the array. while the left pointer comes
// before the right pointer: create a pointer in the middle, if you find the value
// you want, return the index. if the value is too small, move the left pointer
// up. if the value is too big, move the right pointer down. if you never
// find the value, return -1.

// first attempt
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

// solution
function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  console.log(start, middle, end);

  while(arr[middle] !== val){
    if(val < arr[middle]){
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
  }
  return middle;
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 10));
console.log(binarySearch([6,9,12,20], 20));



// again
// ask yourself --
// what are the inputs?
// what are the outputs?
function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  let middle = Math.floor((min + max) / 2);
  while(arr[middle] !== val && min <= max){
    if(val < arr[middle]){
      max = middle -1;
    } else {
      min = middle + 1;
    }
    middle = Math.floor((min + max) / 2);
  }
  return middle;
}
console.log(binarySearch([1,2,3,4,5], 2));
console.log(binarySearch([1,2,3,4,5], 5));
console.log(binarySearch([33,44,58,68,99], 5));