// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3574/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    var result = nums.map(item => item * item);

result.sort((x, y) => x - y);

return result;
};