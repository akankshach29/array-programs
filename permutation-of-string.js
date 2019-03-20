// Finding if 'odce' is a permutation of 'code'

// split and put in array


const STRIN = 'code';
const STR_PERM = 'odce';

function findPermutation(str1, str2) {
    let arr = str1.split('');
    console.log(arr);
    let new_arr = str2.split('');
    console.log(new_arr);
    
    for(let i = 0;i < arr.length; i++) {
        for(let j = 0; j < new_arr.length; j++) {
            if(arr[i] === new_arr[j]){
                console.log('found')
            }
        }
    }
    return true


}

console.log(findPermutation(STRIN, STR_PERM))