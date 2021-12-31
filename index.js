const buttons = Array.from(document.getElementsByClassName("buttons-of-calc"));
var arg1 = "";
var arg2 = "";
var oper = "";
var peressedOperator = document.querySelectorAll(".operator");
var boolOperator = false;
var result = document.querySelector("#result");
var equal = document.querySelector("#equal");
var dele = document.querySelector(".delete");
var numbers = document.querySelectorAll(".number");
var reset = document.querySelector(".reset");

peressedOperator.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if(arg1.length===0){
    result.innerText="error";
    }
    else{
    oper = e.target.innerText;
    boolOperator = true;
    result.innerText = e.target.innerText;
    }
  });
});
reset.addEventListener("click", (e) => {
  arg1 = "";
  arg2 = "";
  oper = "";
  result.innerText = "";
});
dele.addEventListener("click", (e) => {
  if (!boolOperator) {
    result.innerText = arg1.slice(0, -1);
    arg1 = result.innerText;
  } else {
    result.innerText = arg2.slice(0, -1);
    arg2 = result.innerText;
  }
});
equal.addEventListener("click", (e) => {
  

  switch (oper) {
    case "+":
      result.innerText = parseFloat(arg1) + parseFloat(arg2);
      break;
    case "-":
      result.innerText = parseFloat(arg1) - parseFloat(arg2);
      break;
    case "x":
      result.innerText = parseFloat(arg1) * parseFloat(arg2);
      break;
    case "/":
      if (arg2 == 0) {
        result.innerText = "error";
        break;
      }
      result.innerText = parseFloat(arg1) / parseFloat(arg2);
      break;
  }
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (!boolOperator) {
      arg1 += e.target.innerText;
      result.innerText = arg1;
    } else {
      arg2 += e.target.innerText;
      result.innerText = arg2;
    }
  });
});

var options = document.querySelectorAll(".option");
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    switch(e.target.innerText)
    {
      case "1":
        break;
        case "2":
  document.querySelector("body").style.background = "hsl(0, 0%, 90%)";
  document.querySelector(".result-window").style.background = "hsl(0, 0%, 93%)";
  document.querySelector(".calc-body").style.background = "hsl(0, 5%, 81%)";
  document.querySelector("#change-theme").style.background = "hsl(0, 5%, 81%)";
  document.querySelector(".buttons-of-calc").style.background ="hsl(45, 7%, 89%)";
  document.querySelector(".reset").style.background = "hsl(185, 42%, 37%)";
  document.querySelector(".equal").style.background ="hsl(25, 98%, 40%)";
  document.querySelector(".delete").style.background ="hsl(185, 42%, 37%)";
  document.querySelector(".reset").style.color ="hsl(0, 0%, 93%)";
  document.querySelector(".equal").style.color ="hsl(0, 0%, 93%)";
  document.querySelector(".delete").style.color ="hsl(0, 0%, 93%)";
  document.querySelector(".buttons-of-calc").style.color = "hsl(60, 10%, 19%)";
  document.querySelector(".calc-top").style.color = "hsl(60, 10%, 19%)";
          break;
          case "3":
            document.querySelector("body").style.background = "hsl(268, 75%, 9%)";
            document.querySelector(".result-window").style.background = "hsl(281, 89%, 26%)";
            document.querySelector(".calc-body").style.background = "hsl(281, 89%, 26%)";
            document.querySelector("#change-theme").style.background = "hsl(281, 89%, 26%)";
            document.querySelector(".buttons-of-calc").style.background ="hsl(268, 47%, 21%)";
            document.querySelector(".reset").style.background = "hsl(285, 91%, 52%)";
            document.querySelector(".equal").style.background ="hsl(176, 100%, 44%)";
            document.querySelector(".delete").style.background ="hsl(285, 91%, 52%)";
            document.querySelector(".reset").style.color ="hsl(0, 0%, 93%)";
            document.querySelector(".equal").style.color ="hsl(0, 0%, 93%)";
            document.querySelector(".delete").style.color ="hsl(268, 47%, 21%)";
            document.querySelector(".buttons-of-calc").style.color = "hsl(52, 100%, 62%)";
            document.querySelector(".calc-top").style.color = "hsl(52, 100%, 62%)";

            break;
    }
  });
});

