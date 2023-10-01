function sortStringAlphabetically(inputString) {
  if (typeof inputString !== "string") {
    return "Invalid input. Please provide a valid string.";
  }
  const sortedString = inputString.split("").sort().join("");
  return sortedString;
}

function sortAndDisplay() {
  const originalStringInput = document.getElementById("originalString");
  const sortedStringInput = document.getElementById("sortedString");

  const originalString = originalStringInput.value;
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(originalString)) {
    alert("Invalid input. Please provide a string without numbers.");
    originalStringInput.value = "";
    sortedStringInput.value = "";
    return;
  }

  const sortedString = sortStringAlphabetically(originalString);
  sortedStringInput.value = sortedString;
}