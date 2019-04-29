// given 2 arrays. Finding the pair with minimum difference.

const a1 = [1, 2, 3];
const b1 = [5, 7, 8];
let min = Math.abs(a1[0]-b1[0]);
let arr = [];
function minDiff(a, b){
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            let diff = Math.abs(a[i]-b[j]);
            if(diff <= min){
                min = diff;
                arr = [a[i], b[j]];
            }
        }
    }
    return arr
}
console.log(minDiff(a1, b1))