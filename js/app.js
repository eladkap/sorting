class Application {
    constructor() {
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.btnGenerate = null;
        this.btnReverse = null;
        this.btnSort = null;
        this.sortSelector = null;
        this.arraySizeSlider = null;
        this.sortAlgo = null;
        this.array = null;
        this.delayInMilliSec = null;
    }

    setButtons() {
        this.btnGenerate = document.getElementById('btn-generate-arr');
        this.btnReverse = document.getElementById('btn-reverse-arr');
        this.btnSort = document.getElementById('btn-sort-arr');
    }

    setEnabled(control, value) {
        control.disabled = !value;
        let color = value ? 'var(--btn-backcolor)' : 'var(--btn-backcolor-disabled)';
        control.style.background = color;
    }

    setSortSelector() {
        this.sortSelector = document.getElementById('sort-selector');
    }

    setArraySizeSlider() {
        this.arraySizeSlider = document.getElementById('array-size-slider');
        this.chooseArraySize(this.arraySizeSlider.value);
    }

    chooseArraySize(arraySizeValue) {
        console.log(`Array size: ${arraySizeValue}`);
        let arraySize = arraySizeValue;
        this.setArray(arraySize);
    }

    chooseSortOption(event) {
        this.sortAlgo = event.target.value;
        console.log(`Sorting algo chosen: ${this.sortAlgo}`);
    }

    setSortAlgo() {
        this.sortAlgo = this.sortSelector.value;
    }

    generateArray() {
        this.setArray();
    }
      
    reverseArray() {
        let n = this.array.length();
        for (let i = 0; i < Math.floor(n / 2); i++) {
          Utils.swap(this.array.arr, i, n - i - 1);
        }
        this.updateCanvas();
    }

    setArray() {
        let canvasRect = this.canvas.getBoundingClientRect();
        let arraySize = Number(this.arraySizeSlider.value);
        let elementWidth = canvasRect.width / arraySize;
        this.array = new MyArray(
          canvasRect.x,
          canvasRect.y,
          elementWidth,
          arraySize
        );
        this.delayInMilliSec = MIN_DELAY_IN_MS + MAX_DELAY_IN_MS - Utils.transformlValue(MIN_ARRAY_SIZE, MAX_ARRAY_SIZE, MIN_DELAY_IN_MS, MAX_DELAY_IN_MS, arraySize);
        console.log(this.delayInMilliSec);
        this.updateCanvas();
    }

    draw() {
        this.array.draw();
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    updateCanvas() {
        this.clearCanvas();
        this.array.draw();
    }

    async startSort() {
        console.log('sort');
        this.setEnabled(this.btnGenerate, false);
        this.setEnabled(this.btnReverse, false);
        this.setEnabled(this.btnSort, false);
        this.setEnabled(this.arraySizeSlider, false);
      
        if (this.sortAlgo == 'BubbleSort') {
          console.log('Run BubbleSort');
          await bubbleSort(this.array);
        } else if (this.sortAlgo == 'QuickSort') {
          console.log('Run QuickSort');
          await quickSort(this.array);
        } else if (this.sortAlgo == 'MergeSort') {
          console.log('Run MergeSort');
          await mergeSort(this.array);
        } else if (this.sortAlgo == 'HeapSort') {
          console.log('Run HeapSort');
          await heapSort(this.array);
        }
    }

    async finishSort() {
        console.log('Sort finished.');
        await this.markArraySorted();
        this.setEnabled(this.btnGenerate, true);
        this.setEnabled(this.btnReverse, true);
        this.setEnabled(this.btnSort, true);
        this.setEnabled(this.arraySizeSlider, true);
    }

    async markArraySorted() {
        for (let i = 0; i < this.array.length(); i++) {
          this.array.arr[i].setBackcolor(GREEN);
          await Utils.sleep(this.delayInMilliSec);
        }
        await Utils.sleep(1000);
        this.array.setBackcolor(0, this.array.length() - 1, TURQUOISELIGHT);
    }

    async runSort() {
        if (this.array.isSorted()) {
          window.alert('Array is already sorted.');
        }
        else {
          await this.startSort();
          this.finishSort();
        }
    }

    stopSorting() {
        location.reload();
    }

    setup() {
        this.setButtons();
        this.setSortSelector();
        this.setArraySizeSlider();
        this.setSortAlgo();
        this.setArray();
        this.draw();
    }

    update() {
        this.updateCanvas();
        requestAnimationFrame(update);
    }
}