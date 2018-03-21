// console.log("Hello");

// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

const primeFactors = (num) => {
  let primeNum = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    // console.log("stuff", divis[i] % j);
      if (num % i == 0) {
          primeNum = false;
          console.log(num, "is not prime");
          findFactors(num);
          break;
      }
      primeNum = true;
  }
  if (primeNum == true) {
    console.log("Sorry", num, "is a prime number and its' only factors are 1 and itself");
  };
};

//----------------------------------------------
const findFactors = (num) => {
  // console.log("findFactors is running...", num);
  let divis = [];

  for (let i = 2; i < num; i ++) {
    if (num % i == 0) {
        divis.push(i);
    }
  }
  console.log("All Factors", divis);
  findPrimeFactors(divis);
};

//----------------------------------------------
const findPrimeFactors = (factors) => {
  // console.log("findPrimeFactors is running...", factors);
  let primeFac = true;
  let primeArr = [];

  for (let i = 0; i < factors.length; i ++) {
    for (let j = 2; j <= Math.sqrt(factors[i]); j++) {
      if (factors[i] % j == 0) {
          primeFac = false;
          console.log(factors[i], "is not prime");
          break;
      }
      primeFac = true;
    }
    if (primeFac == true) {
      console.log(factors[i], "is prime");
      primeArr.push(factors[i])
    };
  };
  console.log("Prime Factors", primeArr);
  if (primeArr != []) {
    largestPrimeFactor(primeArr);
  } else {
    // This should Never run, it's just an extra check
    console.log("There are no prime factors");
  }
};

//----------------------------------------------
const largestPrimeFactor = (primeArr) => {
  // console.log("largestPrimeFactor is running...");
  let largestPrime = 0;

  for (let i = 0; i < primeArr.length; i ++) {
    if (primeArr[i] > largestPrime) {
      largestPrime = primeArr[i];
    };
  };
  console.log('The Largest Prime Factor is ->', largestPrime);
}

primeFactors(20);
