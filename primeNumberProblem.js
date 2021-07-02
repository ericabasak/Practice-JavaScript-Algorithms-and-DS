// is the number a prime number?
// a prime number has only two factors - 1 and itself

function isPrime(num){
  for(let n = 1; n < num; n++){
    if(num % n === 0) return false;
  }
  return true;
}
console.log(isPrime(9483))