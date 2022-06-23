function tailAndHead(arr) {
  const tail = [];
  for (let i = 1; i < arr.length; i++) {
    tail.push(+`${arr[i - 1]}`.at(-1) + +`${arr[i]}`.at(0));
  }
  console.log("tail", tail);
  return tail.reduce((v, acc) => v * acc, 1);
}

console.log(tailAndHead([111, 2345, 66, 78, 900]));
