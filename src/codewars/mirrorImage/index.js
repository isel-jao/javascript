function mirrorImage(arr) {
  const isMirror = (num1, num2) => num1 == [...`${num2}`].reverse().join("");
  for (let i = 1; i < arr.length; i++) {
    if (isMirror(arr[i], arr[i - 1])) return [arr[i - 1], arr[i]];
  }
  return [-1, -1];
}

console.log(mirrorImage([454, 86, 57, 75, 16, 88]));
