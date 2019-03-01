// Find the duplicates in an array

const ARR = [1, 2, 3, 2, 5, 7, 6, 6]

function findDuplicate() {
    let result = [];
    for(let i = 0; i < ARR.length; i++) {
        for(let j = 0; j < ARR.length; j++){
            if(ARR[i]===ARR[j] && i!=j){
                result.push(ARR[i])
            }
        }
    }
    return result;
}

console.log(findDuplicate())