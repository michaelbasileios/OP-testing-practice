import { capitalize } from "./index.js";

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
