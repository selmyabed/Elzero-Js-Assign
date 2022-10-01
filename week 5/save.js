// ******************************* Assignment 31~32 ************************************

// // Task [1]
// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(110 != 100 && 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(! -50  >= +"-40"); // true
// console.log(! 10 <= -"-40"); // true
// console.log(+"10" === 10); // true
// console.log(! 20 === false); // true

// // Task [2]
// let num1 = 10;
// let num2 = 20;
// let h1 = true;
// let h2 = false;
// let h3 = false;

// console.log(typeof num1 === typeof num2); // true
// console.log( num1 !=  num2); // true
// console.log( num1 !==  num2); // true
// console.log(num1 < num2); // true
// console.log(num1 <= num2); // true
// console.log(num1 > ! num2); // true
// console.log(num1 >= ! num2); // true
// console.log(num1 * ++h1 === num2)
// console.log(num1 * h2 === num2 * h3)

// // Task [3]
// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a != b); // true
// console.log(a - b != a - c); // true
// console.log(+(a < b) && !(a == b) && !(a < c) && !(a == c)); // true






// ******************************* Assignment 33~37 ************************************


// Task [1]
// {
//     // Test Case 1
//     let num = 9; // "009"
  
//     if (num < 10) console.log(`00${num}`);
//   }
//   {
//     // Test Case 2
//     let num = 20; // "020"
//     if (num > 10 && num < 100) console.log(`0${num}`);
//   }
  
//   {
//     // Test Case 3
//     let num = 110; // "110"
//     if (num >= 100) console.log(`${num}`);
//   }
//   // Remake Task [1]
//   let num = 9;
//   if (num < 10) console.log(`00${num}`);
//   else if (num > 10 && num < 100) console.log(`0${num}`);
//   else if (num > 100) console.log(num);
  
//   num < 10
//       ? console.log(`00${num}`)
//       : num > 10 && num < 100
//       ? console.log(`0${num}`)
//       : num > 100
//       ? console.log(num)
//       : console.warn("Check Again");
  
//   // Task [2]
//   let num1 = 9;
//   let str = "9";
//   let str2 = "20";
  
//   if (num1 == str) console.log(`${num1} Is The Same Value As ${str}`);
//   if (num1 !== str)
//     console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
//   if (num1 !== str2)
//     console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
//   if (str != str2)
//     console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
//   // Output
//   ("{num1} Is The Same Value As {str}");
//   ("{num1} Is The Same Value As {str} But Not The Same Type");
//   ("{num1} Is Not The Same Value Or The Same Type As {str2}");
//   ("{str} Is The Same Type As {str2} But Not The Same Value");
  
//   // Task [3]
//   let num_1 = 10;
//   let num_2 = 30;
//   let num_3 = "30";
  
//   if (num_3 > num_1 && num_3 !== num_2)
//     console.log(
//       `30 Is Larger Than 10 And Type string Not The Same Type As number`
//     );
//   else if (num_3 > num1 && num_3 == num_2)
//     console.log(
//       `30 Is Larger Than 10 And Value Is The Same As ${num_3} And Type string Not The Same Type As number `
//     );
  
//   // Needed Output
//   ("30 Is Larger Than 10 And Type string Not The Same Type As number");
//   ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
//   ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
  