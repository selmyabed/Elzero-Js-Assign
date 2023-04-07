// Task [1]

// function sayHello(theName , theGender) {
//     if (theGender === 'Male') {
//         console.log(`Hello Mr ${theName}`)
//     } else if (theGender === 'Female') {
//         console.log(`Hello Miss ${theName}`)
//     } else {
//         console.log(`Hello ${theName}`)
//     }
// }
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// Task [2]
// function calc(firstNum, secondNum, operation) {
//     let result ;
//     if (secondNum === undefined) {
//         console.log('Second Number Not Found');
//     } else {

//         if (operation === 'add' || operation === undefined) {
//             result = firstNum + secondNum;
//             // console.log(result)
//         } else if (operation === 'subtract') {
//             result = firstNum - secondNum;
//             // console.log(result)
//         } else if (operation === 'multiply') {
//             result = firstNum * secondNum;
//             // console.log(result)
//         }
//         return console.log(result);
//     }
// }
// calc(20); // Second Number Not Found
// calc(20, 30); // 50
// calc(20, 30, 'add'); // 50
// calc(20, 30, 'subtract'); // -10
// calc(20, 30, 'multiply'); // 600

// Task [3]

// function ageInTime(theAge) {
//     // Your Code Here
//     if (theAge <= 100 && theAge >= 10) {
//         console.log(`Age in Mounth: ${theAge * 12}`)
//         console.log(`Age in weeks: ${Math.round((theAge * 365 / 7))}`)
//         console.log(`Age in days: ${theAge * 365 }`)
//     } else {
//         console.log('Age Out Of Range')
//     }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

//  Challenge ******** Task [4] ***********
function checkStatus(a, b, c, d) {
  let name;
  let age;
  let status;
  let gender;

  a === "Male" || a === "Female"
    ? (gender = a)
    : typeof a === "number"
    ? (age = a)
    : typeof a === "string"
    ? (name = a)
    : (status = a);
  // if (a === 'Male' || a === 'Female' ) {
  //     gender = a;
  // } else if ( typeof a === 'number') {
  //     age = a;
  // } else if (typeof a === 'string' ) {
  //     name = a;
  // } else{
  //     status = a;
  // }

  b === "Male" || b === "Female"
    ? (gender = b)
    : typeof b === "number"
    ? (age = b)
    : typeof b === "string"
    ? (name = b)
    : (status = b);

  //   if (b === "Male" || b === "Female") {
  //     gender = b;
  //   } else if (typeof b === "number") {
  //     age = b;
  //   } else if (typeof b === "string") {
  //     name = b;
  //   } else {
  //     status = b;
  //   }
  c === "Male" || c === "Female"
    ? (gender = c)
    : typeof c === "number"
    ? (age = c)
    : typeof c === "string"
    ? (name = c)
    : (status = c);
  //   if (c === "Male" || c === "Female") {
  //     gender = c;
  //   } else if (typeof c === "number") {
  //     age = c;
  //   } else if (typeof c === "string") {
  //     name = c;
  //   } else {
  //     status = c;
  //   }

  d === "Male" || d === "Female"
    ? (gender = d)
    : typeof d === "number"
    ? (age = d)
    : typeof d === "string"
    ? (name = d)
    : (status = d);

//   if (d === "Male" || d === "Female") {
//     gender = d;
//   } else if (typeof d === "number") {
//     age = d;
//   } else if (typeof d === "string") {
//     name = d;
//   } else {
//     status = d;
//   }

    status === true ? 
        gender === "Male" ?  console.log(`Hello MR ${name}, Your Age Is ${age}, You Are Available For Hire`) :
        console.log(`Hello Miss ${name}, Your Age Is ${age}, You Are Available For Hire`)
    :  (gender === "Male") ? console.log(`Hello MR ${name}, Your Age Is ${age}, You Are NOT Available For Hire`) :
        console.log(`Hello Miss ${name}, Your Age Is ${age}, You Are NOT Available For Hire`)

//   if (status === true) {
//     if (gender === "Male")
//       console.log(
//         `Hello MR ${name}, Your Age Is ${age}, You Are Available For Hire`
//       );
//     else
//       console.log(
//         `Hello Miss ${name}, Your Age Is ${age}, You Are Available For Hire`
//       );
//   } else {
//     if (gender === "Male")
//       console.log(
//         `Hello MR ${name}, Your Age Is ${age}, You Are NOT Available For Hire`
//       );
//     else
//       console.log(
//         `Hello Miss ${name}, Your Age Is ${age}, You Are NOT Available For Hire`
//       );
//   }
}
// Needed Output
checkStatus("Osama", 38, "Male", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus("Female", 38, "Assma", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, 38, "Saied", "Male"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Female", "Menna", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// Task [5]
// function createSelectBox(startYear, endYear) {
//     document.write(`<select>`)
//     for (let i = startYear; i <= endYear; i++) {
//         document.write(`<option value="${i}">${i}</option>`)
//     }
//     document.write(`</select>`)
// }

// createSelectBox(2000, 2021);

// Task [6]

// function multiply(...numbers) {
//   let result = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     if (typeof numbers[i] !== "number") {
//       continue;
//     } else {
//       result *= Math.floor(numbers[i]);
//     }
//   }
//   return console.log(result);
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000
