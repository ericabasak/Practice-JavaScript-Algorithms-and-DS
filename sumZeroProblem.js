// write a function called sumZero which accepts a sorted array
// of integers. the function should find the first pair 
// where the sum is equal to 0. return an array that includes
// both the values that sum to 0 or undefined if a pair does not exist.

// > greater than
// < less than

function sumZero(arr){
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3,-2,-1,0,1,9,3]))


// test case (1,2,3)
// test case(-7,-3,1,5,7)


function sumZero(arr){
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
      console.log(arr[i]);
      console.log(arr[j]);
    }
  }
}
// console.log(sumZero([-7,5,1,6,7]))
console.log(sumZero([-1,-2,0,1,2]))