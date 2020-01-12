class Vector{
  constructor(x, y, w, size){
    this.pos = createVector(x, y);
    this.arr = new Array(size);
    this.w = w;
    this.generate(size);
  }

  length(){
    return this.arr.length;
  }

  at(i){
    return this.arr[i];
  }

  generate(){
    let elementWidth = this.w / this.arr.length;
    for (var i = 0; i < this.arr.length; i++) {
    		this.arr[i] = new Element(this.pos.x + i * elementWidth, this.pos.y, elementWidth, floor(random(MAX_VALUE)), TURQUOISELIGHT);
    }
  }

  draw(){
    for (let element of this.arr) {
      element.draw();
    }
  }

  update(){
    /*
    if (this.isBubbleSortRunning){
      this.runBubbleSort();
    }
    else if (this.isBubbleSortRunning){
      this.runMergeSort();
    }
    */
  }

  reset(){
    this.currGreen = 0;
    this.bubbleLast = this.arr.length - 2;
    this.firstIndex = 0;
    this.isBubbleSortRunning = false;
    this.isMergeSortRunning = false;
    for (var i = 0; i < this.arr.length; i++) {
      this.arr[i].setColor(BLUE);
    }
  }

  shuffle(){
    this.sorted = false;
    for (var k = 0; k < this.arr.length * 3; k++) {
      var i = floor(random(0, this.arr.length));
      var j = floor(random(0, this.arr.length));
      var tmp = this.arr[i].data;
      this.arr[i].data = this.arr[j].data;
      this.arr[j].data = tmp;
    }
  }

  isSorted(){
    for (var i = 0; i < this.arr.length - 1; i++) {
      if (this.arr[i].data > this.arr[i + 1].data){
        return false;
      }
    }
    return true;
  }





  // Bubble-sort simulation

  runSorted(){
    if (this.currGreen == this.arr.length){
      return;
    }
    this.arr[this.currGreen].changeColor(0, 150, 0);
    this.currGreen++;
  }

  runBubble(){
    if (this.runCheckPair()){
      this.runSwap(this.firstIndex);
    }
    this.firstIndex++;
  }

  runCheckPair(){
    checks++;
    this.arr[this.firstIndex].changeColor(250, 10, 180);
    this.arr[this.firstIndex + 1].changeColor(250, 10, 180);
    return this.arr[this.firstIndex].data > this.arr[this.firstIndex + 1].data;
  }

  runSwap(){
    var tmp = this.arr[this.firstIndex].data;
    this.arr[this.firstIndex].data = this.arr[this.firstIndex + 1].data;
    this.arr[this.firstIndex + 1].data = tmp;
    this.arr[this.firstIndex].show();
    this.arr[this.firstIndex + 1].show();
  }

  runBubbleSort(){
    if (this.isSorted()){
      this.runSorted();
      return;
    }
    if (this.firstIndex <= this.bubbleLast){
      this.runBubble();
    }
    else if (this.bubbleLast >= 0){
      for (var i = 0; i < this.bubbleLast + 1; i++) {
        this.arr[i].changeColor(50, 50, 50);
      }
      this.arr[this.bubbleLast + 1].changeColor(100, 100, 100);
      this.arr[this.bubbleLast + 1].show();
      this.bubbleLast--;
      this.firstIndex = 0;
    }
  }

  startBubbleSort(){
    this.isBubbleSortRunning = true;
  }
  // End of Bubble-sort simulation

  // merge-sort simulation
  startMergeSort(){
    this.isMergeSortRunning = true;
  }

  runMergeSort(){
    if (this.isSorted()){
      this.runSorted();
      return;
    }
    mergeSort(this.arr, n, 0, n - 1);
  }
  // End of merge-sort simulation
}
