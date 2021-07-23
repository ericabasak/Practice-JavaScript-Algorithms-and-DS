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
      mergedArr.push(elemA)
      indexOfA++;
      elemA = a[indexOfA];
    } else if (elemA < elemB){
      mergedArr.push(elemB)
      indexOfB++;
      elemB = b[indexOfB];
    }

  }
}