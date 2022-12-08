const { readFileSync } = require("fs");

const elfCalories = readFileSync("./input.txt", "utf-8").split("\n");

function getLargestSum(elfCalories) {
  let largestSum = 0;
  let currentSum = 0;
  for (food of elfCalories) {
    if (isNaN(parseInt(food))) {
      if (currentSum > largestSum) {
        largestSum = currentSum;
      }
      currentSum = 0;
    } else {
      currentSum += parseInt(food);
    }
  }
  return largestSum;
}

console.log("Largest sum:", getLargestSum(elfCalories));
