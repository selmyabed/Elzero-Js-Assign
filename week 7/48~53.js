// Task [1]
// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output
// for(let i = start; i <= end; i += start) {
//   if(i === exclude) continue;
//   console.log(i);
// }

// Task [2]

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let j = start; j > end; j--) {
//   if(j < start){
//     console.log(`${end}${j}`)
//   }else {
//     console.log(`${j}`)
//   }
//   if(j === stop) break;
// }

// Task [3]
// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++) {
//   console.log(i)
//   for( let j = breaker; j < end; j += breaker) {
//     console.log(`-- ${j}`)
//   }
// }

// Task [4]
// let index = 10;
// let jump = 2;
// let end = 0;

// for (let i = index; i > end; i -= jump) {
//   console.log(i);
//   if( i === jump*jump) break;
// }


// Task [5]

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = letter.length;

for(let i = friends.length - friends.length ; i < friends.length; i++) {
  if(friends[i].startsWith(letter.toUpperCase())) continue; 
  else {
    console.log(`${counter} ${friends[i]}`);
    counter++
  }
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"


// Task [6] 
// https://stackoverflow.com/questions/35927195/how-to-convert-uppercase-to-lower-case-and-vice-versa-without-using-regexp-in-ja
// let start = 0;
// let swappedName = "elZerO";
// let newWord = [];
// for(let i = start; i < swappedName.length; i++) {
//   if(swappedName[i] === swappedName[i].toLowerCase()) {
//     newWord[i] = swappedName[i].toUpperCase();
    
//   } else {
//     newWord[i] = swappedName[i].toLowerCase();
//   }
// }
// console.log(newWord.join(''))



// Task [7]

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i = ++start ; i < mix.length; i++) {
  if(typeof mix[i] === typeof 'hello')
    continue ;
  console.log(mix[i])
}
