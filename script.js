function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = "";

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    if (operation === 'multiply') {
      result = num1 * num2;
    } else if (operation === 'divide') {
      if (num2 === 0) {
        result = "Cannot divide by zero!";
      } else {
        result = num1 / num2;
      }
    }
  }

  document.getElementById("result").innerHTML = "The Result Is: <br>" + result;
}
