// In a sentence, replace space with %20% - forming urls

const STR_TO_JOIN = 'coder chachi is back';

// split the string into and array
// iterate over the array and replace it with %20%

function urlify(STR) {
    let str_arr = STR.split('');
    let arr = '';
    for(let i = 0; i < str_arr.length; i++) {
        if (str_arr[i] === ' '){
            str_arr[i] = '%20%'
            arr = str_arr.join('');
        }
    }
    return arr
}

console.log(urlify(STR_TO_JOIN));