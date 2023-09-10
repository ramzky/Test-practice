

function caesarCipher(str, sKey) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.codePointAt(i) >= 65 && str.codePointAt(i) <= 90)
    newStr += String.fromCodePoint((((str.codePointAt(i) - 65) + sKey) % 26) + 65);
    else if (str.codePointAt(i) >= 97 && str.codePointAt(i) <= 122)
      newStr += String.fromCodePoint((((str.codePointAt(i) - 97) + sKey) % 26) + 97);
    else
      newStr += str[i];
  }
  return newStr;
}

module.exports = caesarCipher;