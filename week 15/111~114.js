// // Challenge
// let myForm = document.querySelector('form')
// let submit = document.querySelector(".add")
// let input = document.querySelector('.input')
// let result = document.querySelector('.tasks')
// myForm.onsubmit = createTask()

// function createTask() {
//     let task = document.createElement('div');
//     let taskText = document.createTextNode(input.value);
//     let taskDelete = document.createElement('div')

//     // Append 
//         task.appendChild(taskText);
//         taskDelete.innerHTML = 'Delete';
//         result.appendChild(task);
//     // Style
//     task.style = 'display: flex; flex:1; padding: 15px 15px 0; border-radius: 6px; margin-bottom: 15px;';
//     taskDelete.style = 'background-color: red; padding: 2px 5px; color: red; border-radius: 6px;';
// }


// Task[1]
let font = document.querySelector("#font")
let color = document.querySelector("#color")
let size = document.querySelector("#size")
let outPut = document.querySelector('.out-put')

font.onchange = function() {
    window.localStorage.setItem('font', font.value)
    document.body.style.fontFamily = font.value
}
color.onchange = function() {
    window.localStorage.setItem('color', color.value)
    document.body.style.color = color.value
}
size.onchange = function() {
    window.localStorage.setItem('size', size.value)
    document.body.style.fontSize =  size.value
}
document.body.style.fontFamily = window.localStorage.getItem('font')
document.body.style.color = window.localStorage.getItem('color')
document.body.style.fontSize = window.localStorage.getItem('size')

font.value = window.localStorage.getItem('font');
color.value = window.localStorage.getItem('color')
size.value = window.localStorage.getItem('size');

// Task[2]
let form2 = document.querySelector('.task-two');
let inputText2 = document.querySelector('.task-two [type="text"]')
let inputNum2 = document.querySelector('.task-two [type="number"]')
let inputColor2 = document.querySelector('.task-two [type="color"]')
let select2 = document.querySelector('#select')

form2.onsubmit = function() {
    window.sessionStorage.setItem('input-1' ,inputText2.value)
    window.sessionStorage.setItem('input-2' ,inputNum2.value)
    window.sessionStorage.setItem('input-3' ,inputColor2.value)
    window.sessionStorage.setItem('input-4' ,select2.value)
}
inputText2.value = window.sessionStorage.getItem('input-1')
inputNum2.value = window.sessionStorage.getItem('input-2')
inputColor2.value = window.sessionStorage.getItem('input-3')
select2.value = window.sessionStorage.getItem('input-4')