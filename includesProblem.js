// includes

function includesAString(word, letter){
  let matches;
  for(let i = 0; i < word.length; i++){
    if(word[i] === letter){
      matches = true;
    }
  }
  return !!matches;
}
console.log(includesAString("monkey", "k"))