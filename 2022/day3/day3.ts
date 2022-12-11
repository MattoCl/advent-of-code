import { readFileSync } from "fs";

const input: string[] = readFileSync("./input.txt", "utf-8").split("\n");

const findCommonLetters = (str1: string, str2: string): string => {
  //return letters that appear in both strings
  const letters1: string[] = str1.split("");
  const letters2: string[] = str2.split("");
  const commonLetters: string[] = [];
  for (let i = 0; i < letters1.length; i++) {
    if (letters2.indexOf(letters1[i]) !== -1) {
      commonLetters.push(letters1[i]);
    }
  }
  return [...new Set(commonLetters.join(""))].toString();
};

const splitStringInHalf = (str: string): string => {
  const firstHalf: string = str.slice(0, str.length / 2);
  const secondHalf: string = str.slice(str.length / 2, str.length);
  return findCommonLetters(firstHalf, secondHalf);
};

const sumCommonLetterValues = (input: string[]): number => {
  let arrayOfCommonLetters: string[] = [];
  for (const rucksack of input) {
    arrayOfCommonLetters.push(splitStringInHalf(rucksack));
  }
  let totalCharacterValues: number = arrayOfCommonLetters
    .map((str) => {
      if (str === str.toLowerCase()) return str.charCodeAt(0) - 96;
      else return str.toLowerCase().charCodeAt(0) - 96 + 26;
    })
    .reduce((a, b) => a + b);
  return totalCharacterValues;
};

const findElfGroup = (input: string[]): number => {
  let arrayOfCommonLetters: string[] = [];
  for (let i = 0; i < input.length; i += 3) {
    let rucksack: string = input[i] + input[i + 1] + input[i + 2];
    arrayOfCommonLetters.push(splitStringInHalf(rucksack));
  }
  console.log(arrayOfCommonLetters);
  return 0;
};

console.log(sumCommonLetterValues(input));
console.log(findElfGroup(input));
