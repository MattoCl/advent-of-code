const { readFileSync } = require("fs");

const RockPaperScissorsInput = readFileSync("./input.txt", "utf-8").split("\n");

const THROWS = {
  "A X": [4, 3],
  "A Y": [8, 4],
  "A Z": [3, 8],
  "B X": [1, 1],
  "B Y": [5, 5],
  "B Z": [9, 9],
  "C X": [7, 2],
  "C Y": [2, 6],
  "C Z": [6, 7],
};

const solve = (input) => {
  let sumPart1 = 0;
  let sumPart2 = 0;
  for (game of input) {
    const [part1, part2] = game.split(" ");
    const [part1Score, part2Score] = THROWS[`${part1} ${part2}`];
    sumPart1 += part1Score;
    sumPart2 += part2Score;
  }
  return [`Answer to part 1 is: ${sumPart1}. Answer to part 2 is: ${sumPart2}`];
};

console.log(solve(RockPaperScissorsInput));
