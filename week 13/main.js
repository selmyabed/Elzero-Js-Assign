//  #094 - Event Simulation - Click Focus Blur
let two = document.querySelector(".two");
let one = document.querySelector(".one");

window.onload = function(){
    one.focus();
}
one.onblur = function() {
    two.focus();
}
// two.onblur = function() {
//     document.links[0].click();
// }

// #095 - Class List Object And Methods
let element = document.getElementById('my-div');
console.log(element.classList)
console.log(typeof element.classList)
console.log(element.classList.length)
console.log(element.classList.contains('osama'))
console.log(element.classList.contains('one'))
console.log(element.classList.item(0))

element.onclick = function() {
    element.classList.toggle('one')
}

// #096 - CSS Styling And Stylesheets
let element96 = document.getElementById('my-div-96');

    element96.style.color = 'red'
    element96.style.fontWeight = 'Bold'

    element96.style.cssText = 'font-weight:bold; color: green; opacity: 0.5;'

    element96.style.removeProperty('color')
    element96.style.setProperty('font-size', '40px' ,'important')

    document.styleSheets[0].rules[0].style.removeProperty('line-height')
    document.styleSheets[0].rules[0].style.setProperty('background-color' , 'red')

// #097 - Before, After, Prepend, Append, Remove

let element97 = document.getElementById('my-div-97');
let createdP    =   document.createElement('p');

element.before('This  before')
element97.after('This After')
element97.prepend(createdP)
element97.append(createdP)
element97.remove()


// #098 - DOM Traversing
let span = document.querySelector('#my-div-98 > .two')
console.log(span.parentElement);

span.onclick = function(){
    span.parentElement.style.backgroundColor = '#eee'
}

// #099 - DOM Cloning
let myP = document.querySelector('.my-p').cloneNode(true);
let myDiv = document.querySelector('#my-div-99');

myP.id = `${myP.id}-cloned`;
myDiv.append(myP)


// #100 - AddEventListener
let myP100 = document.querySelector(".p-100");

// myP100.onclick = funOne;
// myP100.onclick = funTwo;

// function funOne(){
//     console.log('Message From onClick 1')
// }
// function funTwo(){
//     console.log('Message From onClick 2')
// }

// window.onload = 'SomeBody';

// myP100.addEventListener('click' , function(){
//     console.log('Message From onClick Event')

// })
// myP100.addEventListener('click' , funOne)
// myP100.addEventListener('click' , funTwo)

// myP100.addEventListener('click' , 'String') // Error

myP100.onclick = function(){
    let newP = myP100.cloneNode(true)
    newP.className = 'clone'
    document.body.appendChild(newP)
}

// let cloned = document.querySelector('.clone'); // Error

// cloned.onclick = function(){
//     console.log('Iam Cloned');
// }

document.addEventListener('click' , function(e) {
    if(e.target.classList.contains('clone')){
        console.log('im cloned')
    }
})