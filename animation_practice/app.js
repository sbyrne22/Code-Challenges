console.log("peaches");
let boxIsUp = false;
let holderClassIsOn = true;

tabUp = () => {
  const tabBtn = document.getElementById('tabBtn')
  const element = document.getElementById('jsTest');
  if (holderClassIsOn == true) {
    element.classList.remove('start');
    holderClassIsOn = false;
    console.log('Holder Class', holderClassIsOn);
  }

  if (boxIsUp == false) {
    element.classList.remove('downFromTop');
    element.classList.add('upFromBottom');
    tabBtn.innerHTML = "Tab Down";
  } else if (boxIsUp == true) {
    element.classList.remove('upFromBottom');
    element.classList.add('downFromTop');
    tabBtn.innerHTML = "Tab Up";
  }
  boxIsUp = !boxIsUp;
  console.log(boxIsUp);
};
