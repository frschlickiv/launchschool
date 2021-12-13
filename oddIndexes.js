let arr = ["a", "abcd", "abcde", "abc", "ab"];

const discarder = (array) => {
  let lengths = array.map((index) => {
    return index.length;
  });
  let odds = lengths.filter((num) => num % 2 === 1);
  console.log(odds);
};

discarder(arr);
