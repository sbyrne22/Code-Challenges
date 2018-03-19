let wordArr = ["racecar", "tot", "cheese", "burito", "bob", "aaaaaaaaaaaaaa"]
// console.log(wordArr);

const findPalindrome = (arr) => {
  // console.log(arr);
  let arrReverse = [];
  let palArr = [];
  let longestWord = "";

  for (let i = 0; i < arr.length; i ++) {
    console.log(arr[i].split(""));
    arrReverse = arr[i].split("").reverse().join("");
    // console.log(arrReverse);
    if (arrReverse == arr[i]) {
      palArr.push(arrReverse)

      if (longestWord.length < arr[i].length) {
        longestWord = arr[i]
      }
    }
  }
  console.log(palArr);
  console.log(longestWord);
}

findPalindrome(wordArr);


// Replace Expamle
// let string = "Hello peaches";
// let replace = string.replace("peaches", "Madison");
// string = replace
// console.log(string);
