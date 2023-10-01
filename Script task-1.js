function reverseNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      return "Invalid input. Please provide a valid number.";
    }
    const reversedNum = parseInt(num.toString().split('').reverse().join(''), 10);
    return reversedNum;
  }

  function reverseAndDisplay() {
    const originalNumberInput = document.getElementById('originalNumber');
    const reversedNumberInput = document.getElementById('reversedNumber');

    const originalNumber = parseFloat(originalNumberInput.value);
    const reversedNumber = reverseNumber(originalNumber);

    if (!isNaN(reversedNumber)) {
      reversedNumberInput.value = reversedNumber;
    } else {
      reversedNumberInput.value = "Invalid input. Please provide a valid number.";
    }
  }