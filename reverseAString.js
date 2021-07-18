// reverse a string

// OPTION 1
// function reverse(s) {
//   let o = "";
//   for (let i = s.length - 1; i >=0; i--)
//       o += s[i];
//       return o;
// }
// console.log(reverse("boo"));
// console.log(reverse("erica"));



// OPTION 2
function reverse(str) {
  let o = [];
  for (let i = 0, len = str.length; i <= len; i++)
  o.push(str.charAt(len - i));
  return o.join('');
}
console.log(reverse("erica"));



// OPTION 3
function reverse(str) {
  return str.split("").reverse().join("");
}



// OPTION 4
function reverse(str) {
  return [...'friend'].reverse().join("");
}

console.log(reverse());


// again
function reverseStr(str){
  let reversed = "";
  for(let i = str.length - 1; i >= 0; i--){
    reversed.push(str[i]);
  }
  return reversed;
}
console.log(reverseStr("boo"));
console.log(reverseStr("erica"));