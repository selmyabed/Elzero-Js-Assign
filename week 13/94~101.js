// Task[3]
let ourElement = document.querySelector('.our-element');
let startDiv = ourElement.cloneNode();
let endDiv = ourElement.cloneNode();
ourElement.nextElementSibling.remove();

function cloneDiv(ele , type) {
    ele.className = type.toLowerCase();
    ele.title = `${type} Element`;
    ele.setAttribute('data-value', type);
    ele.innerText = type;
}
cloneDiv(startDiv, 'Start')
cloneDiv(endDiv, 'End')

ourElement.before(startDiv)
ourElement.after(endDiv)

// Task[4]
let taskFour = document.querySelector("#task-four div")
console.log(taskFour.lastChild.nodeValue.trim())

// Task[5]
let taskFive = document.querySelector('#task-five').children;
// for(let i =0 ; i< taskFive.length; i++) {
//     taskFive[i].addEventListener('click' , function(){
//         console.log(`This Element is ${(taskFive[i].tagName).toLowerCase()}`)
//     })
// }

Array.from(taskFive).forEach(function(element) {
    element.addEventListener('click' , function(){
        console.log(`This Element is ${(element.tagName).toLowerCase()}`)
    })
});

// Task[2] Challenge
let addInput = document.querySelector('.classes-to-add')
let removeInput = document.querySelector('.classes-to-remove')
let currentElement = document.querySelector("[title='Current']")
let cls = document.querySelector('.classes-list div')
function addRem() {
    // Remove all Span at start
    document.querySelectorAll('span').forEach(ele => ele.remove());

    // Add & Remove classes to current
    for(let i = 0; i < this.value.trim().split(" ").length; i++) {
        if(addInput.value) 
            currentElement.classList.add(addInput.value.toLowerCase().trim().split(" ")[i])
        if(removeInput.value) 
            currentElement.classList.remove(removeInput.value.toLowerCase().trim().split(" ")[i])
        
    }

    // Add & Remove Class Span
    if(currentElement.classList.length) {
        [...currentElement.classList].sort().forEach(el => {
            let clSpan = document.createElement('span')
            clSpan.textContent = el;
            cls.append(clSpan)
        })
    } else cls.textContent = 'No Classes To Show';
    this.value = '';
}

addInput.onblur = addRem;
removeInput.onblur = addRem;