// console.log("Hello");

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?


const whatPrime = (num) => {
  let primeNum = [];
  let primeFac = false;
    for (let i = 2; primeNum.length < num; i ++) {
      // console.log("i", i);
      for (let j = 2; j <= i; j ++) {
        // console.log(i, "%", j, "=>", i % j);
        if ((i % j == 0) && (j != i)) {
            primeFac = false;
            // console.log(i, "is not prime");
            break;
        }
        primeFac = true
      }
      if (primeFac == true) {
        primeNum.push(i);
      }
    }
  console.log("primeNum", Math.max(...primeNum));
  console.log(primeNum.length);
  let apple = primeNum.length - 1;
  console.log("PrimeNum Again!", primeNum[apple]);
}

whatPrime(10001);
