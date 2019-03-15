function mergesort(arr, start, end) {
  if (start >= end) return;
  let mid = start + Math.floor((end - start) / 2);
  mergesort(arr, start, mid);
  mergesort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  let left = arr.slice(start, mid + 1);
  let right = arr.slice(mid + 1);

  let nl = mid - start + 1;
  let nr = end - mid;

  let i = (j = 0);
  let k = start;

  while (i < nl && j < nr) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }

  while (i < nl) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < nr) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

const a = [2, 4, 1, 6, 8, 5, 3, 7];
mergesort(a, 0, 7);
console.log(a);
