// bubble sort
// insertion sort
// selection sort

// javascript built in sort method
// Colt Steele's Udemy problem
// how can there be two parameters but one array? I feel like there is disconnect
function numCompare(num1, num2){
  return num1 - num2;
}
[2,4,7,6,8].sort(numCompare)
// [2, 4, 6, 7, 8]

function numCompare(num1, num2){
  return num2 - num1;
}
[2,4,7,6,8].sort(numCompare)
// [8, 7, 6, 4, 2]


function strCompare(str1, str2){
  return str1.length - str2.length;
}
["bottle", "can", "milk", "pacifer"].sort(strCompare)
// ["can", "milk", "bottle", "pacifer"]

function strCompare(str1, str2){
  return str2.length - str1.length;
}
["bottle", "can", "milk", "pacifer"].sort(strCompare)
// ["pacifer", "bottle", "milk", "can"]


// bubble sort
//  i.e. [5,2,8,0,3,16]
function bubbleSort(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0 + i; j < arr.length; j++){
      if(arr[i] > arr[j+1]){
        // swapping
        temp = arr[i];
        arr[i] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5,2,8,0,3,16]));
console.log(bubbleSort([3,9,71,13,55,82,99]));

// bubble sort again
// sorting array
function bubbleSort(arr){
  for(let i = 0;i < arr.length; i++){
    for(let j = 0 + i; j < arr.length; j++){
      if(arr[i] > arr[j+1]){
        temp = arr[i];
        arr[i] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([9,7,4,2,6]));
console.log(bubbleSort([0,4,8,1,2]));

// another version
function bubbleSort(arr){
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      console.log(arr, arr[i], arr[j+1])
      if(arr[j] > arr[j + 1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
    console.log("one pass complete")
  }
  return arr;
}
console.log(bubbleSort([9,7,4,2,6]));

// ES6 version bubble sort
function bubbleSort(arr){
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5,2,8,0,3,16]));
console.log(bubbleSort([3,9,71,13,55,82,99]));

// i'm most comfortable sorting this way
function bubbleSort(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([0,4,2,8,4]));
console.log(bubbleSort([3,4,0,88,82,99]));


// **********************************************************
// selection sort
// smallest number is placed at beginning of array

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
console.log(selectionSort([0,9,7,4,2,8,4]));

// selection sort again
function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    lowest = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[lowest]){
        lowest = j;
      }
    }
    if(i !== lowest){
      // console.log(i, lowest);
      temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([83,22,43,87,2,11]));


// again with es6 version
function selectionSort(arr){
  const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
  for(let i = 0; i < arr.length; i++){
    let lowest = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[lowest] > arr[j]){
        lowest = j;
      }
    }
    if(i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}
console.log(selectionSort([19,18,17,3,2,5]));

// again
function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    lowest = i;
    for(let j = i + 1; j < arr.length; j++){
      // I get so confused at to use the greater than OR less than sign here
      // how can I get better with this?
      if(arr[lowest] > arr[j]){
        lowest = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  } 
  return arr;
}
console.log(selectionSort([19,18,17,3,2,5]));

// ************************************************************
// insertion sort
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}
console.log(insertionSort([3,2,1,0,9,2,5,8]));

// a diff version of insertion sort
let insertionSort = (inputArr) => {
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
      let key = inputArr[i];
      let j = i - 1;
      while (j >= 0 && inputArr[j] > key) {
          inputArr[j + 1] = inputArr[j];
          j = j - 1;
      }
      inputArr[j + 1] = key;
  }
  return inputArr;
};

// again
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key){
      arr[j+1] = arr[j];
      j = j - 1;
    }
    arr[j+1] = key;
  }
  return arr;
}
console.log(insertionSort([3,2,1,0,9,2,5,8]));
