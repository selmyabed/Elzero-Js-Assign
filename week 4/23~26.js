// Task     [1]
console.log(100000);
console.log(100_000);
console.log(5e4 + 5e4);
console.log(10 ** 5);
console.log(100000 / true);
console.log(Math.pow(10, 5))
console.log(Math.round(100_000.1))
console.log(Math.trunc(100_000.1))
console.log(Math.ceil(99_999.9))
console.log(Math.floor(100_000,1))
console.log(Number("100000"))
console.log(parseInt("100000"))
console.log(parseInt((100000.00).toFixed(0)))

// Task     [2]
console.log(-(Number.MIN_SAFE_INTEGER));

// Task     [3]
console.log(`${Number.MAX_SAFE_INTEGER}`.length)

// Task     [4]
let myVar = "100.56789 Views";
console.log(parseInt(myVar));
console.log(+(parseFloat(myVar).toFixed(2)));

// Task     [5]
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// Task     [6]
let flt = 10.4;
console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+(flt.toFixed(0))); // 10

// Task     [7]
console.log(Math.trunc(Math.random() * 5))