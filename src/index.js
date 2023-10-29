function decode(expr) {
  const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
  };

  let result = "";

  for (let i = 0; i < expr.length; i += 10) {
    let morseChar = "";
    const char = expr.slice(i, i + 10);

    if (char !== "**********") {
      for (let j = 0; j < char.length; j += 2) {
        const symbol = char[j] + char[j + 1];

        if (symbol === "10") {
          morseChar += ".";
        } else if (symbol === "11") {
          morseChar += "-";
        }
      }
      result += MORSE_TABLE[morseChar];
    } else {
      result += " ";
    }
  }

  return result;
}

module.exports = {
  decode,
};
