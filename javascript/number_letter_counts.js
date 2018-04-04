console.log("Hello");

// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
//
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
//
//
// Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

const single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const double_ones = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const double = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const tripple = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
const quad = ['', 'one thousand', 'two thousand', 'three thousand', 'four thousand', 'five thousand', 'six thousand', 'seven thousand', 'eight thousand', 'nine thousand'];

// Loop through num
// Get word version of each index
  //figure out wich array to loop through
  //Greater arrays will have to loop through the next smaller array
// Add words letters together
let sum = 0;
const count = (num) => {

  for (let i = 1; i <= num; i ++ ) {
    // let string = i.toString();
    let iArr = (""+i).split("");
    getString(iArr);
  }
  console.log(sum);
}

const getString = (arr) => {
  let currentNumSplit = [];
  let currentNumText = "";

  let i1 = arr[0];
  let i2 = arr[1];
  let i3 = arr[2];
  let i4 = arr[3];
  console.log(arr);
  if (arr.length == 1) {
    currentNumText = single[i1]

  } else if ((arr.length == 2) && (i1 < 2)) {
    currentNumText = double_ones[i2]

  } else if (arr.length == 2) {
    currentNumText = double[i1] + ' ' + single[i2];

  } else if (arr.length == 3) {
    if ((i2 == 0) && (i3 == 0)) {
      currentNumText = tripple[i1] + double[i2] + single[i3];
    } else if (i2 == 1) {
      currentNumText = [tripple[i1].slice(0, tripple[i1].length), ' and ', double_ones[i3], tripple[i1].slice(tripple[i1].length)].join('');
    } else {
      currentNumText = [tripple[i1].slice(0, tripple[i1].length), ' and ', double[i2], ' ', single[i3], tripple[i1].slice(tripple[i1].length)].join('');
    }
  } else if (arr.length == 4) {
    if ((i3 == 0) && (i4 == 0)) {
      currentNumText = quad[i1] + ' ' + tripple[i2] + double[i3] + single[i4];
    } else if (i3 == 1) {
      currentNumText = quad[i1] + ' ' + [tripple[i2].slice(0, tripple[i2].length), ' and ', double_ones[i4], tripple[i2].slice(tripple[i2].length)].join('');
    } else {
      currentNumText = quad[i1] + ' ' + [tripple[i2].slice(0, tripple[i2].length), ' and ', double[i3], ' ', single[i4], tripple[i2].slice(tripple[i2].length)].join('');
    }
  }
  console.log(currentNumText);
  deleteSpaces(currentNumText);
}

const deleteSpaces = (text) => {
  currentNumSplit = text.split(" ");
  currentNumJoin = currentNumSplit.join('');
  console.log("Join", currentNumJoin);
  addLetters(currentNumJoin.length);
}

const addLetters = (num) => {
  sum += num;
}

count(1129);
