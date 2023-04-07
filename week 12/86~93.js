// // Task [1]
// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementsByClassName("element"));
// console.log(document.body.firstElementChild);
// console.log(document.body.firstChild);
// console.log(document.body.children[0]);
// console.log(document.body.childNodes[0]);
// console.log(document.querySelector("div"));
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector('[class="element"]'));
// console.log(document.querySelector('[name="js"]'));
// console.log(document.querySelectorAll("div"));
// console.log(document.querySelectorAll("#elzero"));
// console.log(document.querySelectorAll('[class="element"]'));
// console.log(document.querySelectorAll('[name="js"]'));

// // Task [2]
// let taskTwo = document.images;

// let i = 0;
// for (i = 0; i < taskTwo.length ; i++) {
//   if (taskTwo[i].src === "#" || taskTwo[i].alt === "") {
//     taskTwo[i].alt = "Elzero logo";
//     taskTwo[i].src =
//       "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   }
// }
// // Task [3]
// let input = document.querySelector('input')
// let result = document.getElementsByClassName('result')[0]
// const dollar = 15.6;
// input.oninput = function() {
//     result.innerHTML = `${input.value} USD Dollar = ${(input.value * dollar).toFixed(2)} Egyptian Pound`
// }

// // Task [4]
// let one = document.querySelector('.one')
// let two = document.querySelector('.two')
// let help;

//     help = one.title;
//     one.title = two.title;
//     two.tile = help

//     help = one.innerHTML;
//     one.innerHTML = two.innerHTML;
//     two.innerHTML = `${help} ${one.attributes.length}`

// console.log(one)
// console.log(two)

// // Task [5]
// let taskFive = document.querySelector('.task-5')
// console.log(taskFive)

/* ------------------------------------------------------------------------------------------------------ */

// Task [1]
console.log(document.querySelector("div"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector('[name="js"]'));
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll('[name="js"]')[0]);
console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
console.log(document.body.childNodes[3]); // عشان الكومنت و النص   3

// Task [2]
let taskTwo = document.querySelector(".task-2");
for (i = 0; i < taskTwo.children.length; i++) {
  // taskTwo.children[i].firstElementChild.setAttribute('alt' , 'Elzero Logo')
  taskTwo.children[i].firstElementChild.alt = "Elzero Logo";
  taskTwo.children[i].firstElementChild.src =
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  taskTwo.children[i].firstElementChild.style = "background-color: #ddd";
}

// Task [3]
let input = document.querySelector("input");
let result = document.querySelector(".result");
const dollar = 15.6;
input.oninput = function () {
  result.innerHTML = `${input.value} USD Dollar = ${(
    input.value * dollar
  ).toFixed(2)} Egyptian Pound`;
};

// Task [4]
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let help;

help = one.title;
one.title = two.title;
two.title = help;

help = one.textContent;
one.textContent = two.textContent;
two.textContent = `${help} ${two.attributes.length}`;

// Task [5]
let taskFive = document.querySelector(".task-5");
for (i = 0; i < taskFive.children.length; i++) {
  if (taskFive.children[i].hasAttribute("alt")) {
    taskFive.children[i].setAttribute("alt", "Old");
  } else {
    taskFive.children[i].setAttribute("alt", "Elzero New");
  }
}

// Task [6] Challenge
let myForm = document.getElementById("form");
let myInput = document.querySelectorAll(".input")[0];
let myInputText = document.querySelectorAll(".input")[1];
let myInputType = document.querySelectorAll(".input")[2];

  myForm.onsubmit = function (el) {
    el.preventDefault();
    document.querySelectorAll('.box').forEach(el => el.remove())
      for (i = 0; i < myInput.value; i++) {
        let myMainElement = document.createElement(myInputType.value);
        let myText = document.createTextNode(myInputText.value + " " +myInputType.value) 
        myMainElement.appendChild(myText)
        myMainElement.className = "box";
        myMainElement.setAttribute("title", "Element");
        myMainElement.setAttribute("id", `id-${i}`);
        document.body.querySelector(".results").appendChild(myMainElement);
        document.querySelector(".results").style ="display: flex; justify-content: flex-start; flex-wrap: wrap; gap:20px;  margin: 50px auto;  padding: 15px; background-color: #ddd; ";
        document.querySelector(".results").children[i].style ="width: calc((100% / 3) - 20px); padding: 25px 0; background-color: #009688; text-align: center; border-radius: 10px; font-weight: bold; color: #Fff; margin-bottom: 5px;";
      }
  };
