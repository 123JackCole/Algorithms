/**
 * @param {number} n
 * @return {number}
 */
 const fib = (n) => {
    
    if (n === 0 || n === 1) return n;
    
    let left = 0,
        right = 1;
    
    for (let i = 2; i <= n; i++) {
        
        [left, right] = [right, left + right];
        
    }
    
    return right;
    
};