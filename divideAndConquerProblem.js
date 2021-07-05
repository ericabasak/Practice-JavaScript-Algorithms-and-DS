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




// divide and conquer AKA binary search problem
// returns the position of the element to find or -1 if not found in the array

[1,2,3,4]

function find(arr, num){
  for(let n = 0; n < arr.length; n++){
    if(arr[n] === num){
      return n;
    }
  } 
  return -1;
}
console.log(find([1,2,3,4,5], 8));
console.log(find([1,2,3,4,5], 2));

function find(arr, num){
  for(let n = 0; n < arr.length; n++){
    if(arr[n] === num){
      return n;
    }
  }
  return -1;
}


// Given a sorted (in ascending order) integer array nums of n elements and a 
// target value, write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
// Note:
// 1. You may assume that all elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999].

function searchNumber(nums, target){
  for(let n = 0; n < nums.length; n++){
    if(nums[n] === target){
      return n;
    }
  }
  return -1;
}
console.log(searchNumber([-1,0,3,5,9,12], 2));
console.log(searchNumber([-1,0,3,5,9,12], 9));