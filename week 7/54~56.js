// Task [1]
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while ( counter < friends.length ) {
    if (typeof friends[counter] === 'number' || friends[counter].startsWith("A")) {
        counter++; 
        continue;
    }
        console.log(`${++index} => ${friends[counter]}`);
        counter++
}