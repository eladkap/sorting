class MyArray {
  constructor(x, y, width, size) {
    this.pos = new Vector(x, y);
    this.arr = new Array(size);
    this.width = width;
    this.generate(size);
  }

  length() {
    return this.arr.length;
  }

  elements() {
    return this.arr;
  }

  values() {
    return this.arr.map(element => element.value);
  }

  get(i) {
    return this.arr[i].value;
  }

  generate() {
    for (var i = 0; i < this.arr.length; i++) {
      this.arr[i] = new Element(
        this.pos.x + i * this.width,
        this.pos.y,
        i,
        this.width,
        Math.floor(Utils.randomRange(0, MAX_VALUE)),
        TURQUOISELIGHT,
        this.arr.length
      );
    }
  }

  getValues() {
    let values = [];
    for (let i = 0; i < this.arr.length; i++) {
      values.push(this.arr[i].value);
    }
    return values;
  }

  setValues(values) {
    for (let i = 0; i < this.length(); i++) {
      this.arr[i].setValue(values[i]);
    }
  }

  shuffle() {
    this.sorted = false;
    for (var k = 0; k < this.arr.length * 3; k++) {
      var i = floor(random(0, this.arr.length));
      var j = floor(random(0, this.arr.length));
      var tmp = this.arr[i].value;
      this.arr[i].value = this.arr[j].value;
      this.arr[j].value = tmp;
    }
  }

  isSorted() {
    for (var i = 0; i < this.arr.length - 1; i++) {
      if (this.arr[i].value > this.arr[i + 1].value) {
        return false;
      }
    }
    return true;
  }

  draw() {
    for (let element of this.arr) {
      element.draw();
    }
  }

  setBackcolor(start, end, col) {
    for (let i = start; i <= end; i++) {
      this.arr[i].setBackcolor(col);
    }
  }

  copy() {
    return new MyArray(this.x, this.y, this.pos, this.arr.length);
  }
}
