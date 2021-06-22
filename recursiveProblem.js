// practice with recursion
// recursion means to call it's own function

function sayDownFrom(n){
  console.log(n);
  if(n > 1){
      sayDownFrom(n-1)
  } else {
    return true;
  }
}
console.log(sayDownFrom(4));

function printNums(num){
  for(let i = 5; i < num; i--){
    return num[i]
  }
}
console.log(printNums(5));

// ---------------------------

const arr = [1,2,3,4,5];

for (const element of arr) {
  console.log("Number: " + " " + element);
}

[1,2,3,4,5].forEach((e) => console.log(++e));