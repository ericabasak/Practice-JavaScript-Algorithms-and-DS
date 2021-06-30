// sorting

// sorting an unsorted array
function minAndRemove(arr){
  let min = arr[0];
  let minIndex = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
      minIndex = i;
    }
  }
  arr.splice(minIndex, 1);
  return min;
}

// selection sort
function selectionSort(arr){
  let newMin;
  let sorted = [];
  while(arr.length !== 0){
    newMin = minAndRemove(arr);
    sorted.push(newMin);
  }
  return newMin;
}

// another version of selection sort
function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[min] > arr[j]){
        min = j;
      }
    }
    if(min !== i){
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([8,4,33,1,0,96]))
console.log(selectionSort([823,3665,1704,96]))

// selection sort again
function selectionSort(arr){
  for(let i = 0; i <= arr.length-1; i++){
    let smallestIdx = i;
    for(let j = i; j <= arr.length-1; j++){
      if(arr[j] < arr[smallestIdx]){
        smallestIdx = j;
      }
    }
    if(arr[i] > arr[smallestIdx]){
      let temp = arr[i];
      arr[i] = arr[smallestIdx];
      arr[smallestIdx] = temp;
    }
  }
  return arr;
}

// selection sort

function selectSort(arr){
  for(let i = 0;i < arr.length; i++){
    let smallestIdx = i;
    for(let j = i; j < arr.length - 1; j++){
      if(arr[j] < arr[smallestIdx]){
        smallestIdx = j;
      }
    }
    if(arr[i] > arr[smallestIdx]){
      let temp = arr[i];
      arr[i] = arr[smallestIdx];
      arr[smallestIdx] = temp;
    }
  }
  return arr;
}

// selection sort psuedocode
// store the 1st element as the smallest value so far
// compare this item to the next item in the array until you find a smaller number
// if a smaller number is found, designate that smaller number to be the new "minumum" and continue until the end of the array
// if the  "minimum" is not the value(index) you initially began with, swap the two values
// repeat this with the next element until the array is sorted

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      } 
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([77, 3, 9, 25]))


// ES2015 syntax sort selection sort

function selectionSort(arr){
  const swap = (arr, idx1, idx2) => ((arr[idx1], arr[idx2]) = (arr[idx2], arr[idx1]));

  for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[min] > arr[j]){
        min = j;
      }
    }
    if(i !== min) swap(arr, i, min);
  }
  return arr;
}

// O(n squared) for time complexity
// as length of array grows, camparing grows, 