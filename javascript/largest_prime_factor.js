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



const largestPrimeFactor = (num) => {
  let divis = [];
  let primeArr = [];
  let prime = true;
  let largestPrimeNum = 0;

  for (let j = 2; j <= Math.sqrt(num); j++) {
    // console.log("stuff", divis[i] % j);
      if (num % j == 0) {
          prime = false;
          console.log("Prime?", prime, num);
          break;
      }
      prime = true;
  }
  if (prime == true) {
    console.log("Sorry", num, "is a prime number and its' only factors are 1 and itself");
  } else {
    for (let i = 2; i <= Math.sqrt(num); i ++) {
      if (num % i == 0) {
        divis.push(i);
        console.log(divis);
      }
    }
    for (let i = 0; i < divis.length; i ++) {
      console.log(divis[i]);
      for (let j = 2; j <= Math.sqrt(divis[i]); j++) {
        // console.log("stuff", divis[i] % j);
          if (divis[i] % j == 0) {
              prime = false;
              console.log("Prime?", prime, divis[i]);
              break;
          }
          prime = true;
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

largestPrimeFactor(100);
