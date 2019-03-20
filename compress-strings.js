// abbccc -> a1b2c3

function counting(str) {
    let arr = str.split("");
    let new_arr = [];
    let l = 0;
    for(let i=0; i<arr.length; i++){
        l++;
        if(arr[i] !== arr[i+1]){
            new_arr.push(arr[i]+l)
            l=0;
        }
    }
    return new_arr.join("");
}

console.log(counting("aaaabbccc"));

