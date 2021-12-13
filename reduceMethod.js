const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// const total = prices.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// console.log(total);

const minNum = prices.reduce((min, current) => {
  if (current < min) {
    return current;
  }
  return min;
});

console.log(minNum);
