// find out if a given string is a palindrome

// palindrome is a word of phrase that is from the same from the front and back

// i.e. madam OR nurses run

// psuedocode
// go through letter by letter
// have a pointer at the beginning and end and compare the two letters of the indecies
// then more inwards towards eachother


function isPalindrome(str){
  for(let i = 0; i < str.length/2;i++){
    if(str[i] !== str[str.length - 1 -i]){
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("wallet"));
console.log(isPalindrome("nurses run"));