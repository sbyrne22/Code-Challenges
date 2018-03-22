console.log("Hello");

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.
let x = 0;
let y = 0;
let max = 0;
let product = 0;
let palindrome = false;
let palArr = [];


const multiplyNumbers = () => {
  for (x = 100; x < 1000; x ++) {
    // console.log("x =", x);
    for (y = x; y < 1000; y ++) {
      // console.log("y =", y);
      product = x * y;
      // console.log(x, "*", y, "=", product);
      isPalindrome(product);
    }
  }
  console.log("This is the largest palidrome product:", max);
  console.log(Math.max(...palArr));
}

const isPalindrome = (product) => {
  let reverseP = 0
  // console.log(product);
  reverseP = parseInt(product.toString().split('').reverse().join(''));
  // console.log(reverseP);
  if (product == reverseP) {
    palindrome = true;
    // console.log(product, "is a palindrome");
    maxPalindrome(product);
    palArr.push(product);
  } else {
    palindrome = false;
    // console.log(product, "is not a palindrome");
  }
}

const maxPalindrome = (product) => {
  if (product > max) {
    max = product;
  }
}

multiplyNumbers();
