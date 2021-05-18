// implement a function called countUniqueValues
// which accepts a sorted array, and counts the unique values 
// in an array. there can be negative values in the array, but it will
// be sorted.

// my solution that doesnt work
function countUniqueValues(arr) {
  for (let i = 0; i > arr.length; i++){
    let uniqueVal = arr[i];
    return uniqueVal += 1;
  }
}

console.log(countUniqueValues([8,-4, 0,0,5,5,5]))

// a possible solution
function countUniqueValues(arr) {
  if(arr.length === 0) return 0;
  var i = 0;
  for (let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValues([1,1,2,3,3,3,4]))
console.log(countUniqueValues([]))


