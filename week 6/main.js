
// Video #040 - Array Big into
// let myFriends = ['Selmy' , 'Ali' , "Mona" , ['Marawan' , 'Omar' , 'Diaa']]
// console.log(`hello ${myFriends[0]}`)
// console.log(`${myFriends[1][2]}`)
// console.log(`hello ${myFriends[3]}`)
// console.log(`hello ${myFriends[3][1]}`)
// console.log(`${myFriends[3][1][3]}`)
// console.log(`${myFriends[3][1][myFriends.length-1]}`)
// console.log(`${myFriends[3][1][myFriends[3][1].length-1]}`)

// console.log(myFriends);
// myFriends[1] = '3elwa' ;
// console.log(myFriends);
// myFriends[3] = ['Sameh' , 'amir']
// console.log(myFriends);


// Video #041 - Using Length With Array
    // Check your papers


// Video  #042 - Add And Remove From Array

// let myFriends = ['Selmy' , 'Ali' , "Mona"]
// console.log(myFriends)

// myFriends.unshift('hossam' , 'said');
// console.log(myFriends);

// myFriends.push('khalied' , 'Eman');
// console.log(myFriends);

// let first = myFriends.shift();
// console.log(myFriends);
// console.log(`First Name is ${first}`);

// let last =  myFriends.pop();
// console.log(myFriends);
// console.log(`Last Name is ${last}`);


// Video #043 - Searching Array

// let myFriends = ['Selmy' , 'Ali' , "Mona" , 'Abdo' , 'Selmy'];
// console.log(myFriends);
// console.log(myFriends.indexOf('Selmy'));
// console.log(myFriends.indexOf('Selmy' , 2));

// console.log(myFriends.lastIndexOf('Selmy'));
// console.log(myFriends.lastIndexOf('Selmy' , -2 ));

// console.log(myFriends.includes('Selmy' , 2));

// if (myFriends.indexOf('Mohamed') === -1 ) {
//     console.log(' Not Found')
// }



// Video #044 - Sorting Arrays

// let test = ['Said' , 10 , 23 , -10 , -2 , 20 , 0 , 5 , 22 , 2000 , 1970 , 'Hassan' ];
// console.log(test)
// console.log(test.sort().reverse())


// Video #045 - Slicing Array
// let myFriends = ['Osama' , 'Ali' , 'Ahmed' , 'Sayed' , 'Gamal' , 'Amir'];
// // بتعد من الشمال لليمين + ملهاش علاقه بالسالب او الموجب
// console.log(myFriends);
// console.log(myFriends.slice())
// console.log(myFriends.slice(2))
// console.log(myFriends.slice(2 ,5))
// console.log(myFriends.slice(-3))
// console.log(myFriends.slice(1 , -2))
// console.log(myFriends.slice(-5 , -2))
// // مش بتأثر فالمصفوفه الاساسية
// console.log(myFriends);


// console.log(myFriends.splice(0 , 0 , 'First' , 'Second'));


// Video #046 - Joining Arrays 
let myFriends = ['Osama' , 'Ali' , 'Ahmed' , 'Sayed' , 'Gamal' , 'Amir'];
let myNewFriends = ['Samar' , 'Sameh'];
let mySchoolFriends = ['Donya' , "Waeel"];

let allFriends = myFriends.concat(myNewFriends, mySchoolFriends , 'Gameel' , [1, 2]);

console.log(allFriends)
console.log(allFriends.join("  "));
console.log(allFriends.join(" ' ").toUpperCase());

