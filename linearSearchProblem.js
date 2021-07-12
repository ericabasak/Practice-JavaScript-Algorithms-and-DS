// linear seach problem
// DOES NOT NEED TO BE SORTED ARRAY

// this function accepts and array and a value.
// loop through the array and check the current array element is
// equal to the value. if it is, return the index at which the element
// is found. else, return -1.

// function linearSearch(arr, val){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === val){
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([1,3,6,9,11], 9))
// console.log(linearSearch([1,3,6,9,11], 4))

// big(O) for linearSearch is O(N)
// linear time O(n)

// ************************************************
// write a function called linearSearch , which accepts an array and a value
//  and returns the index at which the value exists or return -1 if it does not exist
// DO NOT USE INDEXOF() method
// big(O) for linearSearch is O(N)



function linearSearch(arr, val){
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === val){
          return i;
      }
  }
  return -1;
}
console.log(linearSearch([10, 15,20,25], 25));
console.log(linearSearch([10, 15,20,25,30,35], 15));
console.log(linearSearch([10, 15,20,25], 13));


// again
// big(O) for linearSearch is O(N)
// DOES NOT NEED TO BE SORTED ARRAY


function linearSearch(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 13));
console.log(linearSearch([29,0,1,44,89,3434, 13], 13));

