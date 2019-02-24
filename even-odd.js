// checking if a number is even or odd

function checkEvenOdd(num) {
    if(num%2===0){
        return 'even number'
    } else {
        return 'odd number'
    }
}

const evenOdd=checkEvenOdd(31)
console.log(evenOdd)