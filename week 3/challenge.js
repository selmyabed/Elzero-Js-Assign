// Challenge 1

let a = 10;
let b = "20";
let c = 80;


console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    ++a + +b++ + +c++ - +a++
    
    Examples:
    [++a]
        - Value: 11
        - Explain: pre increment
    [+]
        - Explain: Addition Operator
    [+b++]
        - Value: 20
        - Explain: post increment , unary plus
    [+]
        - Explain: Addition Operator
    [+c++]
        - Value: 80
        - Explain: post increment , unary plus
    [-]
        - Explain: negative Operator
    [+a++]
        - Value: 11
        - Explain: post increment , unary plus

    console.log(11 + 20 + 80 - 11)
*/
/*
    ++a + -b + +c++ - -a++ + +a

    Examples:
    [++a]
        - Value: 13
        - Explain: pre increment
    [+]
        - Explain: Addition Operator
    [-b]
        - Value: 21
        - Explain: unary negative
    [+]
        - Explain: Addition Operator
    [+c++]
        - Value: 81
        - Explain: post increment , unary plus
    [-]
        - Explain: negative Operator
    [-a++]
        - Value: -13
        - Explain: post increment , unary negative
    [+]
        - Explain: Addition Operator
    [+a]
        - Value: 14
        - Explain: unary plus

        console.log(13 + -21 + 81 - -13 + 14)
*/

/*
    --c + +b + --a * +b++ - +b * a + --a - +true

    Examples: 
    [--c]
        - Value: 81
        - Explain: pre decrement
    [+]
        - Explain: Addition Operator
    [+b]
        - Value: 21
        - Explain: unary plus
    [+]
        - Explain: Addition Operator
    [--a]
        - Value: 13
        - Explain: post decrement 
    [*]
        - Explain: multiple Operator
    [+b++]
        - Value: 21
        - Explain: unary plus , post increment
    [-]
        - Explain: negative Operator
    [+b]
        - Value: 22
        - Explain: unary plus
    [*]
        - Explain: multiple Operator
    [a]
        - Value: 13
        - Explain: variable
    [+]
        - Explain: Addition Operator
    [--a]
        - Value: 12
        - Explain: post decrement
    [-]
        - Explain: negative Operator
    [+true]
        - Explain: unary plus

    console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1)
*/
// Challenge 2
/* let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * e)
console.log(++g * ++e + ++f - d) */