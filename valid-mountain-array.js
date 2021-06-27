// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {

    const length = arr.length
    let i = 0
  
    while (i + 1 < length && arr[i] < arr[i + 1]) i++
  
    if (i === 0 || i === length - 1) return false
  
    while (i + 1 < length && arr[i] > arr[i + 1]) i++
  
    return i === length - 1
};


var arr = [3,5,5];
var result = validMountainArray(arr);

console.log(result);