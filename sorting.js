// built in JavaScript sorting

// sorting numbers accending, numerical order
function numberCompare(num1, num2) {
  return num1-num2;
}
[3,99,10, 38].sort(numberCompare);
// numberCompare.sort([3,99,10, 38])


// why doesnt this work?
// function numberCompare(num1, num2) {
//   let arr = []
//   let someNum = num1-num2
//   return someNum.sort();
// }
// [3,99,10, 38].sort(numberCompare);

// sorting by string length
function compareByLength(str1, str2) {
  return str2.length-str1.length;
}
["cat", "elephant", "dinosaure", "zebra"].sort(compareByLength);


