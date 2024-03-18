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

  static randomRange(a, b) {
    return Math.random() * (b - a) + a;
  }

  static transformlValue(a, b, x, y, val) {
    /**
     * Transform value from range [a,b] to range [x,y]
     */
    return Math.round(((val - a) * (y - x)) / (b - a) + x);
  }
}

