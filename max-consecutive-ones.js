// Q: Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    nums = nums.join("");
    var onesArray = nums.split(0);

    var result = 0;

    onesArray.forEach(element => {
        if (element.length > result){
            result = element.length;
        }
    });

    return result;

};

var nums = [1,0,1,1,0,1];

var result = findMaxConsecutiveOnes(nums);

console.log(result);