// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/



/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    var result = [];

    for(let i=0; i<nums.length; i++){

        if(nums[i]%2 == 0){

            result.push(nums[i]);

            nums.splice(i,1);

            i--;
        }
    }

    return [...result, ...nums];


};



var nums = [3,1,2,4];

var result = sortArrayByParity(nums);

console.log(result);