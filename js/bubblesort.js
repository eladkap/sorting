async function bubble(array, k) {
  for (let i = 0; i < k; i++) {
    await Utils.sleep(app.delayInMilliSec);
    array.setBackcolor(0, k, TURQUOISELIGHT);
    array.arr[i].setBackcolor(YELLOW);
    array.arr[i + 1].setBackcolor(YELLOW);
    if (array.get(i) > array.get(i + 1)) {
      Utils.swap(array.arr, i, i + 1);
    }
  }
}

async function bubbleSort(array) {
  for (let k = array.length() - 1; k >= 1; k--) {
    await bubble(array, k);
    array.arr[k].setBackcolor(PURPLE);
  }
}
