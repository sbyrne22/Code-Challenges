console.log("Hello");

// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?


// const largestPrimeFactor = (num) => {
//   let divis = [];
//   let primeArr = [];
//   let prime = true;
//   let largestPrimeNum = 0;
//
//   for (let i = 2; i <= Math.sqrt(num); i ++) {
//     if (num % i == 0) {
//       divis.push(i);
//       console.log(divis);
//     }
//   }
//   for (let i = 0; i < divis.length; i ++) {
//     console.log(divis[i]);
//     for (let j = 2; j <= Math.sqrt(divis[i]); j++) {
//       // console.log("stuff", divis[i] % j);
//         if (divis[i] % j == 0) {
//             prime = false;
//             console.log("Prime?", prime, divis[i]);
//             break;
//         }
//         prime = true;
//     }
//     if (prime == true) {
//       console.log("Prime?", prime, divis[i]);
//       primeArr.push(divis[i]);
//       if (divis[i] > largestPrimeNum) {
//         largestPrimeNum = divis[i];
//       }
//     }
//   }
//   console.log("largest Prime Number", largestPrimeNum);
//   console.log(primeArr);
// }
//
// largestPrimeFactor(39585);

/////////////////

const largestPrimeFactor = (num) => {
  let divis = [];
  let primeArr = [];
  let prime = true;
  let largestPrimeNum = 0;
  console.log("Entered Number ->", num);

  // Checks if num is prime
  for (let j = 2; j <= Math.sqrt(num); j ++) {
      if (num % j == 0) {
          prime = false;
          console.log("Prime?", prime, num);
          break;
      }
      prime = true;
  }
  if (prime == true) {
    console.log("Sorry", num, "is a prime number and its' only factors are 1 and itself");
  } else { // If not prime continues function
    // Finds all factors of Num
    for (let i = 2; i < num; i ++) {
      if (num % i == 0) {
        divis.push(i);
      }
    }
    console.log("All Factors", divis);
    for (let i = 0; i < divis.length; i ++) {
      console.log("Current Factor being Checked", divis[i], i);
      // Finds Which factors are prime

      //!!! Why will 2 not go into this loop?
      for (let j = 2; j <= Math.sqrt(divis[i]); j ++) {
        console.log("This is J", j);
        console.log("Checking...", divis[i]);
          if (divis[i] % j == 0) {
              prime = false;
              console.log("Prime?", prime, divis[i]);
              break; // Inside loop ends and outside loop continues
          }
          prime = true;
          // console.log("peaches");
      }
      if (prime == true) {
        console.log("Prime?", prime, divis[i]);
        primeArr.push(divis[i]);
        if (divis[i] > largestPrimeNum) {
          largestPrimeNum = divis[i];
        }
      }
    }
    console.log("largest Prime Number", largestPrimeNum);
    console.log("Prime Factors", primeArr);
  }
}

// Why is 2 not being determined as a prime factor?
largestPrimeFactor(10);
