console.log("Hello");

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const divide = (num1, num2) => {
  let startNum = 10;
  let divisible = false;
  let good = false;
  while (divisible == false) {
    for (let i = num1; i <= num2; i ++) {
      // console.log("i", i);
      if (startNum % i == 0) {
        divisible = true;
      } else {
        divisible = false;
        break;
      }
    }
    if (divisible == true) {
       console.log(divisible, startNum);
       break;
    }
    startNum ++;
  }
  console.log(startNum);
}

divide(2, 20); // enter range
