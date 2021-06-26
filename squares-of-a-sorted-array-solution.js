// Q: Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {

    var result = nums.map(item => item * item);

    result.sort((x, y) => x - y);

    return result;
    
};


var nums = [-4,-1,0,3,10];

var result = sortedSquares(nums);

console.log(result);