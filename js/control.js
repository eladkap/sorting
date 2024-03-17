class Control {
  constructor(x, y, w, h) {
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;
  }

  draw() {
    noStroke();
    fill(TURQUOISE);
    rect(0, 0, SCREEN_WIDTH, HEADER_HEIGHT);

    // array size title
    fill(WHITE);
    textAlign(CENTER);
    textStyle(NORMAL);
    textSize(FONT_SIZE2);
    text("Array Size", SCREEN_WIDTH * 0.23, HEADER_HEIGHT * 0.4);
  }
}
