let cells = [];
let player = new Player();
let nextCell;
let currentRow;
let currentCol;
let currentCell;
let visitedCells = [];
let sketch = function(s){
s.setup = function(){
s.createCanvas(600, 600);
s.frameRate(25);
    for(let i=0;i<30;i++){
        cells[i] = [];
        for(let j=0;j<30;j++){
            cells[i][j] = new Cell(20*j, 20*i);

        }
    }


}
s.draw = function(){
s.background(0);
    for(let i=0;i<cells.length;i++){
        for(let j=0;j<cells[i].length;j++){
            cells[i][j].show(s);
            if(player.x > cells[i][j].xpos&&player.y > cells[i][j].ypos&&player.x < cells[i][j].xpos + cells[i][j].width&&player.y < cells[i][j].ypos + cells[i][j].width){
                currentRow=i;
                currentCol=j;
                currentCell = cells[i][j];
            }
        }

        }
    cells[currentRow][currentCol].mark();
    
    player.show(s);



    let neighbors = getNeighbors();
    if(neighbors.length ===0){
        nextCell = visitedCells.splice(visitedCells.length-1, 1)[0];
        currentCell.removeWall(relation(currentCell, nextCell));
        nextCell.removeWall(opposite(relation(currentCell, nextCell)));
        player.goBack(nextCell);
       
        for(let k=1;k<60;k++){
            if(nextCell.xpos ===0){
                currentCol = 0;
            }
            else if(nextCell.xpos / k === 5) {
                currentCol = k;
            }

        }
        for(let l = 1;l<60;l++){
            if(nextCell.xpos ===0){
                currentRow = 0;
            }
            else if(nextCell.xpos / l === 5)
                currentRow = l;
        }


    }
    else{
     nextCell = player.update(neighbors, s);
     currentCell.removeWall(relation(currentCell, nextCell));
     nextCell.removeWall(opposite(relation(currentCell, nextCell)));
     visitedCells.push(cells[currentRow][currentCol]);
    }





}
}
function getNeighbors(){
    let neighbors = [];
    if(currentRow-1 >= 0&&cells[currentRow-1][currentCol].visited === false)
        neighbors.push(cells[currentRow-1][currentCol]);
    if(currentCol+1<30&&cells[currentRow][currentCol+1].visited === false)
        neighbors.push(cells[currentRow][currentCol+1]);
    if(currentRow+1<30&&cells[currentRow+1][currentCol].visited === false)
        neighbors.push(cells[currentRow+1][currentCol]);
    if(currentCol-1>=0&&cells[currentRow][currentCol-1].visited === false)
        neighbors.push(cells[currentRow][currentCol-1]);
    return neighbors;
}
function relation(current, next){
    //top
    if(next.ypos < current.ypos)
        return 0;
    //right
    if(next.xpos > current.xpos)
        return 1;
    //bottom
    if(next.ypos > current.ypos)
        return 3;
    //left
    if(next.xpos < current.xpos)
        return 2;
}
function opposite(input){
    if(input === 0)
        return 3;
    if(input === 1)
        return 2;
    if(input === 2)
        return 1;
    if(input == 3)
        return 0;
}
let maze = new p5(sketch);