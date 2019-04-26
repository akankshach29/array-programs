// check if a string is substring of another

let str1 = 'phonehne'
let str2 = 'hne'

function checkSubstring(strg1, strg2){
    let arr = []
    let j = 0
    let i = 0
    while(i < strg1.length && j < strg2.length) { 
        if(strg1[i] === strg2[j]){
            arr.push(strg1[i])
            j++; i++;
        } else{
            i++; j=0;
            arr=[];
            // console.log('no match')            
        }
    } 
    if(arr.join('') === strg2){
        return (strg2 + ' is a substring') 
    } else {
        return 'Not a substring'
    }
}
console.log(checkSubstring(str1, str2))