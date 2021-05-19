// this pattern involves dividing a data set into smaller 
// chunks and repeating a process with a subset of data.

// this pattern can tremendasouly reduce time complexity.

// given a sorted array integers, write a function called search,
// that accepts a value and returns the index where the value passed
// to the function is located. else return -1.

// basically binary search
// this array has to be sorted

search([1,2,3,4,5],2)

// find edge cases first
function search(arr, num){
  for(let i = 0; i < arr.length; i++){
    if(num !== arr[i]){
      arr[i]++;
    } else {
      return -1;
    }
  }
}
console.log(search([1,2,3,4,5],2));

// again
function search(arr, num){
  for(let i = 0; i < arr.length; i++){
    if(num === arr[i]){
      return i;
    } else {
      arr[i]++;
    }
  }
  return -1;
}
console.log(search([1,2,3,4,5],2));
console.log(search([1,2,3,4,5],1));
console.log(search([1,2,3,4,5],4));
console.log(search([1,2,3,4,5],8));

// again
function search(arr, num){
  for(let i = 0; i < arr.length; i++){
    if(num === arr[i]){
      return i;
    }
  }
  return -1;
}
console.log(search([1,2,3,4,5],1));
console.log(search([1,2,3,4,5],4));




