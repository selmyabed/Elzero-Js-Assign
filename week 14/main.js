window.document.title = "Document from BOM !";

// #103 - Alert, Confirm, Prompt

// alert('Test')
// console.log('Test')

// let confirmMsg = confirm("Are You Sure to Delete That?");
//     console.log(confirmMsg)
// if(confirmMsg === true) {
//     console.log('item deleted')
// } else {
//     console.log('item does not delete')
// }

// let promptMsg = prompt('Available Day for you' , 'Write Day With 3 Char');
// console.log(promptMsg)

//  #104 - setTimeout and clearTimeout

// setTimeout(sayHello,2000, 'John', 12)
// function sayHello(name, age) {
//     console.log(`Hello ${name} , your Age is ${age}`)
// }

// let handler = setTimeout(function(){
//     console.log('ClearTimeOut Turn!');
// },2000)

// console.log(handler);

// let btn = document.querySelector('button');
// btn.onclick = function() {
//     clearTimeout(handler)
// }

// #105 - setInterval and clearInterval

// setInterval(function(){
//     console.log('Massage')
// },1000)

// setInterval(mgs,1000, 'Selmy')
// function mgs(user) {
//     console.log(`Hello ${user}, iam massage from SetInterval`)
// }

// let div = document.querySelector('div');

// let stop = setInterval(countDown,1000)

// function countDown() {
//     div.innerHTML -= 1;
//     if(div.innerHTML === '0')
//         clearInterval(stop)
// }

// #106 - Window Location Object
// console.log(location)
// console.log(location.href);
// location.href = `https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference`

// console.log(location.host)
// console.log(location.hostname)

// console.log(location.protocol)

// console.log(location.hash)

// location.replace()


// #107 – Window Open And Close
// setTimeout(function () {
//   window.open("https://google.com", "_blank", "width=200, height=200, top= 300 , left=500"  );
// }, 2000);


//  #109 - Scroll, ScrollTo, ScrollBy, Focus, Print, Stop
// let myWindow = window.open('https://google.com', '_blank', 'width=500,height=500') 
// window.scrollTo({
//     left: 3000,
//     top: 3000,
//     behavior: 'smooth'
// })


//  #110 - Scroll To Top Using Y Practice
let btn = document.querySelector('button');
window.onscroll = function(){
    if(window.scrollY >= 600)
        btn.style.display = 'block'
    else 
        btn.style.display = 'none'
}
btn.onclick = function(){
    window.scrollTo({
        left: 00,
        top: 00,
        behavior: 'smooth' ,
    });
};