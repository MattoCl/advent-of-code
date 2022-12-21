import { readFileSync } from "fs";
const input: string = readFileSync("./input.txt", "utf-8");

const NUM_OF_CHAR_BEFORE_MESSAGE = 14;

const part1 = () => {
  for (let i = 0; i < input.length; i++) {
    if (
      new Set(input.slice(i, i + NUM_OF_CHAR_BEFORE_MESSAGE)).size ===
      input.slice(i, i + NUM_OF_CHAR_BEFORE_MESSAGE).length
    ) {
      return i + NUM_OF_CHAR_BEFORE_MESSAGE;
    }
  }
};

console.log(part1());
