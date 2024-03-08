class Utils {
  static sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  static async startSortFunc() {
    for (let i = 0; i < 3; i++) {
      await Utils.sleep(1000);
      console.log(i);
    }
  }
  
  static finishFunc() {
    console.log("Sort finished.");
  }
  
  static async runSortFunction() {
    startSortFunc().then(finishFunc);
  }
  
  static swap(arr, i, j) {
    let tmp = arr[i].value;
    arr[i].value = arr[j].value;
    arr[j].value = tmp;
  }  
}

