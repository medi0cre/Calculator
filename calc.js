function clearScreen() {
  document.querySelector(".screen").textContent = "";
}

function roundNumber(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

function operate(a, b, operator) {
  if(operator == "+")
    return roundNumber((add(a, b)), 6);

  if(operator == "-")
    return roundNumber((subtract(a, b)), 6);

  if(operator == "x")
    return roundNumber((multiply(a, b)), 6);
    
  if(operator == "/")
    return roundNumber((divide(a, b)), 6);
}

function display(result) {
  document.querySelector(".screen").textContent = result;
}

function clearVariables() {
  num1 = 0;
  num2 = 0;
  operator = 0;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if(b != 0)
    return a / b;
  else {
    clearVariables();
    return "Womp womp";
  }
}


let num1 = 0, num2 = 0, operator = 0;


const wipe = document.querySelector(".clr");
wipe.addEventListener("mouseup", () => {
  wipe.style.color = "white";
  clearScreen();
  clearVariables();
});
wipe.addEventListener("mousedown", () => {
  wipe.style.color = "rgb(13, 131, 38)";
});


const numbers = document.querySelectorAll(".num");
numbers.forEach((number) => {
  number.addEventListener("mouseup", () => {
    number.style.color = "white";
    if(operator == "=") {
      clearVariables();
      num1 = Number(num1.toString() + number.textContent);
      display(num1);
    }
    else if(operator == 0) {
      num1 = Number(num1.toString() + number.textContent);
      display(num1);
    }
    else {
      num2 = Number(num2.toString() + number.textContent);
      display(num2);
    }
  });
}
);
numbers.forEach((number) => {
  number.addEventListener("mousedown", () => {
    number.style.color = "rgb(13, 131, 38)";
  });
}
);


const operation = document.querySelectorAll(".op");
operation.forEach((operand) => {
  operand.addEventListener("mouseup", () => {
    operand.style.color = "#1F2937";
    if(num2 != 0) {
      num1 = operate(num1, num2, operator);
      num2 = 0;
      display(num1);
    }
    operator = operand.textContent;
  });
});
operation.forEach((operand) => {
  operand.addEventListener("mousedown", () => {
    operand.style.color = "rgb(13, 131, 38)";
  });
});


const equal = document.querySelector(".equal");
equal.addEventListener("mouseup", () => {
  equal.style.color = "white";
  if(operator != 0 && num2 != 0) {
  num1 = (operate(num1, num2, operator));
  operator = "=", num2 = 0;
  display(num1);
  }
});
equal.addEventListener("mousedown", () => {
  equal.style.color = "rgb(13, 131, 38)";
});