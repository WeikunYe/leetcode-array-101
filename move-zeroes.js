// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var moveZeroes = function(nums) {

    for(let i=0; i<nums.length; i++){

        if(nums[i] == 0){

            for(let j=i+1; j<nums.length; j++){

                if(nums[j] != 0){
                    nums[i] = nums[j];
                    nums[j] = 0;
                    break;
                }
            }

        }
    }

    return nums;
    
};


var nums = [0,1,0,3,12];

var result =  moveZeroes(nums);

console.log(result);