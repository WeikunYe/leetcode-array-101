// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3230/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let ones = 0, prevOnes = 0;
    let zeroes = 0, hasZero = false;
    let max = 0;
    
    for (let k of nums) {
        if (k) {
            ones++;
            zeroes = 0;
        } else {
            hasZero = true;
            prevOnes = (++zeroes === 1) ? ones : 0;
            ones = 0;
        }
        max = Math.max(max, hasZero + ones, !!prevOnes * (prevOnes + 1) + ones);
    }
    
    return max;
    
};


var nums = [1,0,1,1,0];
var result = findMaxConsecutiveOnes(nums);

console.log(result);