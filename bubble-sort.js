// Bubble sort using do-while

function bubbSort(a) {
    let swapped;
    let n = a.length-1;
    let x = a
    do{
        swapped = false
        for(let i = 0; i < n; i++) {
            if(x[i] > x[i+1]) {
                let temp = x[i]
                x[i] = x[i+1]
                x[i+1] = temp
                swapped = true
            }
        }
        n--;
    } 
    while(swapped === true)
    return x;
}

const sorting = bubbSort([4, 1, 6, 2, 3, 5])
console.log(sorting)


// Bubble sort- sorting an array

// const NUM_ARR = [4, 1, 6, 2, 3, 5]

// function swap(m, n) {
//     let temp = m;
//     m = n; 
//     n = temp;
// }

// function bubbleSort() {
//     for(let i = 0; i < NUM_ARR.length - 1 ; i++) {
//         for(let j = 0; j < NUM_ARR.length - i - 1; j++) {
//             if(NUM_ARR[j] > NUM_ARR[j+1]) {
//                 swap(NUM_ARR[j], NUM_ARR[j+1])
//             }
//         }
//     }
// }

// const sortedArray = bubbleSort()
// console.log(sortedArray);
