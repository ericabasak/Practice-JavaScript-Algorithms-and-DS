// anagram
// write a function, given two strings, to determine if the second string
// is an anagram of the first string. 

// you have two strings
// iterate over each string one element at a time
// compare the first string to the second string on element at a time

// OPTION 1
function anotherAnagram(first, second) {
  if (first.length !== second.length){
    return false;
  } 

  let obj = {};

  for (let i = 0; i < first.length; i++){
    obj[first[i]] ? obj[first[i]] += 1 : obj[first[i]] = 1;
  }
  console.log(obj);

  for (let i = 0; i < second.length; i++){
    if(!obj[second[i]]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(anotherAnagram("abc", "abc"));

// OPTION 2
function anagram(first, second) {
  return first.split('').sort().join('') === second.split('').sort().join('');
}

console.log(anagram("gat", "bat"));

// OPTION 3
function anagram(first, second) {
  let firstStr = first.split('').sort().join('');
  let secondStr = second.split('').sort().join('');

  return firstStr === secondStr;
}
console.log(anagram('gat', 'nato'));


// another anagram
let isAnagram = function(first, second){
  // if (first.length !== second.length){
  //   return false
  // }
  // split the string into an array of characters
  // sort method to sort the elements in the array in alphbetical order
  // join the letters back together to form a string again
  
  let firstStr = first.split('').sort().join('').toLowerCase();
  let secondStr = second.split('').sort().join('').toLowerCase();

  return firstStr === secondStr;
}

console.log(anagram("moose", "bos"));

// more of above
function anagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let obj = {};

  for (let i = 0; i < string1.length; i++){
    obj[string1[i]] ? obj[string1[i]] += 1 : obj[string1[i]] = 1;
  }

  for (let i = 0; i < string2.length; i++){
    if(!obj[string2[i]]){
      return false;
    } else {
      obj[string2[i]] -= 1;
    }
  }
  return true;
}

console.log(anagram("boo", "oob"));
console.log(anagram("erica", "rieca"));

function anagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let obj = {};

  for (let i = 0; i < string1.length; i++){
    obj[string1[i]] ? obj[string1[i]] += 1 : obj[string1[i]] = 1;
  }

  for (let i = 0; i < string2.length; i++){
    if(!obj[string2[i]]){
      return false;
    } else {
      obj[string2[i]] -= 1;
    }
  }
  return true;
}

console.log(anagram("boo", "oob"));
console.log(anagram("erica", "rieca"));
console.log(anagram("xjudoe", "adelyn"));