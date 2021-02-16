// native string search practice problem

// pseudocode
// loop over the longer string
// loop over the shorter string
// if the characters dont match, break out of the inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, incrememnt the number of matches
// return the count


// a correct solution
function nativeSearch(long, short) {
  var count = 0;
  for(let i = 0; i < long.length; i++) {
    for(let j = 0; j < short.length; j++) {
      console.log(short[j], long[i+j])
      if(short[j] !== long[i+j]){
        console.log("BREAK!")
        break;
      }
      if(j === short.length -1) {
        console.log("FOUND ONE!")
        count++;
      }
    }
  }
  return count;
}

nativeSearch("lorie loled", "lol")

// a condensed version of the same problem

function nativeSearch(long, short) {
  var count = 0;
  for(let i = 0; i < long.length; i++) {
    for(let j = 0; j < short.lenght; j++) {
      if(short[j] !== long[i+j]) break;
      if(j === short.length - 1) count++;
    }
  }
  return count;
}