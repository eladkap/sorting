class Element {
  constructor(x, y, index, width, value, backColor, arrSize) {
    this.pos = new Vector(x, y);
    this.index = index;
    this.width = width;
    this.value = value;
    this.backColor = backColor;
    this.arrSize = arrSize;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = this.backColor;
    ctx.rect(this.pos.x, this.pos.y, this.width, this.value);
    ctx.stroke();
    ctx.fill();

    if (this.arrSize <= 16) {
      ctx.font = '20px Arial';
      ctx.textAlign = 'center'; 
      ctx.fillStyle = 'white';
      ctx.fillText(this.value, this.pos.x + this.width / 2, this.pos.y);
    }
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
