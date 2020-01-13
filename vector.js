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

  elements(){
    return this.arr;
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
      if (this.arr[i].value > this.arr[i + 1].value){
        return false;
      }
    }
    return true;
  }

  draw(){
    for (let element of this.arr) {
      element.draw();
    }
  }

  setAllElement
}
