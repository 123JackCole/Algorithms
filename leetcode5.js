/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// function to round to x digits
const round = (number, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * factorOfTen) / factorOfTen;
}

const findMedianSortedArrays = (nums1, nums2) => {
    
    const length = nums1.length + nums2.length;
    const location = Math.floor(length / 2);
    const isEven = length % 2 === 0;
    
    let [i, j] = [0, 0];
    
    // console.log(location, isEven);
    
    while (i + j < location) {
        
        // if (i + j === location) {
        //     if (isEven) {
        //         return round(nums1[i] + nums2[j] / 2, 5);
        //     } else {
        //         return nums1[i] < nums2[j] ? nums1[i] : nums2[j];
        //     }
        // }
        
        if (nums1[i] < nums2[j]) {
            i++; 
            continue;
        }
        
        if (nums1[i] > nums2[j]) {
            j++; 
            continue;
        }
        
        if (nums1[i] === nums2[j]) { 
            i++; 
            j++; 
            continue;
        }
        
    }
    
    console.log(i, nums1[i], j, nums2[j])
    
    if (isEven) {
        return round(nums1[i] + nums2[j] / 2, 5);
    } else {
        return nums1[i] < nums2[j] ? nums1[i] : nums2[j];
    }
    
    
};