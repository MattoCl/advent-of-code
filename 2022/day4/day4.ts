import { readFileSync } from "fs";
import { betweenPart1, betweenPart2 } from "./utils";
const input: string[] = readFileSync("./input.txt", "utf-8").split("\n");

const part1 = (input: string[]) => {
  let NumOfElfesThatOverlap: number = 0;
  for (let i = 0; i < input.length; i++) {
    const splitInput = input[i].split(/,|-/).map(Number);
    if (
      betweenPart1(splitInput[0], splitInput[1], splitInput[2], splitInput[3])
    )
      NumOfElfesThatOverlap++;
  }
  console.log(NumOfElfesThatOverlap);
};

const part2 = (input: string[]) => {
  let NumOfElfesThatOverlap: number = 0;
  for (let i = 0; i < input.length; i++) {
    const splitInput = input[i].split(/,|-/).map(Number);
    if (
      !betweenPart2(splitInput[0], splitInput[1], splitInput[2], splitInput[3])
    )
      NumOfElfesThatOverlap++;
  }
  console.log(NumOfElfesThatOverlap);
};

part1(input);
part2(input);
