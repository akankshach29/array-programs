// finding the frequency of occurence of a word in a given para.
let sentence = "My name is Akanksha. Your name is also nice."
let arr = []
let len = sentence.length;
let count = 0;
let word = 'name'
function freqOfWords(str) {
    for(let j = 0; j < len; j++){
        arr.push(str[j])
        let newStr = arr.join('')
        if(str[j] === ' ' || str[j] === '.'){
            arr = [];
            newStr = newStr.slice(0, newStr.length-1)
            if(newStr === word){
                count++;
            }           
        }         
    }
    return count;
}
console.log('frequency: ', freqOfWords(sentence))