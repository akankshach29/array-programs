// checking if a number is even or odd

function checkEvenOdd(num) {
    if(num%2===0){
        return 'even number'
    } else {
        return 'odd number'
    }
}

const evenOdd=checkEvenOdd(31);
// console.log(evenOdd)


// checking the number of even numbers in an array

    const NUMBERS_ARRAY = [3,5,2,6,89,90,4];
    function numOfEvens(){
        let count = 0;
        // traverse the array
        for(let i = 0; i < NUMBERS_ARRAY.length; i++){
            if(NUMBERS_ARRAY[i]%2 === 0){
                 //incrementing a value every time an even number is found
                count = count + 1;
            }
        }
        return count;
    }
     const countOfEvens = numOfEvens();
     console.log(countOfEvens);

   