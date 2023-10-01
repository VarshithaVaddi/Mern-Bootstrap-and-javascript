function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;

    document.getElementById('result').textContent = `The resulted output is: ${result}`;
  }

  function divideNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num2 === 0) {
      document.getElementById('result').textContent = "The resulted output is: Cannot divide by zero";
    } else {
      const result = num1 / num2;
      document.getElementById('result').textContent = `The resulted output is: ${result}`;
    }
  }