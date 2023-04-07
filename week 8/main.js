// video #058 - Function Advanced Examples

// function sayBye (name , age) {
//     age < 20 ?
//     console.log('Too Young for this job') :
//     age >= 20 && age < 50 ?
//     console.log(`Good Morning ${name} You'r Qualified to this job cause your age is ${age}`)
//     : console.log('too fkin old') ;
// };

// sayBye('CJ' , 27);
// sayBye('john' , 42);
// sayBye('Kratous' , 999);
// sayBye('lenda' , 12);

// function looping (number , exclude) {
//     for(let i = number; i <= 2022; i++) {
//         if(i === exclude)
//             continue;
//         else
//             console.log(i)
//     }
// }
// looping(2012,2020)

// Video #059 - Function Return And Use Cases

// function hi(name) {
//     return console.log(`Hello ${name}`)
// }
// hi('mohesen');

// function generate(start , end) {
//     for (let i = start; i <= end; i++) {
//         console.log(i)
//         if (i === 15)
//             return 'interruptting';
//     }
// }
// console.log(generate(10 , 20))

// Video #060 - Function Default Parameters
// function video60 (userName , age = "Unknown") {
// if (age === undefined) {
//     age = 'Unknown';
// }
// age = age || 'Unknown'
//     return `Hello ${userName} Your Age is ${age}`;
// }

// console.log(video60('osama'))

// Video #061 - Function Rest Parameters

// function calc(...numbers) {
// //   console.log(Array.isArray(numbers));
//     let result = 0;
//     let i = 0;
//     for (; i < numbers.length; i++) {
//         result = result + numbers[i];
//     }
//     return `Final Result of ${i} numbers is ${result}`
    
// }
// console.log(calc(1 , 2 , 3 , 4))


// Video #062 – Function Ultimate Practice
// function showInfo (user = 'UnKnown', age = 'Un' , rate = 0, show = 'Yes', ...skills) {
//     document.write('<div>')
//         document.write(`<h2>${user}</h2>`)
//         document.write(`<p> Age Is : ${age} Years</p>`)
//         document.write(`<p> Rate : $${rate}</p>`)
//         if (show === 'Yes') {
//             if (skills.length > 0) {
//                 document.write(`<p>Skills is : ${skills.join(" | ")}</p>`)
//                 // document.write(`<b>Skills :</b>`)
//                 // for (let i = 0; i <skills.length; i++) {
//                 //     document.write(`<p>-${skills[i]}</p>`)
//                 // }
//             } else { // If Yes But Empty
//                 document.write(`U didn't Write Ur skills`)
//             }
//         } else {
//             document.write(`Skills is Hidden`)
//         }
//     document.write('</div>')
// }

// showInfo('Selmy' , 18 , 10 , 'Yes' , 'HTML' ,'CSS' , 'JS'  )