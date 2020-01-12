class BubbleSorter{
    constructor(vector){
        this.vector = vector;
        this.reset();
    }

    reset(){
        this.isrunning = false;
        this.bubbleIndex = vector.length() - 2;
        this.iterationIndex = 0;
        this.currIndexInSortedArray = 0;
    }

    start(){
        this.isrunning = true;
    }

    stop(){
        this.isrunning = false;
    }

    end(){
        return this.vector.isSorted();
    }

    isRunning(){
        return this.isrunning;
    }

    setRunning(value){
        this.isrunning = value;
    }

    run(){
        if (!this.isrunning){
            return;
        }
        if (this.end()){
            this.runSorted();
            return;
        }
        if (this.iterationIndex <= this.bubbleIndex){
            this.runBubble();
        }
        else if (this.bubbleIndex >= 0){
            for (var i = 0; i < this.bubbleIndex + 1; i++) {
                this.vector.arr[i].setColor(GRAY2);
            }
            this.vector.arr[this.bubbleIndex + 1].setColor(GRAY1);
            this.vector.arr[this.bubbleIndex + 1].draw();
            this.bubbleIndex--;
            this.iterationIndex = 0;
        }
    }

    runSorted(){
        if (this.currIndexInSortedArray == this.vector.arr.length){
            return;
        }
        this.vector.arr[this.currIndexInSortedArray].setColor(GREEN);
        this.currIndexInSortedArray++;
    }

    runBubble(){
        if (this.runCheckPair()){
            this.runSwap(this.iterationIndex);
        }
        this.iterationIndex++;
    }

    runCheckPair(){
        this.vector.arr[this.iterationIndex].setColor(RED);
        this.vector.arr[this.iterationIndex + 1].setColor(RED);
        return this.vector.arr[this.iterationIndex].value > this.vector.arr[this.iterationIndex + 1].value;
    }

    runSwap(){
        var tmp = this.vector.arr[this.iterationIndex].value;
        this.vector.arr[this.iterationIndex].value = this.vector.arr[this.iterationIndex + 1].value;
        this.vector.arr[this.iterationIndex + 1].value = tmp;
        this.vector.arr[this.iterationIndex].draw();
        this.vector.arr[this.iterationIndex + 1].draw();
    }
}