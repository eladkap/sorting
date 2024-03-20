async function partition(array, start, end) {
  array.setBackcolor(start, end, YELLOW);

  let pivotIndex = start;
  let pivotValue = array.arr[end].value;
  array.arr[pivotIndex].setBackcolor(BLUE);

  for (let i = start; i < end; i++) {
    if (array.arr[i].value < pivotValue) {
      await Utils.sleep(app.delayInMilliSec);
      Utils.swap(array.arr, i, pivotIndex);
      array.arr[pivotIndex].setBackcolor(TURQUOISELIGHT);
      pivotIndex++;
      array.arr[pivotIndex].setBackcolor(BLUE);
    }
  }
  Utils.swap(array.arr, pivotIndex, end);

  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      array.arr[i].setBackcolor(TURQUOISELIGHT);
    }
  }

  return pivotIndex;
}

async function quickSortAux(array, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(array, start, end);

  // Perform quicksort on both sub-arrays in parallel
  await Promise.all([
    quickSortAux(array, start, index - 1),
    quickSortAux(array, index + 1, end),
  ]);
}

async function quickSort(array) {
  await quickSortAux(array, 0, array.length() - 1);
}
