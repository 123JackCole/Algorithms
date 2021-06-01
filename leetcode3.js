/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = (s) => {
    
    let left = 0, 
        right = 0,
        currLength = 0,
        longest = 0;
    
    let map = {};
    
    const length = s.length;
    
    if (length === 1) return length;
    
    while (left < length) {
        
        if (map[s[right]]) {
            longest = Math.max(longest, currLength);
            currLength = 0;
            map = {};
            left++;
            right = left;
        } else {
            map[s[right]] = 1;
            right++;
            currLength++;
            if (right === length) {
                left++;
                right = left;
            }
        }
        
    }
    
    return longest;
    
};