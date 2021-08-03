/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 const strStr = (haystack, needle) => {
    
    if (!needle) return 0;
    
    let firstIndex = 0;
    for (let i = 0; i < haystack.length; i++) {
        
        if (haystack[i] === needle[0]) {
            
            firstIndex = i;
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) break;
                if (j === needle.length - 1) return firstIndex;
            }
        
        }
    }
    
    return -1;
};