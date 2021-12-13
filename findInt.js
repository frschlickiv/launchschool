let things = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];

const findIntegers = (array) => {
  const filtArr = array.filter((num) => {
    return Number.isInteger(num);
  });
  console.log(filtArr);
};

findIntegers(things);
