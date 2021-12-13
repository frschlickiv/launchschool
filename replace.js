let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++)
    if (arr[i][j] === 6) {
      arr[i][j] = 606;
    }
  console.log(arr);
}
