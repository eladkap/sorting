class Element {
  constructor(x, y, index, w, value, backColor) {
    this.pos = new Vector(x, y);
    this.index = index;
    this.w = w;
    this.value = value;
    this.backColor = backColor;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = this.backColor;
    ctx.rect(this.pos.x - this.w / 2, this.pos.y, this.w, this.value);
    ctx.stroke();
    ctx.fill();
  }

  setValue(value) {
    this.value = value;
  }

  getIndex() {
    return this.index;
  }

  setBackcolor(backColor) {
    this.backColor = backColor;
  }
}
