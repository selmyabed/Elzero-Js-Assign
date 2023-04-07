// [1]
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let taskOne = mix.map(function(ele) {
//     return isNaN(ele) ? ele : "";
// }).reduce(function(acc,ele) {
//     return acc + ele;
// })
// console.log(taskOne); // Elzero

// [2]
// let myString = "EElllzzzzzzzeroo";
// let taskTwo = myString
//   .split("")
//   .filter(function (ele, index, arr) {
//     console.log(`Element-> ${ele}`);
//     console.log(`Index-> ${index}`);
//     console.log(`Array-> ${arr}`);
//     return arr.indexOf(ele) === index;
//   })
//   .join("");
// console.log(taskTwo); // Elzero

//  [3]
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let taskThree = myArray.reduce(function(acc, ele){
//   return acc + ele;
// }).split("").filter(function(ele){
//   return ele !== ',';
// }).reduce(function(acc,ele){
//   return acc + ele;
// })
// console.log(taskThree) // Elzero

//  [4]
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let taskFour = numsAndStrings.filter(function(ele) {
//     return !isNaN(ele)
// }).map(function(ele){
//     return -ele;
// })
// console.log(taskFour) // [-1, -10, 10, 20, -5, -3]

// [5]
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let taskFive = nums.reduce(function(acc, ele) {
//     return ele % 2 === 0 ? acc * ele : acc + ele  ;
// },1)
// console.log(taskFive) // 500

// Challenge Video 78

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString.split("").map(function(ele){
//   return ele !== ',' ? ele : ''
// }).filter(function(ele){
//   return isNaN(ele)
// }).reduce(function(acc, ele){
//   return acc + ele
// }).slice(true , -isNaN(myString)).replaceAll("_"," ")
// console.log(solution);
