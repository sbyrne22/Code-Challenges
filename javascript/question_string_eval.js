console.log("Hello");

// Using the JavaScript language, have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.
//
// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

let evaluation = false;
let numPair = false;
let split_str = [];
let numObj = [];

const findNumbers = (str) => {
  let numbers = [];
  let strToNum = 0;
  //Make str into an array
  split_str = str.split("");
  // console.log(split_str);
  for (let i = 0; i < split_str.length; i ++) {
    // console.log("This is i", split_str[i]);
    //if statemente will convert the numbers into numbers
    if ((split_str[i] < 10) || (split_str[i] > 0)) {
      //Save value and index of each number to an object (key: value pair)

      // console.log(split_str[i]);
      strToNum = parseInt(split_str[i]);
      numObj.push({value: strToNum, index: i});
    }
  }
  addNumbers(numObj);
}

const addNumbers = (numObj) => {
  let sum = 0;
  for (let i = 0; i < numObj.length - 1; i ++) {
    let j = i + 1
    // console.log("numObj i ->", numObj[i], "numObj j ->", numObj[j]);
    sum = numObj[i].value + numObj[j].value;
    if (sum === 10) {
      console.log(numObj[i].value, "+", numObj[j].value, "=", sum);
      checkQuestionMarks(numObj[i], numObj[j])
    }
    if (numPair === false) {
      evaluation = false;
      break;
    } else if (numPair === true) {
      evaluation = true
    }
  }

  console.log("This string is", evaluation);
}

const checkQuestionMarks = (num1, num2) => {
  let qMarks = 0;
  // console.log("num1 ->",num1, "num2 ->", num2);
  for (let i = num1.index + 1; i < num2.index; i ++) {
    console.log("srting", split_str[i]);
    if (split_str[i] === "?") {
      qMarks ++;
    }
  }
  if (qMarks != 3) {
    numPair = false;
  } else {
    numPair = true;
  }
  console.log("This is qMarks =", qMarks);
  console.log("This is numPair is", numPair);
}

findNumbers("arrb6???4xxbl5??eee5");

// function QuestionsMarks(str) {
//     res = false;
//     for(let i=0; i<str.length; i++){
//         for(let j=i+1; j<str.length; j++){
//             if(Number(str[i]) + Number(str[j])=== 10){
//                 res = true;
//                 if(str.slice(i,j).split("?").length -1 != 3){
//                     return false;
//                 }
//             }
//         }
//     }
//     return res;
// }
// console.log(QuestionsMarks("arrb6???2xxbl3???eee5"));
