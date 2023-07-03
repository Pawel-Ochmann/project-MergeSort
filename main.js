const testArray1 = [1, 3, 5];
const testArray2 = [0, 2, 4];

// function mergeSort(array) {

// }

function merge(a, b) {
  let arraySorted = [];
  while (a.length > 0 || b.length > 0) {
    if (a[0] <= b[0] || b[0] === undefined) {
      arraySorted.push(a.shift());
    } else arraySorted.push(b.shift());
  }
  return arraySorted;
}

console.log(merge(testArray1, testArray2));
