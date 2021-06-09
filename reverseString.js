// reverse a string without using reverse method

function reverseAString(str) {
  let newRevString = "";
  for(let i = str.length - 1; i >= 0; i--){
    newRevString = newRevString + str[i];
  }
  return newRevString;
}
console.log(reverseAString("erica"));
console.log(reverseAString("alphabet"));

// again
function reverse(str){
  let newStr = "";
  for(let i = str.length - 1; i >= 0; i--){
    newStr += newStr + str[i];
  }
}
console.log(reverseAString("erica"));
console.log(reverseAString("alphabet"));

// again

function reverseAString(str){
  let newStr = "";
  for(let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseAString("monster"));
console.log(reverseAString("freedom"));

// reverse a string
function reverse(str){
  let newStr = "";
  for(let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}
console.log(reverse("cup"));
console.log(reverse("address"));

