/**
 * @param {number} n
 * @return {number}
 */
 const climbStairs = (n) => {
    
    if (n === 1 || n === 2) return n;
    
    let a = 1,
        b = 2;
    
    for (let i = 2; i < n; i++) {
        
        [a, b] = [b, a + b];
        
    }
    
    return b;
};