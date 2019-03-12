function mergesort(A) {
  const n = A.length;
  if (n < 2) return;
  const mid = Math.floor(n / 2);
  const left = A.slice(0, mid);
  const right = A.slice(mid);
  mergesort(left);
  mergesort(right);
  merge(left, right, A);
}

function merge(left, right, A) {
  const nL = left.length;
  const nR = right.length;
  let i = (j = k = 0);
  while (i < nL && j < nR) {
    if (left[i] < right[j]) {
      A[k] = left[i];
      i++;
      k++;
    } else {
      A[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < nL) {
    A[k] = left[i];
    i++;
    k++;
  }
  while (j < nR) {
    A[k] = right[j];
    j++;
    k++;
  }
}

const a = [2, 4, 1, 6, 8, 5, 3, 7];
mergesort(a);
console.log(a);
