class Control{
    constructor(x, y, w, h){
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
    }

    draw(){
        noStroke();
        fill(TURQUOISE);
        rect(0, 0, SCREEN_WIDTH, HEADER_HEIGHT);
        /*
        fill(YELLOW);
        noStroke();
        textSize(FONT_SIZE2);
        textStyle(NORMAL);
        textFont(FONT_FAMILY);
        textAlign(CENTER, CENTER);
        */
    }
}