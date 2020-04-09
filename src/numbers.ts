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
