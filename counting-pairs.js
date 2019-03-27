// counting pairs that equal to a sum
function countPairs(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] + arr[i+j] === 5) {
                result.push([arr[i], arr[i+j]])
            }
        }
    }
    return result;
}
console.log(countPairs([2, 3, 1, 7, 6, 4]));