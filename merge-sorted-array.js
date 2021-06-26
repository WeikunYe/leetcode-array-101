// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {

    for(let i = m+n-1; i >= m; i--){
        nums1[i] = nums2.pop()
    }
    nums1.sort((a,b) => a-b);
    
};


var nums1 = [1,2,3,0,0,0];
var m = 3;
var nums2 = [2,5,6];
var n = 3;

merge(nums1, m, nums2, n);