function quicksort(arr, start, end) {
  if (start >= end) return;
  let c = choosePivot(start, end);
  [arr[start], arr[c]] = [arr[c], arr[start]];
  let p = partition(arr, start, end);
  quicksort(arr, start, p - 1);
  quicksort(arr, p + 1, end);
  return;
}

/* Partition Implementation 1 */
function partition(arr, start, end) {
  let lt = start;
  for (curr = start + 1; curr <= end; curr++) {
    if (arr[curr] <= arr[start]) {
      [arr[lt + 1], arr[curr]] = [arr[curr], arr[lt + 1]];
      lt++;
    }
  }
  [arr[start], arr[lt]] = [arr[lt], arr[start]];
  return lt;
}

function choosePivot(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

const a = [2, 4, 1, 6, 8, 5, 3, 7, 7, 7];
const b = [2, 1];
const c = [1];
quicksort(a, 0, 9);
quicksort(b, 0, 1);
quicksort(b, 0, 0);
console.log(a);
console.log(b);
console.log(c);

/* Partition Implementation 2
function partition(arr, start, end) {
  let lt = start + 1;
  let gt = end;
  while (lt <= gt) {
    while (arr[lt] <= arr[start]) lt++;
    while (arr[gt] > arr[start]) gt--;
    if (lt < gt) {
      [arr[lt], arr[gt]] = [arr[gt], arr[lt]];
      lt++;
      gt--;
    }
  }
  [arr[start], arr[gt]] = [arr[gt], arr[start]];
  return gt;
}
*/
