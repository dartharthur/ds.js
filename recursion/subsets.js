function printSubsets(a, i, s, j) {
  if (i === a.length) {
    printArray(s, j);
    return;
  }

  printSubsets(a, i + 1, s, j);
  s[j] = a[i];
  printSubsets(a, i + 1, s, j + 1);
  return;
}

function printArray(s, j) {
  let result = '';
  for (let i = 0; i < j; i++) {
    result += s[i];
  }
  console.log(result);
}

const a = ['t', 'c', 'd', 'o'];
const n = a.length;
const s = new Array(n);

printSubsets(a, 0, s, 0);
