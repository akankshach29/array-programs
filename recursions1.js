// sum(1)(2)(3)(4)....(n)();
let sum = (a) => {
    return (b) => {
        if (b){
           return sum(a+b);
        }
        return a;         
    }
}
console.log(sum(1)(2)(3)(4)()); 


// with lesser lines of code
let sumAll = (a) => (b) => {
    return b ? sum(a+b) : a;
}
console.log(sumAll(1)(3)(4)(7)());