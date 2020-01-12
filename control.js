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
    }
}