let array = [3, 5, 7];

function sumOfSquares(arr) {
  let reduced = arr.reduce((previousVal, currentVal) => {
    return previousVal + currentVal * currentVal;
  }, 0);

  console.log(reduced);
}

sumOfSquares(array);
