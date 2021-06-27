// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === nums[i+1] && i+1<nums.length){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

var nums = [0,0,1,1,1,2,2,3,3,4];
var result = removeDuplicates(nums);

console.log(result);