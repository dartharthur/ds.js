function permute(a, i) {
  const n = a.length;
  if (i === n - 1) {
    printArray(a);
    return;
  }
  for (let j = i; j < n; j++) {
    swap(a, i, j);
    permute(a, i + 1);
    swap(a, i, j);
  }
  return;
}

function swap(a, i, j) {
  [a[i], a[j]] = [a[j], a[i]];
}

function printArray(a) {
  console.log(a.join(''));
}

const chars = ['b', 'c', 'e', 'f'];
permute(chars, 0);
