import { readFileSync } from "fs";

const input: string = readFileSync("./input.txt", "utf-8").replace(/\r/g, "");

const [rawStacks, rawMoves] = input
  .split("\n\n")
  .map((values) => values.split("\n"));

const parsedStacks: string[][] = rawStacks.map((line) =>
  [...line].filter((value, index) => index % 4 === 1)
);

const indexes: string[] = parsedStacks.pop()!;
const stacks: any = {};

for (const line of parsedStacks) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      if (!stacks[indexes[i]]) {
        stacks[indexes[i]] = [];
      }
      stacks[indexes[i]].unshift(line[i]);
    }
  }
}

const moves: { count: number; from: number; to: number }[] = [];
for (const move of rawMoves) {
  const match = /move (\d+) from (\d+) to (\d+)/g.exec(move);
  if (match !== null)
    moves.push({
      count: parseInt(match[1]),
      from: parseInt(match[2]),
      to: parseInt(match[3]),
    });
}

const part1 = () => {
  const localStack = JSON.parse(JSON.stringify(stacks));
  for (const move of moves) {
    for (let index = 0; index < move.count; index++) {
      const crate = localStack[move.from].pop();
      localStack[move.to].push(crate);
    }
  }

  console.log(
    indexes
      .map((value) => {
        const stack = localStack[value];
        return stack[stack.length - 1];
      })
      .join("")
  );
};

const part2 = () => {
  const localStack = JSON.parse(JSON.stringify(stacks));
  for (const move of moves) {
    const crates = localStack[move.from].splice(-move.count, move.count);
    localStack[move.to] = localStack[move.to].concat(crates);
  }

  console.log(
    indexes
      .map((value) => {
        const stack = localStack[value];
        return stack[stack.length - 1];
      })
      .join("")
  );
};

part1();
part2();
