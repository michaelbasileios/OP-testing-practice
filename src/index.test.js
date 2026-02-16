import { capitalize } from "./index.js";

test("capital test", () => {
  expect(capitalize("bomb")).toBe("Bomb");
});
