// bubble sort
// insertion sort
// selection sort

// javascript built in sort method
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


// Colt Steele's Udemy problem
// how can there be two parameters but one array? I feel like there is disconnect

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