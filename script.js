const headerChange = function () {
  let headerNode = document.querySelector("header");
  let specialLinkNode = document.querySelector(
    "header .container nav .special-link"
  );
  if (window.scrollY >= 466) {
    headerNode.style.transition = "all 300ms";
    headerNode.style.backgroundColor = "white";
    specialLinkNode.style.backgroundColor = "#1A8917";
  } else {
    headerNode.style.backgroundColor = "#FFC017";
  }
};

// ----------------------- M Animation ----------------------- //

let mNode = document.querySelectorAll(
  "div.hero-m > svg > g > g > g[opacity='1']> g > g > path"
);
let randomNumbersArray = [];

const generateRandomNumbers = function () {
  for (let i = 0; i < 30; i++) {
    let randomNumber = Math.floor(Math.random() * 131);
    if (randomNumbersArray.includes(randomNumber)) {
      i--;
    } else {
      randomNumbersArray.push(randomNumber);
    }
  }
};

const addM = function (mNode) {
  let appearIndex = randomNumbersArray.length - 1;

  const appearM = setInterval(() => {
    if (appearIndex === 0) {
      clearInterval(appearM);
    }
    let randomNumber = randomNumbersArray[appearIndex--];
    mNode[randomNumber].classList.remove("disappear");
  }, 100);
};

const animateM = function () {
  let disappearIndex = 0;

  const disappearM = setInterval(() => {
    if (disappearIndex === randomNumbersArray.length - 1) {
      clearInterval(disappearM);
      addM(mNode);
    }
    let randomNumber = randomNumbersArray[disappearIndex++];
    mNode[randomNumber].classList.add("disappear");
  }, 100);
};

animateM();
setInterval(animateM, 6000);

window.onscroll = headerChange;
window.onload = generateRandomNumbers;
