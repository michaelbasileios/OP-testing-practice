import {
  capitalize,
  reverseString,
  calculator,
  cipher,
  analyzeArray,
} from "./index.js";

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

  test("wrapping", () => {
    expect(cipher("xyz", 3)).toBe("abc");
  });

  test("punctuation", () => {
    expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("analyze array", () => {
  const array = [1, 8, 3, 4, 2, 6];
  const analysis = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  test("array length", () => {
    expect(analyzeArray(array).length).toBe(6);
  });

  test("array minimum", () => {
    expect(analyzeArray(array).min).toBe(1);
  });

  test("array maximum", () => {
    expect(analyzeArray(array).max).toBe(8);
  });

  test("array average", () => {
    expect(analyzeArray(array).average).toBe(4);
  });

  test("the entire object", () => {
    expect(analyzeArray(array)).toEqual(analysis);
  });
});
