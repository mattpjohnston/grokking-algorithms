function quicksort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const pivot = array[0];
    const rest = array.slice(1);

    const less = rest.filter((x) => x <= pivot);
    const greater = rest.filter((x) => x > pivot);

    return [...quicksort(less), pivot, ...quicksort(greater)];
  }
}

console.log(quicksort([10, 5, 2, 3]));
