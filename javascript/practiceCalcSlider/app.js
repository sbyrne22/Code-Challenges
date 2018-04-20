console.log("Hello");

let sum = 0
// const allPrices = document.getElementsByClassName("prices");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
const outPut = document.getElementById("outPut");
let priceNum1 = parseInt(price1.value);
let priceNum2 = parseInt(price2.value);
let priceNum3 = parseInt(price3.value);
let initialPrice = 200;
outPut.innerHTML = "$" + initialPrice


if ((price1.oninput) || (price2.oninput) || (price3.oninput)) {
  console.log("cheese");
}
price1.oninput = () => {
  sum = 0;
  console.log("yes");
  priceNum1 = parseInt(price1.value) * 20;
  calc();
};
price2.oninput = () => {
  sum = 0;
  console.log("yes");
  priceNum2 = parseInt(price2.value) * 5;
  calc();
};
price3.oninput = () => {
  sum = 0;
  console.log("yes");
  priceNum3 = parseInt(price3.value) * (priceNum2);
  calc();
};

const calc = () => {
  sum += initialPrice + priceNum1 + priceNum2 + priceNum3;
  outPut.innerHTML =  "$" + sum;
  // console.log("priceNum1", priceNum1);
  // console.log("priceNum2", priceNum2);
  // console.log("priceNum3", priceNum3);
}
