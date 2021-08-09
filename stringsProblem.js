// Write a function that takes a list of strings and prints them, one per line, 
// in a rectangular frame. 
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

// psuedocode
// take the array and split it up by the (,) putting each
// separate string on its own line. with each string, place 
// an asterick on both sides of the word.
// must find the length of the longest word and add a space on both sides.
// but you must add white space to the words to create a box?
// it must create a box around all words



// function funFrame(arr){
//   // first thing would be to take the array and separate each string by the (,)
//   // arr.split(",")
//   let text = "";
//   for(let x of arr){
//     text += x;
//     // text.join("*" + x + "*");
//     console.log(x)
//   }
// }
// console.log(funFrame(["Hello", "World", "in", "a", "frame"]))

// // find the longest word

// function makeFrame(arr){
//   let maxWord = 0;
//   let currentWord = 0;
//   for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     for(let j = 0; j < arr.length; j++){
//       // for each maxWord add (* ) in front of word, add ( *) at the end of the word  
//       // for all other words currentWord then you have to add (* ) in front of word, then 
//       // take the difference between the maxWord and currentWord, and put ( ) to make the difference up, 
//       // followed by ( *) at the end
//       if(maxWord + "* ")
      
//     }

//   }
// }
// console.log(makeFrame(["Hello", "World", "in", "a", "frame"]))


//  should be working solution with coding session with antonio

function makeFrame(arr){
  let maxLength = findMaxLenght(arr)
  printAstLine(maxLength)
  for(let i = 0; i < arr.length; i++){
    let word = arr[i];
    printLine(word, maxLength);
  }
  printAstLine(maxLength);
}