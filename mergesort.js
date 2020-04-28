async function merge(vector, low, m, high) {
  vector.setBackcolor(low, high, BLUE);
  let n1 = m - low + 1;
  let n2 = high - m;
  let ia = 0;
  let ib = 0;
  let ic = low;

  let leftArr = new Array(n1);
  let rightArr = new Array(n2);

  for (let i = 0; i < n1; i++) {
    leftArr[i] = vector.arr[low + i].value;
  }
  for (let i = 0; i < n2; i++) {
    rightArr[i] = vector.arr[m + 1 + i].value;
  }

  while (ia < n1 && ib < n2) {
    await sleep(delayInMilliSec);
    if (leftArr[ia] <= rightArr[ib]) {
      vector.arr[ic].value = leftArr[ia];
      ia++;
    } else {
      vector.arr[ic].value = rightArr[ib];
      ib++;
    }
    ic++;
  }
  while (ia < leftArr.length) {
    await sleep(delayInMilliSec);
    vector.arr[ic].value = leftArr[ia];
    ia++;
    ic++;
  }
  while (ib < rightArr.length) {
    await sleep(delayInMilliSec);
    vector.arr[ic].value = rightArr[ib];
    ib++;
    ic++;
  }
}

async function mergeSortAux(vector, low, high) {
  if (low >= high) {
    return;
  }
  let m = floor((low + high) / 2);
  await mergeSortAux(vector, low, m);
  await mergeSortAux(vector, m + 1, high);
  await merge(vector, low, m, high);
}

async function mergeSort(vector) {
  await mergeSortAux(vector, 0, vector.length() - 1);
}
