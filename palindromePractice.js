// function isPalindrome(str){
//   for(let i = 0; i < str.length/2; i++){
//     if(str[i] !== str[str.length - 1 - i]){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

// palindrome practice problem
// reads the same forwards and backwards 

function isPalindrome(str) {
  for(let i = 0; i < str.length/2; i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("mamam"));
console.log(isPalindrome("mamjm"));

// again
function isPalindrome(str){
  for (let i  = 0; i < str.length/2; i++){
    if(str[i] !== str[str.length - i - 1]){
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("kakak"));
console.log(isPalindrome("ladaladal"));

// palindrome

function isPalindrome(str){
  for(let i = 0; i < str.length/2; i++){
    if(str[i] !== str[str.length - i - 1]){
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("momomom"));
console.log(isPalindrome("dfsdfdfd"));


function isPalindrome(str){
  for(let i = 0; i < str.length; i++){
    if(str[i] !== str[str.length - i - 1]){
      return false;
    }
  }
  return true;
}

function isPalindrome(str){
  for(let i = 0; i < str.length/2; i++){
    if(str[i] !== str[str.length - i - 1]){
      return false;
    }
  }
  return true;
}