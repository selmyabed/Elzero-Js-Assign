// Video #048 - Loop - For And Concept Of Loop

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// Video #049 - Looping On Sequences
// let myFriends = ['Ahmed' , 'Osama' , 'Hassan' , 'Ola', 'Roaa' , 2 , 1 ] ;
// let onlyNames = [];

// // *********** Normal Print *************
// for (let i = 0; i < myFriends.length ; i++) {
//     if (typeof myFriends[i] === 'string')
//         console.log(myFriends[i])
// }

// // *********** Array Print *************
// for (let i = 0; i < myFriends.length ; i++) {
//     if (typeof myFriends[i] === 'string')
//         onlyNames.push(myFriends[i]);
// }
// console.log(onlyNames)

// Video #050 - Nested Loops And Trainings
// let product = ['keyboard' , 'mouse' , 'headset' , 'playstation' , 'monitor'];
// let color = ['red' , 'green' , 'blue'];
// let model = [2020 , 2021 , 2022];

// for (let i = 0; i < product.length; i++) {
//     console.log('#'.repeat(10));
//     console.log(`# ${product[i].toUpperCase()}`);
//     console.log('#'.repeat(10));

//     console.log('Color: ')

//     for(let j = 0; j < color.length; j++) {
//         console.log(`- ${color[j]}`)
//     }

//     console.log('Model: ')

//     for(let k = 0; k < model.length; k++) {
//         console.log(`- ${model[k]}`)
//     }
// }

// Video #051 - Loop Control - Break, Continue, Label

// let product = ["keyboard", "mouse", "headset", "playstation", "monitor"];
// let color = ["red", "green", "blue"];

// mainloop: for (let i = 0; i < product.length; i++) {
//   console.log(product[i]);
//   nestedloop: for (let j = 0; j < color.length; j++) {
//     console.log(`- ${color[j]}`);
//     if(color[j] === 'green'){
//         break mainloop;
//     }
//   }
// }

// Video #052 - Loop - For Advanced Example

//  #053 - Practice - Add Products To Page
// let i = 0;

// for (;;) {
//     console.log(product[i]);
//     i++;
//     if ( i === product.length) break;
// }

// Video  #053 - Practice - Add Products To Page
// let product = [
//   "keyboard",
//   "mouse",
//   "headset",
//   "playstation",
//   "monitor",
//   "iphone",
//   "ipod",
//   "amoung us",
// ];
// let color = ["red", "green", "blue"];
// let showCount = 5;

// document.write(`<h1>Show ${showCount} Products</h1>`);
// for (let i = 0; i < showCount; i++) {
//     document.write(`<div class="product${i}">`)
//         document.write(`<h3> [${i + 1}] ${product[i]}</h3>`)
//         document.write(`<div class="color">`)
//             for(let j = 0; j < color.length; j++){
//                 document.write(`<h5>${color[j]}</h5>`);
//             }
//             document.write(`<h5>${color.join(' | ')}</h5>`)
//         document.write(`</div>`)
//     document.write(`</div>`)
// }


// Video     #054 - Loop - While 
// let product = ["keyboard", "mouse", "headset", "playstation", "monitor"];
// let index = 0;

// while(index < product.length) {
//     console.log(product[index])
//     index++
// }


// Video  #055 - Loop - Do While

