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
    app.ctx.beginPath();
    app.ctx.strokeStyle = 'black';
    app.ctx.fillStyle = this.backColor;
    app.ctx.rect(this.pos.x, this.pos.y, this.width, this.value);
    app.ctx.stroke();
    app.ctx.fill();

    if (this.arrSize <= MIN_ARRAY_SIZE_SHOW_VALUES) {
      app.ctx.font = '20px Arial';
      app.ctx.textAlign = 'center'; 
      app.ctx.fillStyle = 'white';
      app.ctx.fillText(this.value, this.pos.x + this.width / 2, this.pos.y);
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
