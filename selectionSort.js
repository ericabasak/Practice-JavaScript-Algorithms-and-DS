// selection sort
// starts by moving smallest number to beginning of the array - opposite of bubble sort

// store the first element as the smallest value youve seen so far
// compare this itemto the next item in the array until you 
// find a smaller number. if a smaller number is found, designate that smaller
// number to be the new minimum and continue to the end of the array.
// if the minimum is not the value(index) you initially begun with,swap the two values.
// repeat this with the next element until the array is sorted.

function selectionSort(arr) {
  for (let i = 0; j < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // here's the swapping part
    if(i !== lowest){
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

selectionSort([34,22,10,19,17])

// ES15 syntax for same problem as above
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for(let i = 0; i < arr.length; i++){
    let lowest = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if(i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

selectionSort([0,2,34,22,10,19,17]);

