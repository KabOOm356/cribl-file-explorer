export const getRandomDateBetween = (start: Date, end: Date) => {
  const diff = end.getTime() - start.getTime();
  return new Date(start.getTime() + Math.random() * diff);
};

export const getRandomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return getRandomDateBetween(start, end);
};
