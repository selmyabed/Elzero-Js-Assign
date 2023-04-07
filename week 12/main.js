// #086 - What Is DOM And Select Elements

// let myIdElement = document.getElementById('my-div');
// let myTagElement = document.getElementsByTagName('p');
// let myClassElement = document.getElementsByClassName('my-span')
// let myQueryElement = document.querySelector('.my-span')
// let myQueryAllElement = document.querySelectorAll('p')

// console.log(myIdElement)
// console.log(myTagElement[1])
// console.log(myClassElement[1])
// console.log(myQueryElement)
// console.log(myQueryAllElement)

// console.log(document.title)
// console.log(document.body)
// document.forms[0].one.value = 'Change'
// console.log(document.forms[0].one.value)

// document.links[1].innerHTML = 'twitter'
// document.links[1].href = 'https://twitter.com'
// console.log(document.links[1].href)

//  #087 - Get Set Elements Content And Attributes

// let myElement = document.querySelector('.js')
// console.log(myElement.innerHTML)
// console.log(myElement.textContent)

// myElement.innerHTML = 'Text From <span>Main.js</span> File';
// myElement.textContent = 'Text From <span>Main.js</span> File';

// document.images[0].src = 'https://google.com'
// document.images[0].alt = 'alternate'
// document.images[0].title = 'Picture'
// document.images[0].id = 'picture'
// document.images[0].className = 'pic'

// let myLink = document.querySelector('.link');
// console.log(myLink.getAttribute('class'))
// console.log(myLink.getAttribute('href'))
// myLink.innerHTML = 'YouTube'
// myLink.setAttribute('href', 'https://youtube.com')
// myLink.setAttribute('title', 'YouTube')

// #088 - Check Attributes And Examples
// console.log(document.getElementById('p88').attributes)

// let myP = document.getElementById('p88');
// if(myP.hasAttribute('data-src')) {
//     if(myP.getAttribute("data-src") === '')
//         myP.removeAttribute('data-src');
//     else
//         myP.setAttribute('data-src' , 'New Value')
// } else {
//     console.log('not Found')
// }

// if(myP.hasAttributes()) {
//     console.log('Has Attributes')
// }

// #089 - Create And Append Elements
// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode('Product one');
// let myComment = document.createComment('This is Div')

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Test");

// // Append Text To Element
// myElement.appendChild(myText)

// // Append Comment To Element
// myElement.appendChild(myComment)

// // Append Element To Body
// document.body.appendChild(myElement)

// console.log(myElement);

//  #090 - Product With Title And Description Practice
// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// // Nested
// myMainElement.appendChild(myHeading);
// myMainElement.appendChild(myParagraph);

// // Append text
// myHeading.appendChild(myHeadingText);
// myParagraph.appendChild(myParagraphText);

// myMainElement.className = 'Product';

// document.body.appendChild(myMainElement)

// // Another Way

// function makeProduct(counter) {
//     for(let i = 0; i<counter; i++){
//         let myMainElement = document.createElement("div");
//         let myHeading = document.createElement("h2");
//         let myParagraph = document.createElement("p");

//         let myHeadingText = document.("Product Title "+ (1+i));
//         let myParagraphText = document.createTextNode("Product Description "+ (1+i));

//         myMainElement.appendChild(myHeading);
//         myMainElement.appendChild(myParagraph);

//         // Append text
//         myHeading.appendChild(myHeadingText);
//         myParagraph.appendChild(myParagraphText);

//         myMainElement.className = 'Product';

//         document.body.appendChild(myMainElement)
//     }
// }
// makeProduct(10)

/* Remake*/
// function makeProduct(count) {
//   for (let i = 0; i <count; i++) {
//     let myProduct = document.createElement("div");
//     let proHeading = document.createElement("h3");
//     let proDesc = document.createElement("p");
//     let theEnd = "--------------------End--------------------";
//     let proHeadingText = document.createTextNode(`This is Product ${i + 1}`);
//     let proDescText = document.createTextNode(
//       `Product-${i + 1} has many benefits`
//     );
//     myProduct.className = `product${i + 1}`;
//     // Append text to h3 & p
//     proHeading.appendChild(proHeadingText);
//     proDesc.appendChild(proDescText);
//     // Append h3+p to Div
//     myProduct.append(proHeading, proDesc,theEnd);
//     // Append div to body
//     document.body.appendChild(myProduct);
//   }
// }
// makeProduct(100);

// 091 - Deal With Children's
// let myElement = document.getElementById("div90");

// console.log(myElement)
// console.log(myElement.children)
// console.log(myElement.children[0])
// console.log(myElement.childNodes)
// console.log(myElement.childNodes[0])
// console.log(myElement.firstChild)
// console.log(myElement.lastChild)
// console.log(myElement.firstElementChild)
// console.log(myElement.lastElementChild)

// #092 - Dom Events
// let myBtn = document.getElementById('btn');
// myBtn.oncontextmenu = function(){
//     console.log("Clicked 2")
// }
// window.onscroll = function (){
//     console.log('scrolling');
// }
// window.onresize = function (){
//     console.log('resizing');
// }

// #093 - Validate Form And Prevent Default

let myForm = document.getElementById("form");
let userInput = document.getElementById('name');
let ageInput = document.getElementById('age');

myForm.onsubmit = function(e) {
    let nameValid = false;
    let ageValid = false;

    // console.log(userInput.value)
    // console.log(userInput.value.length)
    if(userInput.value !== '' && userInput.value.length <= 10 ) {
        // nameValid = true;
        console.log('valid')
    }

    if(ageInput.value !== '') {
        // ageValid = true;
        console.log('valid')
    }
    if(nameValid === false || ageValid === false) {
        e.preventDefault();
        console.log('didn\'t send')
    }
}


// myForm.onsubmit = function(e) {

//     let userValid = false;
//     let ageValid = false;

//     console.log(userInput.value)
//     console.log(userInput.value.length)

//     if(userInput.value !== "" && userInput.value.length <= 10 ){
//         userValid = true;
//     }

//     if(ageInput.value !== ''){
//         ageValid = true;
//     }

//     if(userValid === false || ageValid === false) {
//         e.preventDefault();
//         console.log('didnt send')
//     }
// }

let lastLink = document.querySelector("[lastone]");
lastLink.onclick = function (event) {
  console.log(event);
  event.preventDefault();
};
