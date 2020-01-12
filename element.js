class Element{
  constructor(x, y, w, value, backColor){
    this.pos = createVector(x, y);
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

  setColor(backColor){
    this.backColor = backColor;
  }
}
