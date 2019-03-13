function quicksort(A, start, end) {
  if (start < end) {
    let pIndex = randomizedPartition(A, start, end);
    quicksort(A, start, pIndex - 1);
    quicksort(A, pIndex + 1, end);
  }
}

function randomizedPartition(A, start, end) {
  let randomPivotIndex = getRandomIndex(start, end);
  [A[randomPivotIndex], A[end]] = [A[end], A[randomPivotIndex]];
  return partition(A, start, end);
}

function partition(A, start, end) {
  let pivot = A[end];
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (A[i] <= pivot) {
      [A[i], A[pIndex]] = [A[pIndex], A[i]];
      pIndex++;
    }
  }
  [A[pIndex], A[end]] = [A[end], A[pIndex]];
  return pIndex;
}

function getRandomIndex(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

const a = [2, 4, 1, 6, 8, 5, 3, 7];
quicksort(a, 0, 7);
console.log(a);
