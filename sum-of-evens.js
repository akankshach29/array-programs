// Finding sum of even numbers in an array

    // an array of integers
    const NUMBER_ARRAY = [2, 5, 8, 6, 9, 4, 23];

    function sumOfEvens() {
        let COUNT = 0;
        // loop through the array
        for(let i = 0; i < NUMBER_ARRAY.length; i++) {
            //check for even number
            if(NUMBER_ARRAY[i] % 2 === 0) {
                //is even add the number to COUNT
                COUNT = COUNT + NUMBER_ARRAY[i];
            }
        }
        //return COUNT 
        return COUNT;   
    }

    const SUM_EVENS = sumOfEvens();
    console.log(SUM_EVENS);