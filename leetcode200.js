/**
 * @param {character[][]} grid
 * @return {number}
 */

 const dfs = (grid, x, y) => {
        
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return;
    
    if (grid[x][y] === '1') {
        grid[x][y] = '0';
    } else {
        return;
    }
    
    dfs(grid, x - 1, y);
    dfs(grid, x + 1, y);
    dfs(grid, x, y - 1);
    dfs(grid, x, y + 1);
        
};

const numIslands = (grid) => {
    
    let count = 0;
    
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            if (grid[x][y] === '1') {
                count++;
                dfs(grid, x, y);
            }
        }
    }
    
    return count;
    
};