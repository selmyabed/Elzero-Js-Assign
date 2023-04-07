// Task[1]
// let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
// let [a, , , ,e] = myNumbers

// console.log(a * e); // 5


// Task[2]
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
// let  [a, b, c, [d, e, [f, g]]] = mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


// Task[3]
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// Play With Arrays To Prepare For Destructuring
// let finalArr = arr1.concat(arr2,arr3);
// console.log(finalArr)
// Write Your Destructuring Assignment Here
// let [ a, , , , , , ,b,c] =[  finalArr[7], , , , , , ,finalArr[8],finalArr[0]]
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// let [ c, , , , , , ,a,b] = finalArr
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed



// Task[4]

// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
// };

// // Write Your Destructuring Assignment Here
// let {age:a , working: w , country: c, hobbies: [h1,,h3]} = member;

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming


// Task [5]
// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//         "Oath In Felghana": ["USA", "Japan"],
//         "Ark Of Napishtim": {
//             US: "20 USD",
//             JAP: "10 USD",
//         },
//         Origin: "30 USD",
//     },
// };

// // Write Your Destructuring Assignment/s Here
// let {title:t , developer: d, releases} = game;
// let [o,a] = Object.keys(releases);
// let [[u,j] , {US: u_price, JAP:j_price}, or] = Object.values(releases)
// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD


// Task[6]

let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let [f1, f2, f3] = myFriends;
function friendDetails (friendObj) {
    let {title: t, age: a, available: av, skills: [,s2] } = friendObj;
    console.log(t);
    console.log(a);
    console.log(av ? 'Available' : 'Not Available');
    console.log(s2);
}
if (chosen===1)
    friendDetails(f1)
else if (chosen === 2)
    friendDetails(f2)
else if (chosen === 3)
    friendDetails(f3)
else
    console.log('No Data Founded')
// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"