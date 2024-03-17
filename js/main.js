var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

canvas.width = CANVAS_WIDTH; // window.innerWidth;
canvas.height = CANVAS_HEIGHT; // window.innerHeight;


/* Global Variables */
var array;
var btnGenerate;
var btnSort;
var btnReverse;
var sortSelector;
var arraySizeSlider;

var sortAlgo;
// var fps = FPS;
var delayInMilliSec = MIN_DELAY_IN_MS;

function setup() {
  setButtons();
  setSortSelector();
  setArraySizeSlider();

  // SCREEN_WIDTH = windowWidth;
  // SCREEN_HEIGHT = windowHeight;
  // createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  // frameRate(fps);
  
  setSortAlgo();
  setArray();
  draw();
}

function draw() {
  array.draw();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateCanvas() {
  clearCanvas();
  array.draw();
}

function setSortAlgo() {
  sortAlgo = sortSelector.value;
}

function setArray() {
  let canvasRect = canvas.getBoundingClientRect();
  let arraySize = Number(arraySizeSlider.value);
  array = new MyArray(
    canvasRect.x,
    canvasRect.y,
    canvasRect.height * 0.8,
    arraySize
  );
  updateCanvas();
}

function setButton(pos, label, action) {
  let btn = createButton(label);
  btn.position(pos.x, pos.y);
  btn.mousePressed(action);
  return btn;
}

function setButtons() {
  btnGenerate = document.getElementById('btn-generate-arr');
  btnReverse = document.getElementById('btn-reverse-arr');
  btnSort = document.getElementById('btn-sort-arr');
}

function setEnabled(control, value) {
  control.disabled = !value;
  let color = value ? 'var(--btn-backcolor)' : 'var(--btn-backcolor-disabled)';
  control.style.background = color;
}

function setSortSelector() {
  sortSelector = document.getElementById('sort-selector');
}

function setArraySizeSlider() {
  arraySizeSlider = document.getElementById('array-size-slider');
  chooseArraySize(arraySizeSlider.value);
}

function chooseSortOption(event) {
  sortAlgo = event.target.value;
  console.log(`Sorting algo chosen: ${sortAlgo}`);
}

function chooseArraySize(arraySizeValue) {
  let arraySize = arraySizeValue;
  setArray(arraySize);
}

async function startSort() {
  console.log("sort");
  setEnabled(btnGenerate, false);
  setEnabled(btnReverse, false);
  setEnabled(btnSort, false);
  setEnabled(arraySizeSlider, false);

  if (sortAlgo == "BubbleSort") {
    console.log("Run BubbleSort");
    await bubbleSort(array);
  } else if (sortAlgo == "QuickSort") {
    console.log("Run QuickSort");
    await quickSort(array);
  } else if (sortAlgo == "MergeSort") {
    console.log("Run MergeSort");
    await mergeSort(array);
  } else if (sortAlgo == "HeapSort") {
    console.log("Run HeapSort");
    await heapSort(array);
  }
}

function stopSort() {
  console.log("stop");
  noLoop();
  setEnabled(btnSort, true);
}

async function finishSort() {
  console.log("Sort finished.");
  await markArraySorted();
  setEnabled(btnGenerate, true);
  setEnabled(btnReverse, true);
  setEnabled(btnSort, true);
  setEnabled(arraySizeSlider, true);
}

async function markArraySorted() {
  for (let i = 0; i < array.length(); i++) {
    array.arr[i].setBackcolor(GREEN);
    await Utils.sleep(delayInMilliSec);
  }
  await Utils.sleep(1000);
  array.setBackcolor(0, array.length() - 1, TURQUOISELIGHT);
}

async function runSort() {
  await startSort();
  finishSort();
}

function generateArray() {
  setArray();
}

function reverseArray() {
  let n = array.length();
  for (let i = 0; i < Math.floor(n / 2); i++) {
    Utils.swap(array.arr, i, n - i - 1);
  }
  updateCanvas();
}

function update() {
  updateCanvas();
  requestAnimationFrame(update);
}

setup();

update();
