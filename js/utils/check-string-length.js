//Поиск случайного целого числа//
const getRandomInt = (min, max) => {
  if (min >= 0 && max >= 0) {
    if (min === max) {
      return max;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (Math.max(min, max) - Math.min(min, max) + 1)) + Math.min(min, max);
  }
};
getRandomInt(1, 10);

export { checkStringLength };
