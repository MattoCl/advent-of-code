export function betweenPart1(
  num1: number,
  num2: number,
  num3: number,
  num4: number
): boolean {
  return (num1 >= num3 && num2 <= num4) || (num1 <= num3 && num2 >= num4);
}

export function betweenPart2(
  num1: number,
  num2: number,
  num3: number,
  num4: number
): boolean {
  return num2 < num3 || num1 > num4;
}
