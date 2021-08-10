/**
 * @param {character[][]} board
 * @return {boolean}
 */
 const isValidSudoku = (board) => {
    
    const map = {
        r1: {},
        r2: {},
        r3: {},
        r4: {},
        r5: {},
        r6: {},
        r7: {},
        r8: {},
        r9: {},
        c1: {},
        c2: {},
        c3: {},
        c4: {},
        c5: {},
        c6: {},
        c7: {},
        c8: {},
        c9: {},
        b1: {},
        b2: {},
        b3: {},
        b4: {},
        b5: {},
        b6: {},
        b7: {},
        b8: {},
        b9: {},
    }
    
    let currNum;
    let currBox;
    for (let i = 0; i < 9; i++) {
        
        for (let j = 0; j < 9; j++) {
            
            currNum = board[i][j];
            
            if (currNum !== '.') {
                
                // check rows
                if (map[`r${i}[${currNum}]`]) {
                    return false;
                } else {
                    map[`r${i}[${currNum}]`] = 1
                }
                
                // check cols
                if (map[`c${j}[${currNum}]`]) {
                    return false;
                } else {
                    map[`c${j}[${currNum}]`] = 1
                }
                
                if (i < 3 && j < 3) {
                    currBox = 1
                } else if (i < 3 && j < 6) {
                    currBox = 2
                } else if (i < 3 && j < 9) {
                    currBox = 3
                } else if (i < 6 && j < 3) {
                    currBox = 4
                } else if (i < 6 && j < 6) {
                    currBox = 5
                } else if (i < 6 && j < 9) {
                    currBox = 6
                } else if (i < 9 && j < 3) {
                    currBox = 7
                } else if (i < 9 && j < 6) {
                    currBox = 8
                } else if (i < 9 && j < 9) {
                    currBox = 9;
                }
                
                if (map[`${currBox}[${currNum}]`]) {
                    return false;
                } else {
                    map[`${currBox}[${currNum}]`] = 1
                }
                
                
            }
            
        }
        
    }
    
    return true;
    
};