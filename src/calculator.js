function calculator() {
  const add = (n1, n2) => n1 + n2;
  const subtract = (n1, n2) => n1 - n2;
  const divide = (n1, n2) => n1 / n2;
  const multiply = (n1, n2) => n1 * n2;

  return {
    add,
    subtract,
    divide,
    multiply
  };
}

module.exports = calculator;