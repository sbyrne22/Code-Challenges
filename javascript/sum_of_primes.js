console.log("Hello");

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

const sumPrimes = (num) => {
  let prime = false
  let sum = 0;

  for (let i = 0; i < num; i ++) {
    for (let j = 2; j <= i; j++) { // We us <= to make sure 2 gets checked
      if((i % j == 0) && (j != i)) {
        prime = false
        // console.log(i, prime);
        break;
      }
      prime = true
    }
    if (prime == true) {
      console.log(i, prime);
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrimes(2000000));
