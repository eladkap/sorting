class Element {
  constructor(x, y, index, width, value, backColor) {
    this.pos = new Vector(x, y);
    this.index = index;
    this.width = width;
    this.value = value;
    this.backColor = backColor;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = this.backColor;
    ctx.rect(this.pos.x, this.pos.y, this.width, this.value);
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