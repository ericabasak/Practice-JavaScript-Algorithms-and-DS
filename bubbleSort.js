// bubble sort
// many sorting algos involve some swapping
// starts by "bubbling" largest number to the end of array - opposite of selection sort

// start looping from with a variable called i at the end
// of the array towards the beginning. start in an inner loop 
// ith a variable called j from the beginning until i -1. if arr[j]
// is greater than arr[j+1], swap those two values. return the sorted array.


function bubbleSort(arr) {
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]){
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    console.log("ONE PASS COMPLETE");
  }
  return arr;
}
bubbleSort([44,9,29, 78, 13, 7])



// ES2015 bubble sort solution
function bubbleSort(arr) {
  // below is the new way of swapping things
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[indx2]] = [arr[idx2], arr[idx1]];
  }
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr;
}
bubbleSort([44, 9, 29, 78, 13, 7])
