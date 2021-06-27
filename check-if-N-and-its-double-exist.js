// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/


/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {

    var result = false;

    for(let i=0; i<arr.length; i++){

        for(let j=0; j<arr.length; j++){

            if(arr[j] * 2 === arr[i] && j !== i){
                
                console.log(arr[j] + '__' + arr[i]);
                result = true;
                break;
            }
        }
    }

    return result;

};

var arr = [-2,0,10,-19,4,6,-8];
var result = checkIfExist(arr);

console.log(result);