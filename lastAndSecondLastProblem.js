// HackerRank problem
// given a string, create a new string made up of its 
// last two lettters, reversed and separated by a space.
//  i.e. give the word 'bat', return 't a'
// contraints 2 < length of word < 100

function lastLetter(word){
  const l = word.length;
  return word.charAt(l - 1) + " " + word.charAt(l - 2);
}
console.log(lastLetter("bat"));
console.log(lastLetter("alphabet"));