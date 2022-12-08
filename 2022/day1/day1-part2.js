const { readFileSync } = require("fs");

const elfCalories = readFileSync("./input.txt", "utf-8").split("\n");

function getLargestSum(elfCalories) {
  let largestSum = [];
  let currentSum = 0;
  for (let i = 0; i < elfCalories.length; i++) {
    if (elfCalories[i] === "") {
      largestSum.push(currentSum);
      currentSum = 0;
    } else {
      currentSum += parseInt(elfCalories[i]);
    }
  }

  return largestSum
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((partialSum, a) => partialSum + a, 0);
}

console.log("Sum of three most calorie dense elfs", getLargestSum(elfCalories));
