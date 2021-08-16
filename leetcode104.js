/**
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = (nums) => {
    
    const set = new Set();
    
    for (num of nums) {
        
        set.has(num) ? set.delete(num) : set.add(num);
        
    }
    
    for (val of set.values()) return val;
    
};