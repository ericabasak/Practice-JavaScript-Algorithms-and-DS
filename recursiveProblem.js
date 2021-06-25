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

// --------------

function sumUpToFive(){
  return(1+2+3+4+5)
}
console.log(sumUpToFive())

function sumUpToFive(){
  return (1+2+3+4) + 5;
}
console.log(sumUpToFive())

function sumUpTo(num){
  sumUpTo(num-1)+num;
}
console.log(sumUpTo(5))

// ---------------

function sumb(n){
  if(n > 1){
    sumb(n - 1) + n;
  } else {
    return 1
  }
}
console.log(sumb(5));