// this is a binary search problem, it is similar to the
// includes problem and how it is working behind the scene
// big o ==> O(log n) worst case
// big o ==> O(1) best case

function binarySearch(string, letter){
  let startPoint = 0;
  let endPoint = string.length - 1;
  let guessPoint = parseInt((endPoint - startPoint)/2);

  while(startPoint != endPoint){
    console.log(`start point is ${startPoint}, endpoint is ${endPoint}, and guesspoint is ${guessPoint}`)
    if(string[guessPoint] < letter) {
      console.log('too low');
      startPoint = guessPoint;
      guessPoint = startPoint + Math.round((endPoint - startPoint)/2);
    } else if (string[guessPoint] > letter){
      console.log('to high');
      endPoint = guessPoint;
      guessPoint = endPoint + parseInt((endPoint - startPoint)/2);
    } else {
      console.log('just right');
      return true;
    }
  }
  if(string === letter){
    return true;
  } else {
    console.log('sorry');
    return false;
  }
}

console.log(binarySearch("sdfhsifsdhiofs"))