// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {

    let temp;
    const map = {};

    for (let i = 0; i < nums.length; i++) {

        temp = target - nums[i];

        if (map[temp]) {
            return [map[temp], i];
        } else {
            map[nums[i]] = i;
        }

    }

}

twoSum([2,7,11,15], 9) // [0,1]