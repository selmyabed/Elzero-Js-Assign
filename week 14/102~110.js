// Task[1]
// let msg =  prompt('Print Number From - To' , 'Example: 5-20');
// let fistNum = parseInt(msg.slice(0,msg.indexOf("-")));
// let lastNum = parseInt(msg.slice((msg.indexOf("-"))+1));
// if(fistNum > lastNum ) {
//     let help;
//     help = fistNum;
//     fistNum = lastNum;
//     lastNum = help;
// }
// for(i=fistNum; i<=lastNum; i++) {
//     console.log(i)
// }

// Task [2]
let popup = document.createElement("div");
let popupTitle = document.createElement("h2");
let popupDesc = document.createElement("p");
let xIcon = document.createElement('div');
    xIcon.innerHTML = 'x'
// Append
popupTitle.innerHTML = 'Welcome'
popupDesc.innerHTML = 'Welcome To Elzero Web School'
// popupTitle.appendChild(popu
popup.appendChild(popupTitle);
popup.appendChild(popupDesc);
popup.appendChild(xIcon)
document.body.appendChild(popup);
// Style
popup.style =
  "display:none;  width: 500px; position: relative; top:50%; left: 50%; transform: translate(-50% ,-50%); background-color: #f5f3f4; border: 1px solid #ccc; padding: 30px; text-align:center; font-family: arial;";
xIcon.style = 'position: absolute; top:-10px; right:-10px; background-color: red; color: #fff; border: 2px solid #fff; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;'
// setTimeout(function(){
//     popup.style.display = 'block';
//     document.body.style = 'background-color: #1f1a1a4d'
// },2000)

xIcon.onclick = function() {
    popup.remove()
    document.body.style.backgroundColor = '#fff'
}

// Task [3] & [4]
let myDiv = document.querySelector("div");
let stop = setInterval(function(){
    myDiv.innerHTML -=1;
    if(myDiv.innerHTML==='5') {
        // location.assign('https://elzero.org')
        window.open('https://elzero.org',"_blank" ,"height=400, width=400")
    }else if(myDiv.innerHTML==='0'){
        clearInterval(stop);
    }
},1000)

// Task [5]