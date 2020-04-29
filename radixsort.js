function getDigit(num, index) {
  return Math.floor(num / Math.pow(10, index)) % 10;
}

function countDigits(num) {
  let c = 0;
  while (num > 0) {
    c += 1;
    num = Math.floor(num / 10);
  }
  return c;
}

function countSort(vector, index) {
  let n = vector.length();
  let count = new Array(10);
  let output = new Array(n);

  for (let i = 0; i < n; i++) {
    let num = vector.arr[i].value;
    let digit = getDigit(num, index);
    count[digit]++;
  }

  for (let j = 1; j < 10; j++) {
    count[j] += count[j - 1];
  }

  let i = n - 1;
  while (i >= 0) {
    let num = vector.arr[i].value;
    let digit = getDigit(num, index);
    output[count[digit] - 1] = num;
    count[digit]--;
    i--;
  }

  for (let i = 0; i < n; i++) {
    vector.arr[i].value = output[i];
  }
}

function radixSort(vector) {
  let maxNum = 0;
  for (let i = 0; i < vector.length(); i++) {
    if (vector.arr[i].value > maxNum) {
      maxNum = vector.arr[i].value;
    }
  }
  let maxLen = countDigits(maxNum);
  for (let i = 0; i < maxLen; i++) {
    countSort(vector, i);
  }
}
