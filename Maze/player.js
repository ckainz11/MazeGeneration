class Player{
    width;
    x;
    y;
    constructor(){
        this.width = 4;
        this.x= 8;
        this.y = 8;
    }
    show(s){

        s.fill(0,255,0);

        s.rect(this.x, this.y, this.width, this.width);


    }
    update(adjacents, s){


        let cell = s.random(adjacents);
        this.x = cell.xpos +8;
        this.y = cell.ypos +8;
        return cell;




    }
    goBack(cell){
        let c = cell;
        this.x = cell.xpos +8;
        this.y = cell.ypos +8;
    }

}