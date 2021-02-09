// recursive Range practice problem

// write a function called recursive range which accepts a number
// and adds up all the numbers from 0 to the number passed to the function

// my solution
function recursionRange(num){
  if(num === 0) return 0;
  return num + (recursionRange + 1);
}

// a correct solution
function recursionRange(num){
  if(num === 0) return 0;
  return num + recursionRange(num - 1);
}
