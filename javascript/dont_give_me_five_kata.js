console.log("Hello");

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

const noFives = (start, end) => {
  let arr = [];

  for (start; start <= end; start ++ ) {
    let contains5 = false;
    let numExpand = (""+start).split(""); // (""+start) is shorthand for start.toString()
    for (let i = 0; i < numExpand.length; i ++ ) {
      // console.log(numExpand[i]);
      if (numExpand[i] == 5) {
        contains5 = true;
        break;
      }
    }
    if (contains5 == false) {
      console.log(start);
      arr.push(start);
    } else {
      console.log(start, 'contains a five');
    }
  }
  console.log(arr);
  return 'Answer' + ' ' + arr.length
}

console.log(noFives(1, 50));
