// reverse a sentence. ie. "today I had some pasta" -> "pasta some had I today"

// doesnt work
// function reverseSentence(str){
//   let reversedStr = "";
//   reversedStr.split(" ");
//   for(let i = str.length - 1; i >= 0; i--){
//     reversedStr.push(str[i]);
//   }
//   return reversedStr;
// }
// console.log(reverseSentence("today I had some pasta"));
// console.log(reverseSentence("i'm going to rock these interviews"))

function reverseSentence(str){
  let arr = str.split(" ");
  let result = [];
  for(let i = arr.length -1; i >= 0; i--){
    result.push(arr[i]);
  }
  return result.join(" ");
}
console.log(reverseSentence("today I had some pasta"));
console.log(reverseSentence("i'll do great in my interview"))