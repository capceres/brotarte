import { getRandomItem } from "../utils/random.js";

describe("getRandomItem", () => {
  test("devuelve un elemento del array", () => {
    const array = ["a", "b", "c"];
    const result = getRandomItem(array);

    expect(array).toContain(result);
  });

  test("no devuelve undefined", () => {
    const array = [1, 2, 3];
    const result = getRandomItem(array);

    expect(result).not.toBeUndefined();
  });
});
