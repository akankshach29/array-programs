// finding if a number is prime

// take a number N
// see if it is not divisible by any of the numbers from 2 to N/2

function findPrime(N) {
    for(let i=2; i<N/2; i++){
        if(N%i === 0){
            return 'Not Prime'
        }
    }
    return 'Prime'
}

// console.log(findPrime(3))


// finding all prime numbers in an array

const NUM_ARR = [11, 6, 8, 5, 9];

function findAllPrimes(){

    function isPrime(testNo) {
        let result = false;
        for(let n = testNo - 1; n > 1; n--){
            result = (testNo % n === 0) + result;
        }
    
        if(result === 0 && testNo > 1){
            return true;
          }return false;
    }

    let result = new Array();
    for(let j = 0; j < NUM_ARR.length; j++){
        if(isPrime(NUM_ARR[j])) {
            result.push(NUM_ARR[j]);
        }     
    }
    return result;
}

console.log(findAllPrimes())