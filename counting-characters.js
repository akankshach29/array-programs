// In an array of strings, finding the string with more than 5 characters.

const STR_ARRAY = ['axe', 'test', 'tulips', 'car'];

function findStr(arr) {
    // for loop for the array
    // take the word and split the string into array
    // find the length
    // return if length is greater than 5

    for(let i = 0; i < arr.length; i++) {
        let new_arr = arr[i].split('');
        if(new_arr.length > 5) {
            return arr[i];
        }
    }
}

console.log(findStr(STR_ARRAY));


// In an array of strings, finding all the strings with more than 5 characters.

const STRGS_ARRAY = ['axe', 'polish', 'tulips', 'car'];

// loop on the array
// split the string into array
// if the new array length is greater than 5, push the str into new array
// return the array

function findingStrs(arr) {
  let result_arr = [];
  for(let i = 0; i < arr.length; i++) {
    let new_arr = arr[i].split('');
    if(new_arr.length > 5){
        result_arr.push(arr[i])
    }
  }
  return result_arr;  
}

console.log(findingStrs(STRGS_ARRAY));
