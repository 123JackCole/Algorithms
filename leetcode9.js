/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = (x) => {
    if (x < 0) return false;
    if (x < 10) return true;
    
    const digits = [];
    
    while (x > 0) {
        
        digits.push(x % 10);
        x = Math.floor(x / 10);
        
    }
    
    const length = digits.length;
    for (let i = 0; i < length / 2; i++) {
        
        if (digits[i] !== digits[length - 1 - i]) return false;
        
    }
    
    return true;
};