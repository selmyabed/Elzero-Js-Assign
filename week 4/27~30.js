// Task [1]
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0 , 1).toLowerCase()); // e
console.log(userName.substring(0 , 1 ).toLowerCase()); // e
console.log(userName.substr(0 , 1).toLowerCase()); // e
console.log(userName.slice(userName.indexOf('E') ,  userName.length - 5).toLowerCase().repeat(3) ); // eee

// Task [2]
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.includes(letterZ))
console.log(word.startsWith(letterE, 3))
console.log(word.substring(word.length - 1).toUpperCase().endsWith(letterO))