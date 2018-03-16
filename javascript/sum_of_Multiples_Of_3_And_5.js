// let num = 10;
// console.log(num);

const findMultiples = (num) => {
  // console.log(num);
  let sumArr = [];
  let sum = 0;
  for (let i = 1; i < num; i++) {
    // console.log(i);
    if ((i % 3 == 0) || (i % 5 == 0)) {
      console.log(i);
      sumArr.push(i);
      console.log("sumArr", sumArr);
      sum += i;
    }
  }
  console.log(sum); // sum = 23
}

findMultiples(10);
