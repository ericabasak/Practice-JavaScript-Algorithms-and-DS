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


// again
function countUniqueValues(arr){
  let i = 0;
  for (let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([0,9]))
console.log(countUniqueValues([0,9,22]))

// again

// function uniqueObj(arr){
//   var counts = {};
//   for (var i = 0; i < arr.length; i++) {
//       counts[arr[i]] = 1 + (counts[arr[i]] || 0);
//   }
// }
// console.log(uniqueObj([0,9]))
// console.log(uniqueObj([0,9,22]))

// again
function uniqueValues(arr) {
  if(arr.length === 0) return false;
  let i = 0;
  for (let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
      console.log(i,j);
    }
  }
  // return i + 1;
}
console.log(uniqueValues([1,2]))
console.log(uniqueValues([2,2]))
console.log(uniqueValues([9,11,11,39]))
console.log(uniqueValues([-9, 8, 22,72]))

// console.log(uniqueValues([2,5,5,6,33]))
// console.log("--------------------------")
// console.log(uniqueValues([-1,0,8,22]))
// console.log("-------------------------")
// console.log(uniqueValues([1,2]))
// console.log("-------------------------")

