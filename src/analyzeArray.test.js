import analyzeArray from "./analyzeArray";

let someArr = [1,8,3,4,2,6];

test('average', () => {
  expect(analyzeArray(someArr).average).toBe(4);
});

test('min', () => {
  expect(analyzeArray(someArr).min).toBe(1);
});

test('max', () => {
  expect(analyzeArray(someArr).max).toBe(8);
});

test('length', () => {
  expect(analyzeArray(someArr).length).toBe(6);
});