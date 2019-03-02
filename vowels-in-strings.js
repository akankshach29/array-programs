// find the string which does not contain vowel

const STR_ARRAY = ['sdfgh', 'pet', 'car'];

// loop over the array
// split each string into array
// loop over the new array and check for vowels
// if not found, return that string

function findNoVowelstr(arr) {
    for(let i = 0; i < arr.length; i++) {
        let new_arr = arr[i].split('');
        for(let j = 0; j < new_arr.length; j++) {
            if(new_arr[j] != 'a' || new_arr[j] != 'e' || new_arr[j] != 'i' || new_arr[j] != 'o' || new_arr[j] != 'u') {
                return arr[i];
            }
        }
    }
}

console.log(findNoVowelstr(STR_ARRAY));


// find all the strings which do not contain vowels

const STRS_ARRAY = ['fry', 'cry', 'car', 'try'];

// loop over the array
// split each string into array
// apply indexOf and check for vowels
// if not found, push that string to new array

function findNoVowelstrs(arr) {
    let new_str_arr = [];
    for(let i = 0; i < arr.length; i++) {
        let new_arr = arr[i].split('');
        if(new_arr.indexOf('a') == -1 && new_arr.indexOf('e') == -1) {
            new_str_arr.push(arr[i])
        }
    }
    return new_str_arr; 
}

console.log(findNoVowelstrs(STRS_ARRAY));