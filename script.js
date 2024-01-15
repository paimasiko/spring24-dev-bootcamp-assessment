// let x = document.getElementById("moveable-div");



// divdrag(x);


// function divdrag(div) {
//     var p1 = 0
//     var p2 = 0
//     var p3 = 0
//     var p4 = 0

//     div.onmousedown = dmousedrag  
// }
// function dmousedrag(e) {
//     e = window.Event
//     p3 = e.clientX;
//     p4 = e.clientY;
//     document.onmouseup = dclosediv;
//     document.onmousemove = dragdiv;
// }
// function dragdiv(d) {
//     d = window.Event
//     p3 = d.clientX
//     p4 = d.clientY
//     x.style.top = (x.offsetTop - (p4 - d.clientY) + "px");
//     x.style.left = (x.offsetLeft - (p3 - d.clientX) + "px");
// }
// function dclosediv() {
//     document.onmouseup = null;
//     document.onmousemove = null;
// }


// const movediv = document.("")

// divs.addEventListener("mousedown",)

// function mousemovement() {

// }

const movediv = document.getElementById("moveable-div");

let offset1 = movediv.style.left;
let offset2 = movediv.style.right;
console.log(offset2.toString)
let mousePX
let mousePY
let mousedown = false;


// movediv.addEventListener("mousedown", () => {
//     movediv.addEventListener("mousemove", drag);
// });
// document.addEventListener("mouseup", () => {
//     movediv.removeEventListener("mousemove", drag);
// });


// function drag({ movementX, movementY }) {
//     let movedivStyle = window.getComputedStyle(movediv);
//     movediv.style.left = parseInt(movedivStyle.left) + movementX + "px";
//     movediv.style.top = parseInt(movedivStyle.top)  + movementY + "px";
// }

movediv.style.marginLeft = "auto"
movediv.style.marginRight = "auto"
movediv.addEventListener("mousedown", (e) => {
    mousedown = true;
    offset1 = movediv.offsetLeft - e.clientX
    offset2 = movediv.offsetTop - e.clientY
    
}, true);

document.addEventListener("mouseup", () => {
    mousedown = false;
}, true);

document.addEventListener("mousemove", (env) => {
    env.preventDefault();
    if (mousedown) {
        mousePX = env.clientX;
        mousePY = env.clientY;
        movediv.style.left = (mousePX + offset1) + 'px';
        movediv.style.top = (mousePY + offset2) + 'px';
        
    }
}, true);