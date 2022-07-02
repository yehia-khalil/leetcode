/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let count=0;
    for(let i = 0 ; i < grid[0].length ; i++){
      for(let j = 0 ; j < grid.length ; j++){
        let max = getMax(grid,i,j);
        if(grid[i][j]<max){
          count+=max-grid[i][j];
        }
      }
    }
  return count;
};

function getMax(grid,row,col){
  let rowMax = Math.max(...grid[row]);
  let colMax = Math.max(...grid.map((elem,index)=>elem[col]));
  return Math.min(rowMax,colMax);
}