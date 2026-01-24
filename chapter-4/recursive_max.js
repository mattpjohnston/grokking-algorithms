function max(arr) {
  if (arr.length === 0) return None;
  if (arr.length === 1) return arr[0];
  else {
    const max_num = max(arr.slice(1));
    if (arr[0] > max_num) return arr[0];
    else return max_num;
  }
}

console.log(max([1, 2, 3, 4, 5]));
