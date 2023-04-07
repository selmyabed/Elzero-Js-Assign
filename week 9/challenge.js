// Task [1]

names = (...users) => `[ ${users.join(' ], [ ')} ] => Done !`
console.log(names('Osama', 'Mohamed', 'Ali', 'Saeed'));


// Task [2]

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums[+(!true)]
console.log(calc(20, 50, 10, 60)); //80