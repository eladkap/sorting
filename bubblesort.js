async function bubble(vector, k){
    for (let i = 0; i < k; i++){
        if (vector.arr[i].value > vector.arr[i + 1].value){
            vector.setBackcolor(0, k, TURQUOISELIGHT);
            vector.arr[i].setBackcolor(YELLOW);
            vector.arr[i + 1].setBackcolor(YELLOW);
            await sleep(delayInMilliSec);
            swap(vector.arr, i, i + 1);
        }
    }
}

async function bubbleSort(vector){
    for (let k = vector.arr.length - 1; k >= 1; k--){
        await bubble(vector, k);
        vector.arr[k].setBackcolor(PURPLE);
    }
}
