// Find all pairs in an array whose sum is equal to 5

const NUM_ARR = [8, 6, 3, 4, 2, 9, 1];

// loop over the array and keep the numbers in a temp.
// loop over the array and add the number in temp with the consecutive other numbers
// if the sum equals to 5, push both the numbers to an array
// if not, the number in temp changes to the next value in array

function sumOfTwo(arr) {
    let sum = 0;
    let result = [];
    for(j=0; j< arr.length; j++){
        for(let i = 1; i < arr.length; i++) {
            let temp = arr[j];
            sum = temp + arr[i];
            // console.log(arr[i], '+', temp, '=', sum)
            if(sum === 5) {
                result.push([arr[i], temp])
            }
        }
    }
    return result;
}

console.log(sumOfTwo(NUM_ARR))