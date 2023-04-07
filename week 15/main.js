// #111 – Local Storage

// Set
// window.localStorage.setItem('color','#f00')
// window.localStorage.fontWeight = 'bold';
// window.localStorage['fontSize'] = '20px';

// // Get
// console.log(window.localStorage.getItem('color'))
// console.log(window.localStorage.color)
// console.log(window.localStorage['color'])

// // Get Key
// console.log(window.localStorage.key(0))

// // Remove item
// window.localStorage.removeItem('fontWeight')

// // Remove All Items
// window.localStorage.clear();

// // Set color in Page
// document.body.style.backgroundColor = window.localStorage.color;

// console.log(window.localStorage)
// console.log(typeof window.localStorage)


// #112 - Local Storage Color Application Practice
// let lis = document.querySelectorAll("ul li");
// let result = document.querySelector('.result');

// window.localStorage.clear()

// if(window.localStorage.getItem("color")) {
//     // [1] Add BackgroundColor To Div
//         result.style.backgroundColor = window.localStorage.color
//     // [2] Remove Class Active 
//         lis.forEach((li) => {
//             li.classList.remove('active')
//         })
//     // [3] Add Class Active 
//         document.querySelector(`[data-color='${window.localStorage.color}']`).classList.add('active')
// }

// lis.forEach((li) => {
//     li.addEventListener('click', (e) => {
//         // console.log(e.currentTarget.dataset.color)
//         // Remove Class Active
//         lis.forEach((li) => {
//             li.classList.remove('active')
//         })
//         // Add Class Active 
//         e.currentTarget.classList.add('active')
//         // Add Current color to Local Storage
//         window.localStorage.setItem('color',e.currentTarget.dataset.color)
//         // Show color in A Div
//         result.style.backgroundColor = window.localStorage.getItem('color')
//     })
// })


// #113 - Session Storage And Use Cases

// window.localStorage.setItem('color', 'red') 
// window.sessionStorage.setItem('color', 'blue') 

document.querySelector('.name').onblur = function() {
    // console.log(this.value)
    window.sessionStorage.setItem("input-name" , this.value)
}