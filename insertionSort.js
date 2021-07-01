// insertion sort practice problem

// insertion sort psuedocode
// start by picking the second element in the array.
// now compare the second element with the element before it and swap if necessary.
// continue to the next element and if it is not in the correct order, iterate through the sorted portion to place the element in the correct order.
// repeat until the array is sorted.

function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort([7,99,39,0,12,29]));

// insertion sort
let insertionSort = (arr) => {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = key;
  }
  return arr;
};
console.log(insertionSort([7,99,39,0,12,29]));
