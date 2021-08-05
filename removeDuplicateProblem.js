// remove duplicate members (you can use numbers or strings) from an array
// not sorted array ???
// i.e. arr = [2,5,3,4,4,7];

function noDups(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0 + 1; j < arr.length; j++){
      if(arr[i] === arr[j]){
        arr.splice();
        console.log(i,j);
      }
    }
  }
  return newArr;
}
console.log(noDups([2,5,3,4,4,7]))


function noDups(){

}
console.log(noDups([2,5,3,4,4,7]))
