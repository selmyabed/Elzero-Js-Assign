// task 2
document.write("<h1>Elzero</h1>");
document.querySelector('h1').style.color = "blue";
document.querySelector('h1').style.fontSize = "80px";
document.querySelector('h1').style.weight = "bold";
document.querySelector('h1').style.textAlign = "center";
document.querySelector('h1').style.fontFamily = "arial" ;
//task 3
console.log("%celzero %cweb %cschool" ," color: red; font-size: 40px; text-transform: capitalize" , 
                                    " color: green; font-size: 40px; text-transform: capitalize",
                                    " color: white; background-color: blue; font-size: 40px; text-transform: capitalize");

//task 4
console.group('Group 1');
console.log('Message one');
console.log('Message two');

    console.group('Child Group');
    console.log('Message one');
    console.log('Message two');

        console.group('Grand Child Group');
        console.log('Message one');
        console.log('Message two');
        console.groupEnd() // for Grand Child
    console.groupEnd() // for Child
console.groupEnd() // for Group 1

console.group('Group 2');
console.log('Message one');
console.log('Message two');
console.groupEnd()

//task 5 
console.table(['ELzero' , 'Ahmed' , 'Sameh', 'Gamal' , 'Aya']);

//task 6
// console.log("Iam In Console");
/*document.write("Iam In Page");*/