// Source: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {

    for(let i=0; i<arr.length; i++){

        if(i+1<arr.length){

            arr[i] = arr[i+1];

            for(let j=i+1; j<arr.length; j++){

                if(arr[j] > arr[i]){

                    arr[i] = arr[j];

                }
            }

        }else{
            arr[i] = -1;
        }

    }

    return arr;
    
};

var  arr = [17,18,5,4,6,1];

var result = replaceElements(arr);

console.log(result);