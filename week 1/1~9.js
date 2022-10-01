// Task     1

document.write('<h1 id="taskOne">Elzero</h1>');
document.getElementById('taskOne').style.color = 'red';
document.getElementById('taskOne').style.fontSize = '80px';
document.getElementById('taskOne').style.fontWeight = 'bold';
document.getElementById('taskOne').style.fontFamily = 'arial';
document.getElementById('taskOne').style.textAlign = 'center';


// Task     2
console.log('%cElzero %cWeb %cSchool' , "color:red; font-size:40px;","color:green; font-size:40px;","color:white; background-color:blue; font-weight: bold; font-size:40px;");

// Task     3
console.group("Group 1");
    console.log('Message One');
    console.log('Message two');
    console.group("Child Group");
        console.log('Message One');
        console.log('Message two');
        console.group("Grand Child Group");
            console.log('Message One');
            console.log('Message two');
        console.groupEnd();
    console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log('Message One');
console.log('Message two');
console.groupEnd();

// Task     4
console.table(["apples", "oranges", "bananas"]);

// Task     5
// console.log("Iam In Console");
/*document.write("Iam In Page");*/