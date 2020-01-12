class BubbleSorter{
    constructor(vector){
        this.vector = vector;
        this.reset();
    }

    reset(){
        this.isrunning = false;
        this.bubbleIndex = vector.length() - 1;
        this.iteration = 0;
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

    runStep(){
        if (!this.isrunning){
            return;
        }
    }

    setRunning(value){
        this.isrunning = value;
    }
}