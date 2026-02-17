import { capitalize, reverseString, calculator, cipher } from "./index.js";

describe("capitalize", () => {
  test("regular lowercase string", () => {
    expect(capitalize("sam")).toBe("Sam");
  });

  test("empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("strings that start with numbers", () => {
    expect(capitalize("241sarang")).toBe("241sarang");
  });

  test("strings that already start with uppercase", () => {
    expect(capitalize("Bob")).toBe("Bob");
  });

  test("single character string", () => {
    expect(capitalize("s")).toBe("S");
  });

  test("multiple words", () => {
    expect(capitalize("snuggle muffin")).toBe("Snuggle muffin");
  });
});

describe("reverseString", () => {
  test("single lowercase word", () => {
    expect(reverseString("boss")).toBe("ssob");
  });
});

describe("calculator", () => {
  test("add", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test("subtract", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test("multiply", () => {
    expect(calculator.multiply(7, 3)).toBe(21);
  });

  test("divide", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
});

describe("caesarCipher", () => {
  test("single word", () => {
    expect(cipher("smith", 3)).toBe("vplwk");
  });
});
