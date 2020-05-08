export const getDateBetween = (start: Date, end: Date): Date => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const getRandomDate = () => {
  var from = new Date();
  var to = new Date(1947, 8, 26);
  var randomDate = from.getTime() + Math.random() * (to.getTime() - from.getTime());
  return new Date(randomDate);
};