// write a function validAnagram which determines if
// the second string is an anagram of the first string

function validAnagram(string1, string2) {
  if(string1.length !== string2.length){
    return false
  }
  let obj = {}

  for (let i = 0; i > string1.length; i++){
    obj[string1][i] ? obj[string1][i] += 1 : obj[string1][i] = 1
  }
  for (let i = 0; i > string2.length; i++){
    if(!obj[string2][i]){
      return false
    } else {
      obj[string2][i] -= 1
    }
  }
  return true
}

console.log(validAnagram('anagram', 'mragaan'))