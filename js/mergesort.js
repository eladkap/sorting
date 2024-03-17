async function merge(array, low, m, high) {
  array.setBackcolor(low, high, BLUE);
  let n1 = m - low + 1;
  let n2 = high - m;
  let ia = 0;
  let ib = 0;
  let ic = low;

  let leftArr = new MyArray(n1);
  let rightArr = new MyArray(n2);

  for (let i = 0; i < n1; i++) {
    leftArr[i] = array.arr[low + i].value;
  }
  for (let i = 0; i < n2; i++) {
    rightArr[i] = array.arr[m + 1 + i].value;
  }

  while (ia < n1 && ib < n2) {
    await Utils.sleep(delayInMilliSec);
    if (leftArr[ia] <= rightArr[ib]) {
      array.arr[ic].value = leftArr[ia];
      ia++;
    } else {
      array.arr[ic].value = rightArr[ib];
      ib++;
    }
    ic++;
  }
  while (ia < leftArr.length) {
    await Utils.sleep(delayInMilliSec);
    array.arr[ic].value = leftArr[ia];
    ia++;
    ic++;
  }
  while (ib < rightArr.length) {
    await Utils.sleep(delayInMilliSec);
    array.arr[ic].value = rightArr[ib];
    ib++;
    ic++;
  }
}

async function mergeSortAux(array, low, high) {
  if (low >= high) {
    return;
  }
  let m = Math.floor((low + high) / 2);
  await mergeSortAux(array, low, m);
  await mergeSortAux(array, m + 1, high);
  await merge(array, low, m, high);
}

async function mergeSort(array) {
  await mergeSortAux(array, 0, array.length() - 1);
}
