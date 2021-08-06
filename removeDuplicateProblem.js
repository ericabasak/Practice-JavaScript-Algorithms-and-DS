// remove duplicate members (you can use numbers or strings) from an array
// not sorted array ???
// i.e. arr = [2,5,3,4,4,7];

// function noDups(arr){
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0 + 1; j < arr.length; j++){
//       if(arr[i] === arr[j]){
//         arr.splice();
//         console.log(i,j);
//       }
//     }
//   }
//   return newArr;
// }
// console.log(noDups([2,5,3,4,4,7]))


// function noDups(arr){
//   let currentElem = 0;
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== currentElem){
//       arr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(noDups([2,5,3,9,2,4,7]));

function noDuplicates(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    let elem = arr[i];
    obj[elem] = elem
  }
  return obj.keys();
}
console.log(noDuplicates([3,6,7,9,2,2,4]))