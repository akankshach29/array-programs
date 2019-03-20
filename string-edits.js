// pale -> ple, Given 2 strings, find that they are just one edit away

function checkOneEdit(str1, str2) {
    let arr = [];
    // if ((str1.length - str2.length) > 1 || (str2.length - str1.length) > 1  ) {
    //     return false;
    // }
    let i = 0; let j = 0; let diff = 0;
    while(i<str1.length && j<str2.length){
        if(str1[i] !== str2[j]){
            if(str1.length > str2.length){
                arr.push(str1[i])
                i++;
                // console.log(i)
            }
            if(str1.length < str2.length){
                arr.push(str1[j])
                j++;
                // console.log(j)
            }
            if(str1.length === str2.length){
                arr.push(str1[i])
                i++; j++;
                // console.log(i,j)
            }
        } else {
            i++; j++;
            // console.log('else', i,j)
        }
    }
    return arr;
}

console.log(checkOneEdit("padlse", "ple"));