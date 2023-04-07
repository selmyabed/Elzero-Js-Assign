// #071 - Higher Order Functions - Map

// let myNums = [1,2,3,4,5,6];
// let newArr = [];

// for(let i=0; i<myNums.length; i++) {
//     newArr.push(myNums[i]+myNums[i]);
// }
// console.log(newArr)

// // same idea with map
// let addSelf = myNums.map((element) => element + element)
// console.log(addSelf)

// let addSelf = myNums.map(function(element , index, array){
//     // console.log(`Element -> ${element}`)
//     // console.log(`Index -> ${index}`)
//     // console.log(`Array -> ${array}`)
//     // console.log(`Arg -> ${this}`)
//     return element + element;
// },10)

// Another idea

    // function addition(ele) {
    //     return ele + ele;
    // }

    // let add = myNums.map(addition);
    // console.log(add)


// #072 - Higher Order Functions - Map Practice
// let swappingCases = 'elZERo';
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreBooleans = 'Elz123er4o';

// //  [1]
// let swap = swappingCases.split("").map(swappingLetters)
// console.log(swap)
// function swappingLetters (ele){
//     return ele === ele.toLowerCase() ? ele.toUpperCase() : ele.toLowerCase();
// }

// //  [2]
// let inv = invertedNumbers.map(function(ele){
//     return -ele;
// })
// console.log(inv)

// //  [3]
// let ign = ignoreBooleans.split("").map(function(ele) {
//     return isNaN(parseInt(ele)) ? ele : '';
// }).join("")
// console.log(ign)


// #073 - Higher Order Functions - Filter

// let friends = ['Ahmed' , 'Sameh', 'Sayed', 'Asmaa', 'Amgad', 'Israa'];

// let numbers = [11, 20, 2, 5, 17, 10];

// let fFilter = friends.filter(function(ele){
//     return ele.startsWith("A")
// })
// console.log(fFilter)

// let evenNumbers = numbers.filter(function(ele) {
//     return ele % 2 === 0;
// })
// console.log(evenNumbers)


// #074 - Higher Order Functions - Filter Practice

// Filter words more then 4 chars
// let sentence = 'I Love Foood Code Too Playing Much';
// let smallWords = sentence.split(" ").filter(function(ele) {
//     return ele.length <= 4 ;
// }).join(" ");
// console.log(smallWords);


// let ignoreBooleans = 'Elz123er4o';
// let ign = ignoreBooleans.split("").filter(function(ele) {
//     return isNaN(parseInt(ele)) ? ele : '';
// }).join("")
// console.log(ign)

// // Filter Strings + Multiply
// let mix = 'A13BS2ZX';

// let multNums = mix.split("").filter(function(ele){
//     return !isNaN(ele) 
// }).map(function(ele){
//     return ele*ele;
// }).join("")
// console.log(multNums)


// #075 - Higher Order Functions - Reduce
// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function(acc, element, index, arr){
//     // console.log(`Acc => ${acc}`)
//     // console.log(`Current Element => ${element}`)
//     // console.log(`Current Element index => ${index}`)
//     // console.log(`Array => ${arr}`)
//     // console.log(acc + element)
//     // console.log(`###################`)
//     return acc + element;
// })
// console.log(add)

// #076 - Higher Order Functions - Reduce Practice
// let theBiggest = ['Bla', "Propaganda", 'Other', 'Hello', 'Hi:)', 'Tree' ]

// let check = theBiggest.reduce(function(acc , ele) {
//     return acc.length > ele.length ? acc : ele;
// })
// console.log(check)


// let removeChars = ['E', '@', 'L' ,'Z' ,'@','@' ,'E', 'R', '@' ,'O'];
// let remove = removeChars.filter(function(ele){
//     return ! ele.startsWith("@")
// }).reduce(function(acc, ele){
//     return acc + ele
// })
// console.log(remove)


//  #077 - Higher Order Functions - ForEach And Practice

// let allList = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll('.content div');

// allList.forEach(function(ele){
//     ele.onclick = function() {
//         // Remove Active Class From All Elements
//         allList.forEach(function(ele){
//             ele.classList.remove('active')
//         })
//         // Add Active Class to This Element
//         this.classList.add('active');
//         //Hide all Divs
//         allDivs.forEach(ele => ele.style.display = 'none')
//     }
// });