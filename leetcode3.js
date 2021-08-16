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

// /**
//  * @param {string} s
//  * @return {number}
//  */
//  const lengthOfLongestSubstring = (s) => {
    
//     // tracks most recent index of each letter
//     const map = new Map();
    
//     let longest = 0,
//         index = 0;
    
//     for (let i = 0; i < s.length; i++) {
        
//         // if the char is a duplicate, set the starting inddex to be 
//         // after the repeat character
//         if (map.has(s[i])) index = Math.max(index, map.get(s[i]) + 1);
        
//         // log the index of the current character
//         map.set(s[i], i);
        
//         // set the longest
//         longest = Math.max(longest, i - index + 1);
        
//     }
    
//     return longest;
    
// };