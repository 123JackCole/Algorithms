/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLastWord = (s) => {
    
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        
        if (s[i] !== ' ') {
            while (s[i] !== ' ' && i >= 0) {
                count++;
                i--;
            }
            return count;
        }
        
    }
    
};