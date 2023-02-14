//! Create three color buttons that change the document color on click
//!! Use closure



function changeColor(color) {
    return function() {
    document.body.style.background = color
    }
}

const bgColorBlue = changeColor("blue")
const bgColorPink = changeColor("pink")
const bgColorGreen = changeColor("green")



document.querySelector("#blue").addEventListener("click", bgColorBlue)

document.querySelector("#pink").addEventListener("click", (bgColorPink))

document.querySelector("#green").addEventListener("click", bgColorGreen)


// function makeBodyBlue() {
//     document.body.style.background = 'blue'
// }

// function makeBodyPink() {
//     document.body.style.background = 'pink'
// }


// function makeBodyGreen() {
//     document.body.style.background = 'green'
// }

// document.querySelector("#blue").addEventListener("click", makeBodyBlue)
// document.querySelector("#pink").addEventListener("click", makeBodyPink)
// document.querySelector("#green").addEventListener("click", makeBodyGreen)