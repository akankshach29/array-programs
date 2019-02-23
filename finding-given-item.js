//finding given item in an array

const ITEM_ARRAY = ['banana', 'grapes', 'apple']

function findItem(item) {
    for(let i=0; i < ITEM_ARRAY.length; i++){
        if(ITEM_ARRAY[i] === item){
            return ({ itemFound: true, atIndex: i})
        }         
    } return ({ itemFound: false, atIndex: null })        
        
}

const findApple = findItem('apple');
console.log(findApple)

const findTanay  = findItem('tanay');
console.log(findTanay)