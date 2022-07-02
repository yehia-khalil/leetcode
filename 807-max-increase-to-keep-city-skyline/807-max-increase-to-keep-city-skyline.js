/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let count=0;
  let colMemo=new Array(grid[0].length);
  
    for(let i = 0 ; i < grid[0].length ; i++){
      let rowMax=getMaxRow(grid,i);
      
      for(let j = 0 ; j < grid.length ; j++){
        
        if(colMemo[j]) {
          let max = Math.min(rowMax,colMemo[j]);
          if(grid[i][j]<max) {
            count += max-grid[i][j];
          }
        } else { 
          colMemo[j] = getMaxCol(grid,j);
          let max = Math.min(rowMax,colMemo[j]);
          if(grid[i][j]<max) {
            count+=max-grid[i][j];
          }
        }

      }
    }
  return count;
};

function getMaxCol(grid,col){
  return Math.max(...grid.map((elem,index)=>elem[col]));
}

function getMaxRow(grid,row){
  return Math.max(...grid[row]);
}