export const getDateBetween = (start: Date, end: Date): Date => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const getRandomDate = () => {
  var from = new Date(1947, 8, 26);
  var to = new Date(2500, 8, 26);
  var randomDate = from.getTime() + Math.random() * (to.getTime() - from.getTime());
  return new Date(randomDate);
};