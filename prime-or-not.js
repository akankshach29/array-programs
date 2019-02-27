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

console.log(findPrime(19))


// finding all prime numbers in an array

// const NUM_ARR = [3, 6, 8, 5, 11, 9];

// function findAllPrimes(){

// }