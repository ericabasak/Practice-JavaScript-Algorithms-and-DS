// product of array function

// write a function called productOfArray which takes in
// an array of numbers and returns the product of them all

// my solution
function productOfArray(num){
  let arr = [];
  if(num === 0) return 0;
  if(num >= 1) {
    return arr.push(num * num)
  }
}

// a correct solution
function productOfArray(arr) {
  if(arr.length === 0) {
    return 1;
  }
  return arr[0]*productOfArray(arr.slice(1));
}