export let getNDigit = (num: number): number => {
  return Math.floor(
    Math.pow(10, num - 1) +
      Math.random() * (Math.pow(10, num) - Math.pow(10, num - 1) - 1)
  );
};

export const getRandomBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomFloatBetween = (min: number, max: number): number => {
  return Math.random() * (max - min + 1) + min;
};

export const getNRandomBetweenWithReplace = (n: number, min: number, max: number): Array<number> => {
  let numbers: Array<number> = new Array<number>(n);
  for (var i = 0; i < n; i++) {
    numbers[i] = getRandomBetween(min, max);
  }
  return numbers;
};

export const getNRandomBetweenWithoutReplace = (n: number, min: number, max: number): Array<number> => {
  let numbers: Array<number> = new Array<number>();
  while (numbers.length < n) {
    let currentNum = getRandomBetween(min, max);
    if (!numbers.includes(currentNum)) {
      numbers.push(currentNum);
    }
  }
  return numbers;
};
