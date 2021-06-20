// given an array of integers find the most repeated number
// ie. findMostRepeated([3,3,4,4,4,5,6,6,6,1,1,4,4,4,1,1,1,1,1,4,4,4,4,6])


// go through every number
// for every unique number, create new object and add the number that it occurs
// see how many times that an number repeats itself
// return the number that shows up the most
function findMostRepeated(arr) {
  if(arr.length == 0) return null;
  let obj = {};
  let maxElement = arr[0];
  let maxCount = 1;
  for(let i = 0; i < arr.lenght; i++){
    let el = array[i];
    if(obj[el] == null){
      obj[el];
    } else {
      obj[el]++;
      if(obj[el] > maxCount)
      maxElement = el;
      maxCount = obj[el];
    } 
  }
  return maxElement;
}
console.log(findMostRepeated([3,3,4,4,4,5,6,6,6,1,1,4,4,4,1,1,1,1,1,4,4,4,4,6]));
