import calculator from "./calculator";

const c = calculator();

test('add', () => {
  expect(c.add(1, 2)).toBe(3);
});

test('subtract', () => {
  expect(c.subtract(1, 2)).toBe(-1);
});

test('divide', () => {
  expect(c.divide(4, 2)).toBe(2);
});

test('multiply', () => {
  expect(c.multiply(3, 2)).toBe(6);
});