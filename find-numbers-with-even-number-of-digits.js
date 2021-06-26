// Q: Given an array nums of integers, return how many of them contain an even number of digits.
// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {

    var count = 0;

    nums.forEach( item => {

        stringItem = item.toString();

        if(stringItem.length % 2 === 0) count ++;

    });

    return count;
};

var nums = [12,345,2,6,7896];

var result = findNumbers(nums);

console.log(result);