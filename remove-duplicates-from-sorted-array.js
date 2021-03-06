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


// Twp-pointer solution(TPS)

var removeDuplicatesTPS = function(nums) {
  
    var writePointer = 1;

    for(let readPointer = 1; readPointer<nums.length; readPointer++){

        if(nums[readPointer] != nums[readPointer - 1]){

            nums[writePointer] = nums[readPointer];

            console.log(nums);

            writePointer++;
        }

        //console.log(nums);
    }

    return writePointer;


};

var nums = [0,0,1,1,1,2,2,3,3,4];
//var result = removeDuplicates(nums);
var resultTPS = removeDuplicatesTPS(nums);

console.log(resultTPS);