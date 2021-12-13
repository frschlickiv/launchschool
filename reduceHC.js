let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(strings) {
  return strings.reduce((prev, current) => {
    let nums = current.length;
    if (nums % 2 === 1) {
      prev.push(nums);
    }
    return prev;
  }, []);
}
