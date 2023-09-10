import caesarCipher from "./caesarCipher";

test('cipher', () => {
  expect(caesarCipher('Zz!', 3)).toBe('Cc!');
});