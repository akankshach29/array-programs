// Find the missing number in an array of integers from 1 to 10.

    // an array
    const NUMBER_ARRAY = [1, 2, 3, 4, 6, 7, 8, 9, 10];

    // loop on an array
    function findMissingNumber() {
        let initial = 0;
        for(let i = 0; i < NUMBER_ARRAY.length; i++){
            // start from index 0 and keep adding 1 to number in array
            initial = initial + 1;
            // after adding 1 check if that is equal to the number on next index.
            if(initial != NUMBER_ARRAY[i]){
                // if not return that number
                return initial;
            }
        }
    }

    const missingNumber = findMissingNumber();
    console.log(missingNumber);

    
    
    


