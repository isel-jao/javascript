const { el } = require("date-fns/locale");

function findEvenIndex(arr) {
  let index = -1;
  let lSum = 0;
  let rSum = arr.reduce((v, acc) => acc + v);
  arr.forEach((val, i) => {
    rSum -= val;
    if (lSum == rSum) index = i;
    lSum += val;
  });
  return index;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));

// 20 10 30 10 10 15 35
// 0 110
//
