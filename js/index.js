const bigDisplay = document.querySelector("#display span");
const smallDisplay = document.querySelector("#display p");
const operators = Array.from(document.querySelectorAll("#operators button"));
const digits = Array.from(document.querySelectorAll("#digits button"));
const utils = Array.from(document.querySelectorAll("#utils"));
let prevValue = "0";

window.addEventListener("load", () => {
  utils.map((util) =>
    util.addEventListener("click", (e) => {
      e.target.id === "clear" ? clearFn() : EqualFn();
    })
  );

  operators.map((operator) =>
    operator.addEventListener("click", introduceOperator)
  );
  digits.map((digit) => digit.addEventListener("click", introduceValue));
});

function setDisplay(value) {
  if (bigDisplay.innerText.length >= 20) {
    bigDisplay.style.color = "#E13D15";
    setTimeout(() => {
      bigDisplay.style.color = "black";
    }, 1500);
    return;
  }

  else if(/[*+-/]/.test(value) && value !== ".") {
    smallDisplay.innerText = bigDisplay.innerText;
    bigDisplay.innerText = value;
    return;
  }

  else if(/[.]/.test(value) && bigDisplay.innerText.length === 1) {
    return;
  }

  bigDisplay.innerText += value;
  prevValue = value;
}

function introduceValue(e) {
  if (prevValue === "0" && bigDisplay.innerText[0] === "0") {
    bigDisplay.innerText = "";
  }
  setDisplay(e.target.innerText);
}

function introduceOperator(e) {
  if (/[1-9]/.test(prevValue) || e.target.innerText === "-") {
    setDisplay(e.target.innerText);
  } else if (
    /[*+/-]/.test(bigDisplay.innerText) &&
    e.target.innerText !== "-"
  ) {
    bigDisplay.innerText =
      bigDisplay.innerText.slice(0, -1) + e.target.innerText;
    prevValue = e.target.innerText;
    return;
  }
}

function clearFn() {
  if (bigDisplay.innerText !== "0") {
    bigDisplay.innerText = "0";
    smallDisplay.innerText = "0"
    prevValue = "0";
  }
  return;
}

function EqualFn() {
  if (/[*+-/]/.test(bigDisplay.innerText) && /\d/.test(prevValue)) {
    console.log(bigDisplay.innerText);
  }
}
