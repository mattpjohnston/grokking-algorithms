function binarySearch(arr, value) {
  let low = 0;
  high = arr.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let guess = arr[mid];
    if (guess === value) return mid;
    else if (guess > value) high = mid - 1;
    else low = mid + 1;
  }

  return "None";
}

const my_list = [1, 3, 5, 7, 9];

console.log(binarySearch(my_list, 3));
console.log(binarySearch(my_list, -1));
