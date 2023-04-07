// Video #Anonymous Function
// let show = function show() {
//     console.log('Hello')
// }
// document.getElementById('show').onclick = show

// setTimeout( function() { console.log('good')} , 2000)

// Video #065 - Return Nested Function

// Example 1
// function sayMessage(fName , lName) {
//     let message = 'Hello';

//     function concantMsg() {
//         message = `${message} ${fName} ${lName}`
//     }
//     concantMsg();

//     return message;
// }
// console.log(sayMessage('selmy', 'abed')) 



// Example 2

// function sayMessage(fName , lName) {
//     let message = 'Hello';

//     function concantMsg() {
//         return `${message} ${fName} ${lName}`
//     }
//     return concantMsg();
// }
// console.log(sayMessage('selmy', 'abed'))


// Example 3

// function sayMessage(fName , lName) {
//     let message = 'Hello';

//     function concantMsg() {
//         function concat() {
//             return `${fName} ${lName}`
//         }
//         return `${message} ${concat()} `
//     }
//     return concantMsg();
// }
// console.log(sayMessage('selmy', 'abed'))




// Video #066 - Arrow Function Syntax

// let print = function () {
//     return 10
// }

// let print = () => 10
// let print2 = _ => 10
// let print3 = num => num
// let print4 = (num2 , num1) => num2 + num1


// console.log(print())
// console.log(print2())
// console.log(print3(10))
// console.log(print4(10 , 10))


// Video #067 - Scope - Global and local

// var  a = 1 ;
// let b = 2;

// function showText() {
    
//     var  a = 10 ;
//     let  b = 20;
//     console.log(`Function - From Local ${a}`)
//     console.log(`Function - From Local ${b}`)
// }


// console.log(`From Global ${a}`)
// console.log(`From Global ${b}`)
// showText()


// Video #068 - Scope - Block

// var x = 10;

// if (1) {
//     var x = 50;
//     console.log(x)
// }
// console.log(x)


// Video #069 - Scope - Lexical (Static)



// Video  #064 - Anonymous Function And Practice

// let calc = function(num1 , num2 ) {
//     return num1 + num2;
// }
// console.log(calc(10,20))
// document.getElementById("show").onclick = sayHello;
// function sayHello() {
//     console.log('Hello Console')
// }
// setTimeout( function (){
//     console.log('Good')
// }, 2000);


// Video #065 - Return Nested Function

//              Ex1
// function sayMessage(fName , lName) {
//     let message = 'Hello';
//     function concantMsg() {
//         message = `${message} ${fName} ${lName}`
//     }
//     concantMsg()

//     return message;
// }
// console.log(sayMessage('selmy' , 'abed'))

//              Ex 2
// function sayMessage(fName , lName) {
//     let message = 'Hello';
//     function concatMsg() {
//         return `${message} ${fName} ${lName}`
//     }
//     return concatMsg();
// }
// console.log(sayMessage('selmy' , 'abed'))

//              Ex 3
// function sayMessage(fName , lName) {
//     let message = 'Hello';
//     function concatMsg() {
//         function concatName() {
//             return `${fName} ${lName}`
//         }
        
//         return `${message} ${concatName()}`
//     }

//     return concatMsg();
// }
// console.log(sayMessage('selmy' , 'abed'))


// Video #066 - Arrow Function Syntax
 /* Must Be One Statment*/ 
print = num => num;
console.log(print(15));

// print1 = (num1,num2) => num1 + num2;
// console.log(print1(10, 20))



// Video #067 - Scope - Global And Local

// var a = 1;
// let b = 2;

// function text(){
//     var a = 10;
//     let b = 20;
//     console.log(`Func - from Local ${a}`)
//     console.log(`Func - from Local ${b}`)    
// }

// console.log(`from Global ${a}`)
// console.log(`from Global ${b}`)

// text();


// Video  #068 - Scope - Block

// var x = 10;
// if(true) {
//     console.log(x)    
//     let x = 50;
// }
// console.log(x)


// Video #069 - Scope - Lexical (Static)

// function parent() {
//     let a = 10;
//     function child(){
//         console.log(a)
//     }
//     child();
// }
// parent();