async function heapify(array, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && array.arr[largest].value < array.arr[left].value) {
    largest = left;
  }

  if (right < n && array.arr[largest].value < array.arr[right].value) {
    largest = right;
  }

  array.setBackcolor(0, i - 1, TURQUOISELIGHT); // n-1
  array.arr[i].setBackcolor(YELLOW);
  array.arr[largest].setBackcolor(YELLOW);
  if (largest != i) {
    await Utils.sleep(delayInMilliSec);
    Utils.swap(array.arr, i, largest);
    await heapify(array, n, largest);
  }
}

async function createMaxHeap() {
  let n = array.length();
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(array, n, i);
  }
}

async function extractElements(array) {
  let n = array.length();
  for (let i = n - 1; i >= 1; i--) {
    Utils.swap(array.arr, i, 0);
    array.arr[i].setBackcolor(PURPLE);
    await heapify(array, i, 0);
  }
}

async function heapSort(array) {
  await createMaxHeap(array);
  await extractElements(array);
}
