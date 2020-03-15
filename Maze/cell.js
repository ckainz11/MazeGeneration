class Cell{
   width;
   walls;
   ypos;
   xpos;
   visited;

    constructor(xpos, ypos){
        this.width = 20;
        this.walls = new Array(4).fill(true);
        
        this.xpos = xpos;
        this.ypos = ypos;
        this.visited = false;
    }
    show(s){
      
        //top line
        if(this.walls[0]){
            s.stroke(255);
            s.line(this.xpos+0, this.ypos+0, this.xpos+this.width, this.ypos+0);
        }
        else{
            s.stroke(141,0,211);
            s.line(this.xpos+0, this.ypos+0, this.xpos+this.width, this.ypos+0);
        }
        //right
        if(this.walls[1]){
            s.stroke(255);
            s.line(this.xpos+this.width, this.ypos+0, this.xpos+this.width, this.ypos+this.width);
        }
        else{
            s.stroke(141,0,211);
            s.line(this.xpos+this.width, this.ypos+0, this.xpos+this.width, this.ypos+this.width);
        }
        //left
        if(this.walls[2]){
        s.stroke(255);
        s.line(this.xpos, this.ypos, this.xpos, this.ypos+this.width);
        }
        else{
            s.stroke(141,0,211);
        s.line(this.xpos, this.ypos, this.xpos, this.ypos+this.width);
        }
        //bottom
        if(this.walls[3]){
            s.stroke(255);
        s.line(this.xpos, this.ypos+this.width, this.xpos+this.width, this.ypos+this.width);
        }
        else{
            s.stroke(141,0,211);
            s.line(this.xpos, this.ypos+this.width, this.xpos+this.width, this.ypos+this.width);
        }
        if(this.visited ===true){

            s.fill(75,0,130);
            s.noStroke();
            s.rect(this.xpos, this.ypos, this.width, this.width);
        }
    }
    mark(){
        this.visited = true;
    }
    removeWall(wall){
        this.walls[wall]=false;
    }
}