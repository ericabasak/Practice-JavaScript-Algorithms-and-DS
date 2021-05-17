// frequency counter problem
// write a function called same which accepts two arrays.
// the function should return true if every value in the array
// has its corresponding value squared in the second array.
// the frequency of values must be the same.


// OPTION 1 
function same(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true;
}

console.log(same())

// O(Nsquared)

// OPTION 2
function same(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1){
    frequencyCounter1[arr1] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2){
    frequencyCounter2[arr2] = (frequencyCounter2[val] || 0 ) + 1
  }
  for (let key of frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
}

// frequency counter again
function same(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false
  }

  let counter1 = {}
  let counter2 = {}

  for(let val of arr1){
    counter1[val] = (counter[val] || 0) + 1
  }

  for(let val of arr2){
    counter2[val] = (counter2[val] || 0) + 1
  }

  for(let key in counter1){
    if(!(key ** 2 in counter2)) {
      return false
    }
    if(counter2[key ** 2] !== counter1[key]){
      return false
    }
  }
  return true
}
console.log(same([1,2,3], [1,9,4]))

// same as above
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  for (let i = 0; i > arr1.length; i++){
    let bestIndex = arr2.indexOf(arr1[i] ** 2)
    if(bestIndex === -1){
      return false
    }
    arr2.splice(bestIndex, 1)
  }
  return true
}

