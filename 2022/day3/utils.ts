export const convertCharToNumber = (char: string): number => {
  if (char === char.toLowerCase()) return char.charCodeAt(0) - 96;
  else return char.charCodeAt(0) - 64 + 26;
};
