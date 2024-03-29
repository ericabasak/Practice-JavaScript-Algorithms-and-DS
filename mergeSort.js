// merge sort arrays
// merge two sorted arrays
// create an empty array, take look at the smallest values in each input array

function mergeArr(arr1, arr2){
  //  make variable
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    results.push(arr1[i])
    i++;
  }
  while(j < arr2.length){
    results.push(arr2[j]);
    j++;
  }
}


// merge sort function
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArr(left, right);
}