
const STR = 'Akku';
function revStr (str) {
    let strg = str.split('');
    let new_str = '';
    let new_arr = [];
    for(let i = strg.length - 1; i >= 0; i--){        
        new_arr.push(strg[i])        
    }
    new_str = new_arr.join('');
    return new_str;
}

console.log(revStr(STR));