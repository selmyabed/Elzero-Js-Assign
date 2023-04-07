// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Task [1]

// // // Method 1 Not Necessary
// // {
// //     myFriends.length = num
// //     console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// // }
// {
//     // Method 2
//         myFriends.pop()
//     console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// }
// {
//     // Method 3
//     console.log(myFriends.slice("" , num)); // ["Ahmed", "Elham", "Osama"];
// }

// Task [2]
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
//     friends.pop();
//     friends.shift();
// console.log(friends); // ["Eman", "Osama"]


// Task [3]

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

//     finalArr = finalArr.concat(arrOne , arrTwo).sort().reverse();

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Task [4]
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[words.length - website.indexOf('o')][website.indexOf('G')].slice(website.indexOf('o') + website.indexOf('o')).toUpperCase()); // ZERO


// Task [5]
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// if (haystack.includes(needle)) {
//     console.log('Found');
// }
// haystack.includes(needle) ? console.log('Found') : console.log('Not Found') ;

// switch(true) {
//     case haystack.includes(needle) : 
//         console.log('Found');
//     break;
// }

// Task [6]
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
    allArrs = allArrs.concat(arr1 , arr2).sort().slice(allArrs.length - (arr2.indexOf('Y'))).join("").toLowerCase()
console.log(allArrs); // fxy