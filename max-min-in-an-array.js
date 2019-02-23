// Finding maximum number in an array- using sort()

const NUMBER_ARRAY=[4, 5, 6, 2, 9, 1]

function findMaxNum() {
    let arr = NUMBER_ARRAY.sort()
    return (NUMBER_ARRAY[NUMBER_ARRAY.length-1])
}

const maxNum = findMaxNum()
// console.log(maxNum)


// Finding maximum number in an array- using loop

const NUMBER_ARR=[4, 5, 6, 2, 9, 1]

function findMaxNumber() {
    let maximum = NUMBER_ARR[0]
    for(let i=1; i< NUMBER_ARR.length; i++){
        if(NUMBER_ARR[i]>maximum){
            maximum = NUMBER_ARR[i]
        }
    }
    return maximum
}

const LargestNum = findMaxNumber()
// console.log(LargestNum)


// Finding minimum number in an array- sort()

const NUM_ARRAY=[4, 5, 6, 2, 9, 1]

function findMinNum() {
    let arr = NUM_ARRAY.sort()
    return (NUM_ARRAY[0])
}

const minNum = findMinNum()
// console.log(minNum)


// find smallest number in an array- for loop

const MIN_NUM_ARRAY=[45, 51, 62, 22, 91, 13]

function findSmallestNum() {
    let min = MIN_NUM_ARRAY[0]
    for(let i=1; i<MIN_NUM_ARRAY.length; i++) {
        if(MIN_NUM_ARRAY[i]<min){
            min=MIN_NUM_ARRAY[i]
        }
    }
    return min;
}

const smallest=findSmallestNum()
// console.log(smallest)