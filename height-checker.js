//Source: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/


/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    var expected = [...heights];
    expected = expected.sort((a, b) => a - b);

    var result = 0;

    for(let i=0; i<heights.length; i++){
        if(heights[i] != expected[i]){
            result++;
        }
    }

    return result;
};


var heights = [1,1,4,2,1,3];
var result = heightChecker(heights);

console.log(result);