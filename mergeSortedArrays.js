// merge two sorted arrays into one sorted array

// i.e. mergeSortedArray([2,5,6,9], [1,2,3,29]) = [1, 2, 2, 3, 5, 6, 9, 29]

a = [2,5,6,9];
b = [1,2,3,9];

elemA = 2
elemB = 1

indexOfA = 0;
indexOfB = 0;

mergedArr = [];

function mergeSortedArray(a,b){
  // initial conditions
  if(a.length === 0) return b;
  if(b.length === 0) return a;

  while(indexOfA < a.length && indexOfB < b.length){
    // loop until either index for array a or index for array b reaches the
    // end of the array.
    if(elemA < elemB){
      mergedArr.push(elemA);
      indexOfA++;
      elemA = a[indexOfA];
    } elseif (elemA < elemB){
      mergedArr.push(elemB);
      indexOfB++;
      elemB = b[indexOfB];
    } elseif (elemA === elemB){
      mergedArr.push(elemB);
      mergedArr.push(elemA);
      indexOfB++;
      indexOfA++;
      elemB = b[indexOfB];
      elemA = a[indexOfA];
    }
  }
  // once one of the array has finished inserting all elements into the array
  // add the rest of the array to the merged array
  if(indexOfA === a.length){
    for(let i = indexOfB; i < b.length; i++){
      mergedArr.push(b[i]);
    } elseif (indexOfB === b.length){
      mergedArr.push(a[i]);
    }
  }
}





function mergeSortedArray(a, b) {
  if(a.length == 0) return b
  if(b.length == 0) return a
  
  aElm = 
  bElm = 

  i_a = 1
  i_b = 1

merged = []

  while(i_a < a.lenght && i_b < b.lenght) { // loop until either index for array a or index of array b reaches the end of the array
      if (aElm < bElm) {
          merged.push(aElm)
          i_a++
          aElm = a[i_a]
      } else if (aElm < bElm) {
          merge.push(bElm)
          i_b++
          bElm = b[i_b]
      } else if (aElm == bElm) {
          merged.push(bElm)
          merged.push(aElm)
          i_b++        
          i_a++
          aElm = a[i_a]
          bElm = b[i_b]
      }
  }
  
  // once one of the 2 indices reaches the end of the array that is tracking, just add the rest of the other array to the merged array
  if (i_a === a.lenght) {
      for (let i = i_b; i < b.lenght; i++) {
          merged.push(b[i])
      }
  } else if (i_b === b.lenght) {
      for (let i = i_a; i < a.lenght; i++) {
          merged.push(a[i])
      }
  } 
}

console.log(mergeSortedArray([3,6,9,11,12],[1,4,7,8,10]))
