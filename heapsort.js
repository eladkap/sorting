async function heapify(vector, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && vector.arr[largest].value < vector.arr[left].value) {
    largest = left;
  }

  if (right < n && vector.arr[largest].value < vector.arr[right].value) {
    largest = right;
  }

  vector.setBackcolor(0, n - 1, TURQUOISELIGHT);
  vector.arr[i].setBackcolor(YELLOW);
  vector.arr[largest].setBackcolor(YELLOW);
  if (largest != i) {
    await sleep(delayInMilliSec);
    swap(vector.arr, i, largest);
    await heapify(vector, n, largest);
  }
}

async function createMaxHeap() {
  let n = vector.length();
  for (let i = floor(n / 2) - 1; i >= 0; i--) {
    await heapify(vector, n, i);
  }
}

async function extractElements(vector) {
  let n = vector.length();
  for (let i = n - 1; i >= 1; i--) {
    swap(vector.arr, i, 0);
    await heapify(vector, i, 0);
  }
}

async function heapSort(vector) {
  await createMaxHeap(vector);
  await extractElements(vector);
}
