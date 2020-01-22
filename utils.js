function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startSortFunc(){
    for (let i=0; i<3; i++){
        await sleep(1000);
        console.log(i);
    }
}

function finishFunc(){
    console.log('Sort finished.')
}


async function runSortFunction(){
    startSortFunc().then(finishFunc);    
}


function swap(arr, i, j){
    let tmp = arr[i].value;
    arr[i].value = arr[j].value;
    arr[j].value = tmp;
}



