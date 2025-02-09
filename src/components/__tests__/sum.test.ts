import sum from "../sum";

test("sum function should calculate the sum of two numbers", () => {
    const result = sum(2, 4);

    // Assertion (using Jest's built-in expect)
    expect(result).toBe(6);
});
