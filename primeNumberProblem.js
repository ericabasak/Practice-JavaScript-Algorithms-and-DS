// is the number a prime number?
// a prime number has only two factors - 1 and itself

// In arithmetic, the division of two integers produces a quotient and a remainder.
// In mathematics, the result of a modulo operation is the remainder of an arithmetic division.
// 10 % 3 // = 1 ; because 3 * 3 gets you 9, and 10 - 9 is 1.

function isPrime(num){
  for(let n = 2; n < num; n++){
    if(num % n === 0) return false;
  }
  return num > 1;
}
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(97));


// another solution to is a number prime or not
// ES2015 version
// 1 and itself
isPrime = num => {
  for(let n = 2; n < num; n++)
    if(num % n === 0) return false; 
  return num > 1;
}
console.log(isPrime(12));
console.log(isPrime(11));
console.log(isPrime(87));
console.log(isPrime(88));

// again
isPrime = num => {
  for(let n = 2; n < num; n++)
    if(num % n === 0) return false;
    // what is the point of the the line below? num > 1?
    return num > 1;
    // is it just assumed that if its not false than the answer is true? but dont you have to explicity tell it to return true?
}
console.log(isPrime(22));
console.log(isPrime(17));


// again
function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
console.log(isPrime(121));

isPrime = num => {
  if(num === 2){
    return true;
  } else if (num > 1){
    for(let n = 2; n < num; n++){
      if(num % n !== 0){
        return true;
      } else if (num === n * n){
        return false;
      } else {
        return false
      }
    }
  } else {
    return false;
  }
}
console.log(isPrime(4));
console.log(isPrime(10));
console.log(isPrime(11));

// again
function isPrime(num) {
  for(let n = 2; n < num; n++){
    if(num % n === 0) return false;
    return num > 1;
    // shouldnt the above code return a number? num > 1
    // there is no return true
  }
}
console.log(isPrime(343359))


// my version that makes sense to me
function isPrime(num){
  for(let n = 2; n < num; n++){
    if(num % n === 0){
      return false;
    } else {
      return true;
    }
  }
}
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(97));


console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(24));
console.log(isPrime(8449));
console.log(isPrime(33));


