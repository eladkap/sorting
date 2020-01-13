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

    setVector(vector){
        this.vector = vector;
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
            setEnabled(btnSort, true);
            setEnabled(btnSort, true);
            setEnabled(sliderArraySize, true);
            setEnabled(btnGenerate, true);
            return;
        }
        if (this.iterationIndex <= this.bubbleIndex){
            this.runBubble();
        }
        else if (this.bubbleIndex >= 0){
            for (var i = 0; i < this.bubbleIndex + 1; i++) {
                this.vector.arr[i].setColor(TURQUOISELIGHT);
            }
            this.vector.arr[this.bubbleIndex + 1].setColor(PURPLE);
            this.vector.arr[this.bubbleIndex + 1].draw();
            this.bubbleIndex--;
            this.iterationIndex = 0;
        }
    }

    runSorted(){
        if (this.currIndexInSortedArray == this.vector.arr.length){
            for (let element of this.vector.elements()){
                element.setColor(TURQUOISELIGHT);
            }
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
        for (let i = 0; i < this.vector.length(); i++){
            if (i != this.iterationIndex && i != this.iterationIndex + 1 && i < this.bubbleIndex + 1){
                this.vector.arr[i].setColor(TURQUOISELIGHT);
            }
        }
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