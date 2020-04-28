async function partition(vector, start, end) {
  vector.setBackcolor(start, end, YELLOW);

  let pivotIndex = start;
  let pivotValue = vector.arr[end].value;
  vector.arr[pivotIndex].setBackcolor(BLUE);

  for (let i = start; i < end; i++) {
    if (vector.arr[i].value < pivotValue) {
      await sleep(delayInMilliSec);
      swap(vector.arr, i, pivotIndex);
      vector.arr[pivotIndex].setBackcolor(TURQUOISELIGHT);
      pivotIndex++;
      vector.arr[pivotIndex].setBackcolor(BLUE);
    }
  }
  swap(vector.arr, pivotIndex, end);

  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      vector.arr[i].setBackcolor(TURQUOISELIGHT);
    }
  }

  return pivotIndex;
}

async function quickSortAux(vector, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(vector, start, end);
  //vector.arr[index].setBackcolor(BLUE);

  // Perform quicksort on both sub-arrays in parallel

  await Promise.all([
    quickSortAux(vector, start, index - 1),
    quickSortAux(vector, index + 1, end),
  ]);

  //await quickSort(vector, start, index - 1);
  //await quickSort(vector, index + 1, end);
}

async function quickSort(vector) {
  await quickSortAux(vector, 0, vector.length() - 1);
}
