// native string search practice problem
// search for a SUBSTRING within a string

// pseudocode
// loop over the longer string
// loop over the shorter string
// if the characters dont match, break out of the inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, incrememnt the number of matches
// return the count

function stringSearch(long, short){
  var count = 0;
  for(let i = 0; i < long.length; i++){
    for(let j = 0; j < short.length; j++){
      if(short[j] !== long[i + j]){
        break;
      }
      if(j === short.length - 1){
        count++;
      }
    }
  }
  return count;
}
console.log(stringSearch("lorie loled", "lol"))