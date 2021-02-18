// bubble sort
// many sorting algos involve some swapping

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