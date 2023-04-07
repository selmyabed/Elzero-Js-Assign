// #079 - Object - Introduction
// let user = {
//     // Properties
//     theName: 'Selmy',
//     theAge: 19,
//     // Methods
//     sayHello: function(){
//         return 'Hello'
//     },
// };
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());

// #080 - Dot Notation vs Bracket Notation
//

//  #081 - Nested Object And Advanced Trainings
// let user = {
//   name: "Osama",
//   age: 38,
//   skills: ["Html", "Css", "Js"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     // (User.available || this.available)
//     if (user.available === true) return "Free For Work";
//     else return "Not Free";
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills.join(" "));
// console.log(user.skills[2]); // Access with Index
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt);
// console.log(user.addresses.egypt.one);
// console.log(user.addresses.egypt.two);
// console.log(user['addresses'].egypt.one);
// console.log(user['addresses']['egypt']);
// console.log(user['addresses']['egypt']['one']);

// console.log(user.checkAv())



// #082 - Create Object With New Keyword
// let user = new Object({
//     age: 20,
// });

// console.log(user)

// user.age = 18;
// user['country'] = 'Egypt';

// user.sayHello = function() {
//     return 'Hello';
// }

// console.log(user)
// console.log(user.age)
// console.log(user.country)
// console.log(user.sayHello())


// #083 - This Keyword

// console.log(this)
// console.log(this === window)

// myVar = 100;
// console.log(window.myVar)
// console.log(this.myVar)

// function sayHello() {
//     console.log(this)
//     return this
// }
// sayHello();
// console.log(sayHello() == window)

// document.getElementById('bt').onclick = function () {
//     console.log(this) // That 'this'  بتعود علي الظرار
// }

// let user = {
//     age: 38,
//     ageInDays: function() {
//         console.log(this)
//         return this.age * 365;
//     },
// };

// console.log(user.age)
// console.log(user.ageInDays())


// #084 - Create Object With Create Method
// let user = {
//     age: 40,
//     doubleAge: function() {
//         return this.age * 2
//     },
// };
// console.log(user)
// console.log(user.age)
// console.log(user.doubleAge())

// let obj = Object.create({})
// obj.a = 100
// console.log(obj)

// let copyObj = Object.create(user)
// copyObj.age = 50;
// console.log(copyObj)
// console.log(copyObj.age)
// console.log(copyObj.doubleAge())


// #085 - Create Object With Assign Method
let obj1 = {
    prop1: 1,
    meth1: function() {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function() {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 1,
    prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
finalObject.prop1 = 100;
finalObject.prop4 = 4;
console.log(finalObject);


let newObject = Object.assign({}, obj1, {prop5: 5, prop6: 6})
console.log(newObject);
