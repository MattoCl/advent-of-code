const { readFileSync } = require("fs");

const elfCalories = readFileSync("./input.txt", "utf-8");

function getLargestSum(elfCalories) {
  let largestSum = 0;
  let currentSum = 0;
  elfCalories = elfCalories.split("\n");
  for (let i = 0; i < elfCalories.length; i++) {
    if (elfCalories[i] === "") {
      if (currentSum > largestSum) {
        largestSum = currentSum;
      }
      currentSum = 0;
    } else {
      currentSum += parseInt(elfCalories[i]);
    }
  }
  return largestSum;
}

console.log("Largest sum:", getLargestSum(elfCalories));
