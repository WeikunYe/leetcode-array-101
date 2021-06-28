// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
     var result = [];
    for(let i=1; i<nums.length+1; i++){
        if(!nums.includes(i)){
            result.push(i);
        }
    }

    return result;
};


var nums = [4,3,2,7,8,2,3,1];

var result = findDisappearedNumbers(nums);

console.log(result);