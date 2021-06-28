// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    nums.sort((a, b) => b - a);

    for(let i=0; i<nums.length; i++){

        if(i+1<nums.length){

            if(nums[i] == nums[i+1]){
                nums.splice(i, 1);
                i--;
            }
        }
    }

    if(nums.length < 3){
        return nums[0];
    }else{
        return nums[2];
    }
};


var nums = [3,2,1];

var result = thirdMax(nums);

console.log(result);