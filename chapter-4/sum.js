function sum(arr) {
  let total = 0;
  for (let item of arr) total += item;
  return total;
}

console.log(sum([1, 2, 3, 4]));
