// linear seach problem

// this function accepts and array and a value.
// loop through the array and check the current array element is
// equal to the value. if it is, return the index at which the element
// is found. else, return -1.

function linearSearch(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1,3,6,9,11], 9))
console.log(linearSearch([1,3,6,9,11], 4))

// linear time O(n)