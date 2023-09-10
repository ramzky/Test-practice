import capitalize from "./capitalize";
//const capitalize = import('./capitalize');

test('capitalize first letter', () => {
  expect(capitalize('play')).toBe('Play');
});