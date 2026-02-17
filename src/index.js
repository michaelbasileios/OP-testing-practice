import "./styles.css";

function capitalize(string) {
  if (string.length === 0) {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : console.log("Cannot divide by zero")),
};

function cipher(string, shift) {
  const normalizedShift = ((shift % 26) + 26) % 26;

  return [...string]
    .map((char) => {
      const characterCode = char.charCodeAt(0);
      if (characterCode >= 65 && characterCode <= 90) {
        return String.fromCharCode(
          ((characterCode - 65 + normalizedShift) % 26) + 65,
        );
      }
      if (characterCode >= 97 && characterCode <= 122) {
        return String.fromCharCode(
          ((characterCode - 97 + normalizedShift) % 26) + 97,
        );
      }
      return char;
    })
    .join("");
}

export { capitalize, reverseString, calculator, cipher };
