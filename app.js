const inputField = document.querySelector("#firstInput");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let value = btn.textContent.trim();
    if (value === "AC") {
      inputField.value = "0";
      return;
    }
    if (value === "=") {
      try {
        let expression = inputField.value;
        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/×/g, "*");
        expression = expression.replace(/−/g, "-");
        inputField.value = eval(expression);
      } catch {
        inputField.value = "Error";
      }
      return;
    }
    if (value === "DEL") {
      if (inputField.value.length === 1) {
        inputField.value = "0";
        return;
      } else {
        inputField.value = inputField.value.slice(0, -1);
        return;
      }
    }
    if (value === "%") {
      inputField.value = parseFloat(inputField.value) / 100;
      return;
    } else if (value === "%") {
      inputField.value = inputField.value.replace("%", "0.01");
      return;
    }
    if (inputField.value === "0") {
      inputField.value = value;
    } else {
      inputField.value += value;
    }
  });
});
