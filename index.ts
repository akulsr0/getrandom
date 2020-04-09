import { getNDigit } from './src/numbers';
import { getRandomBetween } from './src/numbers';
import { getRandomFloatBetween } from './src/numbers';

import {
  getName,
  getMaleName,
  getFemaleName,
  getMaleFirstName,
  getFemaleFirstName,
  getLastName,
  getIndianName,
  getIndianMaleName,
  getIndianFemaleName,
  getIndianMaleFirstName,
  getIndianFemaleFirstName,
  getIndianLastName,
} from './src/names';

import { getDateBetween } from './src/date';

module.exports.getNDigit = (n: number): number => {
  return getNDigit(n);
};
module.exports.getRandomBetween = (min: number, max: number): number => {
  return getRandomBetween(min, max);
};

module.exports.getRandomFloatBetween = (min: number, max: number): number => {
  return getRandomFloatBetween(min, max);
};

module.exports.getName = (): string => {
  return getName();
};

module.exports.getMaleName = (): string => {
  return getMaleName();
};

module.exports.getFemaleName = (): string => {
  return getFemaleName();
};

module.exports.getMaleFirstName = (): string => {
  return getMaleFirstName();
};

module.exports.getFemaleFirstName = (): string => {
  return getFemaleFirstName();
};

module.exports.getLastName = (): string => {
  return getLastName();
};

module.exports.getIndianName = (): string => {
  return getIndianName();
};

module.exports.getIndianMaleName = (): string => {
  return getIndianMaleName();
};

module.exports.getIndianFemaleName = (): string => {
  return getIndianFemaleName();
};

module.exports.getIndianMaleFirstName = (): string => {
  return getIndianMaleFirstName();
};

module.exports.getIndianFemaleFirstName = (): string => {
  return getIndianFemaleFirstName();
};

module.exports.getIndianLastName = (): string => {
  return getIndianLastName();
};

module.exports.getDateBetween = (start: Date, end: Date): Date => {
  return getDateBetween(start, end);
};
