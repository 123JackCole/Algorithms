/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 const dfs = (board, x, y) => {
    
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) return;
    
    if (board[x][y] === 'O') {
        board[x][y] = '#';
    } else {
        return;
    }
    
    dfs(board, x + 1, y);
    dfs(board, x - 1, y);
    dfs(board, x, y + 1);
    dfs(board, x, y - 1);
    
}

const solve = (board) => {
    
    const length = board[0].length;
    const height = board.length;
    
    // move along edges and check for 'O's
    for (let i = 0; i < height; i++) {

        if (i === 0) {
            for (let j = 0; j < length; j++) {
                // check top row
                if (board[0][j] === 'O') {
                    dfs(board, 0 , j);
                }  
                // check bottom row
                if (board[height - 1][j] === 'O') {
                    dfs(board, height - 1 , j);
                }
            }
        }
            
        dfs(board, i , 0);
        dfs(board, i , length - 1);
        
    }
    
    // replaces everything on the board with 'X's
    // except for spots changed to '#' by DFS
    for (let x = 0; x < height; x++) {
        for (let y = 0; y < length; y++) {
            
            if (board[x][y] === '#') {
                board[x][y] = 'O';
            } else {
                board[x][y] = 'X';
            }
            
        }
    }
    
};