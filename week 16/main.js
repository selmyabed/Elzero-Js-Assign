// #115 - Destructuring Arrays Part 1

// let myFriends = ['Mohamed', 'Salah', 'Abduallh','Wael'];

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// [a="default" ,b ,c ,d ,e='SomeOne'] = myFriends;
// console.log(a,b,c,d,e)

// let [x,,z] = myFriends;
// console.log(x)
// console.log(z)

// #116 - Destructuring Arrays Part 2

// let myFriends = ['Ahmed', 'Sayed' , 'Ali', ['Shady', 'Amr' ,['Mohamed', 'Gamal']]];
// let [ , , , [a , ,[ , b]]] = myFriends

// console.log(a)
// console.log(b)

// console.log(a[0])
// console.log(a[2][1])

// #117 - Destructuring Arrays Part 3 - Swap Variables
// let book = 'video';
// let video = 'book';

// // Save book value in Temp
// let temp = book;

// // Change Book&Video values
// book = video;
// video = temp;

// [book , video] = [video, book]

// console.log(book)
// console.log(video)

// #118 & 119 - Destructuring Objects Part 1 & Part 2

// let obj = {
//     theName: 'Osama',
//     thAge: 39,
//     theTitle: 'Developer',
//     theCountry: 'Egy',
//     theColor: 'Green',
//     skills: {
//         html: 70 ,
//         css: 20 ,
//     }
// };
// console.log(obj.theName);
// console.log(obj.thAge);
// console.log(obj.theTitle);
// console.log(obj.theCountry);

// let theName = obj.theName;
// let thAge = obj.thAge;
// let theTitle = obj.theTitle;
// let theCountry = obj.theCountry;

// console.log(theName);
// console.log(thAge);
// console.log(theTitle);
// console.log(theCountry);

// ({theName, thAge , theTitle, theCountry} = obj);
// let {theName: a, thAge: b , theCountry, theColor:co ='Red', skills: {html:h = '100',css:style = '200'} } = obj;

// console.log(a);
// console.log(b);
// console.log(theCountry);
// console.log(co);
// console.log(`My Skill Progress is ${h} And ${style}`);

// let {html: skillOne , css: skillTwo} = obj.skills;
// console.log(`My Skill Progress is ${skillOne} And ${skillTwo}`);

// #120 - Destructuring Function Parameters

// let user = {
//     theName: 'Osama',
//     thAge: 39,
//     theCountry: 'Egy',
//     skills: {
//         html: 70 ,
//         css: 20 ,
//     }
// };
// showDetails()
// function showDetails(cont) {
//     console.log(cont.theName)
//     console.log(cont.thAge)
//     console.log(cont.skills.css)
// }
// function showDetails({theName:n, thAge:a, skills:{css:style}} = user) {
//     console.log(n)
//     console.log(a)
//     console.log(style)
// }

//#121 - Destructuring Mixed Content
let user = {
  theName: "Osama",
  thAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

let {theName, thAge: a, skills: [one, , three], addresses: { egypt: e }, } = user;

console.log(`your name is ${theName}`);
console.log(`your age is ${a}`);
console.log(`your skills is: ${one}, ,${three}`);
console.log(`you live in: ${e}`)