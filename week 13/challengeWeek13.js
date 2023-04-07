//  #101 - DOM Challenge
document.body.style =
  "height: 100vh; margin: 0; background-color: rgb(236,236,236); font-family: \"Tahoma\", 'Arial' ";
// Start Header //
let header = document.createElement("header");
    header.className = "website-header";
let headerLogo = document.createElement("div");
let headerLogoText = document.createTextNode("Elzero");

// Appending
headerLogo.appendChild(headerLogoText);
header.appendChild(headerLogo);
document.body.prepend(header);

// Style
header.style = "display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: #fff;";
headerLogo.style = "font-size: 22px; font-weight: bold; color:#009688; ";

let nav = document.createElement("ul");

function createMenuItem(name) {
    let li = document.createElement("li");
    li.textContent = name;
    li.style = "padding: 0 10px; font-size: 16px; color: #555";
    return li;
}
// Appending
nav.appendChild(createMenuItem("Home"));
nav.appendChild(createMenuItem("About"));
nav.appendChild(createMenuItem("Services"));
nav.appendChild(createMenuItem("Content"));
header.appendChild(nav);
// Styling
nav.style = "list-style: none; display:flex; margin:0; padding:0 15px;";
// End Header //


let content = document.createElement("div");
content.className = "content";
// Style
content.style =
  "display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; background-color: #eee;";
// Append
header.after(content);
for(let i =0; i < 15; i++){
    content.appendChild(createBoxes(`${i+1}`));
}


function createBoxes(num) {
    let box = document.createElement("div");
    let boxNum = document.createElement('h1');
    let boxNumText = document.createTextNode(num);
    let boxTitle = document.createElement('p');
    let boxTitleText = document.createTextNode('Product');
    boxTitle.appendChild(boxTitleText);
    boxNum.appendChild(boxNumText);
    box.appendChild(boxNum);
    box.appendChild(boxTitle);
    box.className = "box";
    box.style = "box-sizing: border-box; width: calc((100% / 3) - 20px); padding: 50px; text-align: center; font-weight:bold;  background-color: #fff;";
    boxTitle.style = 'font-size: 14px; color:#009688; margin: 10px 0 0 0'
    boxNum.style ='margin:0;'

    return box;
}


// Footer
let footer = document.createElement('footer');
let footerText = document.createTextNode(`CopyRights`)
    footer.appendChild(footerText);
footer.style = 'background-color:#009688; padding: 19px; color: #fff; text-align:center;'
content.after(footer)