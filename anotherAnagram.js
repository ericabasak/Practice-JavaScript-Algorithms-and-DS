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