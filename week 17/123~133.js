// Task[1]
let  setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers)
console.log(Array.from(setOfNumbers)[2])

// Task[2]
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let mySet = new Set(myFriends)
let convert = Array.from(mySet).sort()
console.log(convert)

// Task[3]
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
let objConvert = Object.entries(myInfo)
let myMap = new Map(objConvert);
console.log(myMap)
console.log(myMap.size)
console.log(myMap.has('role'))

// Task[4]
let theNumber = 100020003000;
// let myNum = new Set(...theNumber.toString())
// let myNum = Array.from(new Set(theNumber.toFixed())).filter((n) => n > 0)
console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));

// Task[5]
let theName = "Elzero";
console.log(theName.split(""))
console.log([...theName])
console.log(Array.from(theName))
console.log(Object.assign([], theName))
console.log([...theName].copyWithin(0))
console.log([...new Set(theName)])
console.log([...theName].filter((el) => true))

// Task[6]

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// chars.sort()
// chars.copyWithin(0,3,6);
// console.log(chars)
// // Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// chars.sort()
// chars.copyWithin(0,4,8);
// console.log(chars)
// // Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']


// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// chars.copyWithin(2)
// console.log(chars)
// // Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

// Task[7]
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne, ...numsTwo])
console.log(numsOne.concat(numsTwo))
numsOne.push(...numsTwo)
console.log(numsOne)
// console.log(Array.from(numsOne.join("") + numsTwo.join("")))


// Task [8]
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log( Number(Math.max(...n1)) * [...n1, ...n2].length)
