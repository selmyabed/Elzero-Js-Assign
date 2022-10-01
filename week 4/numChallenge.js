let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
// [1]
console.log(Math.trunc(Math.min(a , b , c , d)))
// [2]
console.log(Math.pow(a , Math.round(d) ))
// [3]
console.log(Math.round(d))
console.log(Math.floor(d))
console.log(Math.trunc(d))
console.log(Math.pow(Math.trunc(d),true))
// [4]
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2))
console.log(Math.round((Math.floor(b) / Math.ceil(d))))
