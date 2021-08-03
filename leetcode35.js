/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    
    const length = nums.length;
    
    for (let i = 0; i < length; i++) {
        
        if (nums[i] === target) return i;
        
        if (nums[i] > target) return i;
        
    }
    
    return length;
    
};