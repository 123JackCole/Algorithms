/**
 * @param {string[]} strs
 * @return {string}
 */

// currenty pretty slow
 const longestCommonPrefix = (strs) => {
    
    let prefix = strs[0],
        temp = "",
        curr;
    
    for (let i = 1; i < strs.length; i++) {
        curr = strs[i];
        
        for (let j = 0; j < curr.length; j++) {
            
            if (prefix[j] === curr[j]) {
                temp += curr[j];
            } else {
                break;
            }
            
        }
        prefix = temp;
        temp = "";
        
    }
    
    return prefix;
    
};