// includes method on string
// practicing with how the includes method works

function includeString(word, letter){
  let matches;
  for(let i = 0; i < word.length; i++){
    if(word[i] === letter){
      matches = true;
    }
  } return !!matches;
}
console.log(includeString("starbucks", "b"))
console.log(includeString("macintosh", "x"))



// sorting a string
function inOrder(str){
  return str.split("").sort().join("");
}
console.log(inOrder("alphabet"));

// sorting again
function sortString(str){
  return str.split("").sort().join("-");
}
console.log(sortString("mocha"))
console.log(sortString("starbucks"));

function sortString(str){
  return str.split("").sort().join("*");
}
console.log(sortString("mocha"))
console.log(sortString("starbucks"));