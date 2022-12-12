import { common } from "@mui/material/colors";
import { letterSpacing } from "@mui/system";
import { readFileSync } from "fs";
import { convertCharToNumber } from "../day3/utils";

const input: string[] = readFileSync("./input.txt", "utf-8").split("\n");

const part1 = (input: string[]): void => {
  let totalScore: number[] = [];
  input.map((line) => {
    const firstHalf: string[] = [...line.slice(0, line.length / 2)];
    const secondHalf: string[] = [...line.slice(line.length / 2)];
    const intersection = firstHalf.filter((value) =>
      secondHalf.includes(value)
    );
    const intersectionWithoutDuplicates = [...new Set(intersection)];
    totalScore.push(convertCharToNumber(intersectionWithoutDuplicates[0]));
  });
  console.log(totalScore.reduce((a, b) => a + b, 0));
};

const NUMBER_OF_BACKPACKS: number = 3;

const part2 = (input: string[]): void => {
  let totalScore: number[] = [];
  //This works for x amount of backpacks, just increase constant
  for (let i = 0; i < input.length; i += NUMBER_OF_BACKPACKS) {
    const backpack = [[...input[i]], [...input[i + 1]], [...input[i + 2]]];

    let intersection = backpack[0].filter((value) =>
      backpack[1].includes(value)
    );

    for (let i = 0; i < backpack.length; i++) {
      intersection = intersection.filter((value) =>
        backpack[i].includes(value)
      );
    }

    const intersectionWithoutDuplicates = [...new Set(intersection)];
    totalScore.push(convertCharToNumber(intersectionWithoutDuplicates[0]));
  }
  console.log(totalScore.reduce((a, b) => a + b, 0));
};

part1(input);
part2(input);
