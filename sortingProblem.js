// sorting

// sorting and unsorted array
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
