class Element{
  constructor(x, y, index, w, value, backColor){
    this.pos = createVector(x, y);
    this.index = index;
    this.w = w;
    this.value = value;
    this.backColor = backColor;
  }

  draw(){
    strokeWeight(0);
    stroke(BLACK);
    fill(this.backColor);
    rect(this.pos.x - this.w / 2, this.pos.y, this.w, this.value);
    
    if (vector.length() < 16){
      fill(BLACK);
      textAlign(CENTER);
      textStyle(NORMAL);
      textSize(this.w / 5);
      text(this.value, this.pos.x, this.pos.y);
    }
  }

  setValue(value){
    this.value = value;
  }

  getIndex(){
    return this.index;
  }

  setBackcolor(backColor){
    this.backColor = backColor;
  }
}
