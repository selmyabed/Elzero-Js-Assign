// #123 - Set Data Types And Methods
// let myData = [1,1,1,2,3,'A'];
// // let myUniqueData = new Set([1,1,1,2,3]);
// // let myUniqueData = new Set(myData);
// // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();

// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");

// console.log(`Is set Has "A" ${myUniqueData.has('a'.toUpperCase())}`)

// console.log(myData)
// console.log(myUniqueData)

// console.log(myUniqueData.size)

// console.log(myData[0])
// console.log(myUniqueData[0])

// // myUniqueData.delete(2)
// console.log(myUniqueData.delete(2)) // True

// myUniqueData.clear()

// console.log(myUniqueData)
// console.log(myUniqueData.size)

// console.log(myUniqueData.has('A'))

// 124 - Set vs WeakSet And Garbage Collector
// let mySet = new Set([1,1,1,2,3,'A',"A"]);

// console.log(mySet);

// // Size
// console.log(`Size OF Elements Inside mySet : ${mySet.size}`);

// // Values + keys [Alias for Values]
// let iterator = mySet.values();

// console.log(iterator)
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// // ForEach
// mySet.forEach((el) => console.log(el))

// // Type OF Data
// let myws = new WeakSet([{A:1, B:2}]);
// console.log(myws)

// let iter = myws.values(); // Error

// console.log(iter.next().value); // Error



// #125 - Map Data Type Vs Object

// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//   10: "Number",
//   '10': "String",
// };

// console.log(myNewObject[10]);

// let myNewMap = new Map();
// myNewMap.set(10,'Number')
// myNewMap.set('10','String')
// myNewMap.set(true,'Boolean')
// myNewMap.set({a:0 , b:1},'Object')
// myNewMap.set(anything => 0,'Function')

// console.log(myNewMap.get(10));
// console.log(myNewMap.get('10'));

// console.log(myNewObject)
// console.log(myNewMap);


//  #126 - Map Methods

// let myMap = new Map([
//     [10,'Number'],
//     ['10','String'],
//     [false, 'Boolean'],
// ]);

// // myMap.set(10,'Number')
// // myMap.set('10','String')

// console.log(myMap)

// console.log(myMap.get(10))
// console.log(myMap.get('10'))
// console.log(myMap.get(false))

// console.log(myMap.has(false))

// console.log(myMap.size)

// console.log(myMap.delete('10'))

// console.log(myMap.size)

// myMap.clear()

// console.log(myMap.size);



// #127 - Map Vs WeakMap
// let mapUser = { theName: 'Elzero'};
// let myMap = new Map();

// myMap.set(mapUser, 'Object Value');

// mapUser = null; // Override The Reference

// console.log(myMap)

// console.log('@'.repeat(20))

// let wMapUser = { theName: 'Elzero'};
// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, 'Object Value')
// wMapUser  = null;
// console.log(myWeakMap);



// #128 - Array.from Method

// console.log(Array.from('selmy'))
// console.log(Array.from("123456" , (n) => +n + +n ))

// let myArray = [1,2,3,1,1,4];

// let mySet = new Set(myArray)

// console.log(Array.from(mySet))
// console.log(mySet)



// #129 - Array.copyWithin Method
// let myArray = [10,20,30,40,50,"A","B"]
// myArray.copyWithin(1 ,-2, -1)
// console.log(myArray)


// #130 - Array.some Method
// let nums = [1,2,3,4,5,6,7,8,9,10];

// let myNumber = 5;

// let check = nums.some(function(e) {
//     // console.log(this)
//     return e > myNumber
// }, myNumber)

// console.log(check)

// function checkValues(arr, val) {
//     return arr.some(function(e) {
//         return e === val;
//     });
// };
// console.log(checkValues(nums, 40))

// let range = {
//     min: 10,
//     max: 20,
// };

// let checkRange = nums.some(function(e){
//     return e >= this.min && e <= this.max;
// }, range)

// console.log(checkRange)


// #131 - Array.every Method

// let locations = {
//     20: 'place 1',
//     30: 'place 2',
//     10: 'place 3',
//     40: 'place 4',
// };
// let mainLocation = 15;

// let myKeys = Object.keys(locations).map((n) => +n)
// console.log(myKeys)

// let check = myKeys.every((e) => e > this ,mainLocation);
// console.log(check);



// #132 - Spread Syntax And Use Cases
console.log('Selmy')
console.log(...'Selmy')
console.log([...'Selmy'])

let myArr1 = [1,2,3]
let myArr2 = [4,5,6]

let allArr = [...myArr1 , ...myArr2]
console.log(allArr);

let copiedArr = [...myArr1];
console.log(copiedArr);

let allFriends = ['Osama', 'Ahmed','Wael'];
let thisYear = ['Mustafa','Hossam','Abdulla'];

allFriends.push(...thisYear)
console.log(allFriends)

let objOne = {
    a:1,
    b:2,
}
let objTwo = {
    c:3,
    d:4,
}

console.log({...objOne,...objTwo})