// Given an array of objects, print them one by one with a setTimeout of 2 secs
let arr = [
    {x: 2},
    {x: 3},
    {x: 4}
];

arr.map(({ x }, i) => setTimeout(() => console.log(x), i*2000));


// function test(objArr){
//     objArr.map((x, i) => {
//         (function(x, i) {
//             setTimeout(function() { console.log(x.x); }, i * 2000);
//         })(x, i); //IIFE
//     })
// }
// test(arr)