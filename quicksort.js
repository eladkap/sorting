async function partition(vector, start, end){
    for (let i = start; i < end; i++){
      //states[i] = 1;
    }
  
    let pivotIndex = start;
    let pivotValue = vector.arr[end].value;
    //states[pivotIndex] = 0;
    for (let i = start; i < end; i++){
      if (vector.arr[i].value < pivotValue){
        await sleep(delayInMilliSec);
        swap(vector.arr, i, pivotIndex);
        //states[pivotIndex] = -1;
        pivotIndex++;
        //states[pivotIndex] = 0;
      }
    }
    swap(vector.arr, pivotIndex, end);
  
    for (let i = start; i < end; i++){
      if (i != pivotIndex){
        //states[i] = -1;
      }
    }
  
    return pivotIndex;
  }
  
  async function quickSortAux(vector, start, end){
    if (start >= end){
      return;
    }
    let index = await partition(vector, start, end);
    //states[index] = -1;
  
    // Perform quicksort on both sub-arrays in parallel
    await Promise.all([
        quickSortAux(vector, start, index - 1), 
        quickSortAux(vector, index + 1, end)
    ]);
  
    //await quickSort(vector, start, index - 1);
    //await quickSort(vector, index + 1, end);
  }

  async function quickSort(vector){
      quickSortAux(vector, 0, vector.length() - 1);
  }
  