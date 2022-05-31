// Body
let body = document.querySelector("body")
body.style.width = "95%";
body.style.margin = "0 auto"

// Titre ppal
let titre = document.createElement("h1")
titre.innerText = "Le Dom - Exo: StyleGenerator"
titre.setAttribute("id", "montitre")

// Séparateur
let hr = document.createElement("hr");


// Ligne 1
let section1 = document.createElement("section")
section1.style.margin = "3vh 0"

let div1 = document.createElement("div")
div1.setAttribute("class", "carre")
div1.innerHTML = "W";
div1.style.backgroundColor = 'grey';
div1.addEventListener("click", () => {
    victime.style.border = "none"
    victime.style.borderRadius = "10px"
    victime.style.backgroundColor = "grey"
})

let div2 = document.createElement("div")
div2.setAttribute("class", "carre")
div2.innerText = "R"
div2.style.backgroundColor = 'red';
div2.addEventListener("click", () => {
    victime.style.border = "none"
    victime.style.borderRadius = "10px"
    victime.style.backgroundColor = "red"
})

let div3 = document.createElement("div")
div3.setAttribute("class", "carre")
div3.innerText = "G"
div3.style.backgroundColor = 'green';
div3.addEventListener("click", () => {
    victime.style.border = "none";
    victime.style.borderRadius = "10px"
    victime.style.backgroundColor = "green"
})

let div4 = document.createElement("div")
div4.setAttribute("class", "carre")
div4.innerText = "B"
div4.style.backgroundColor = 'blueviolet';
div4.addEventListener("click", () => {
    victime.style.border = "none";
    victime.style.borderRadius = "10px";
    victime.style.backgroundColor = "blueviolet"
})

// Mini rectangles
let div567 = document.createElement("div")
div567.setAttribute("id", "rect567")

let div5 = document.createElement("div")
div5.setAttribute("class", "rectangle")
div5.style.border = "4px solid black"
div5.addEventListener("click", () => {
    victime.style.border = "8px solid black"
})

let div6 = document.createElement("div")
div6.setAttribute("class", "rectangle")
div6.style.border = "2px dashed black"
div6.addEventListener("click", () => {
    victime.style.border = "8px dashed black"
})

let div7 = document.createElement("div")
div7.setAttribute("class", "rectangle")
div7.style.border= "1px solid black"
div7.addEventListener("click", () => {
    victime.style.border = "1px solid black"
})

div567.append(div5, div6, div7)

// Top
let div8 = document.createElement("div")
div8.setAttribute("class", "carre")
div8.innerText = "top"
div8.style.backgroundColor = "grey"
div8.addEventListener("click", () => {
    victime.style.border = "none"
    victime.style.borderRadius = "10px"
    victime.style.backgroundColor = "grey"
})

let div9 = document.createElement("div")
div9.setAttribute("class", "carre")
div9.innerText = "top"
div9.style.borderTop = "2px solid red"
div9.addEventListener("click", () => {
    // victime.style.border = "none"
    victime.style.borderRadius = "10px"
    victime.style.borderTop = "2px solid red";
    victime.style.backgroundColor = "none"
})

let div10 = document.createElement("div")
div10.setAttribute("class", "carre")
div10.innerText = "top"
div10.style.borderTop = "6px solid red"
div10.addEventListener("click", () => {
    // victime.style.border = "none"
    victime.style.borderTop = "6px solid red"
    victime.style.backgroundColor = "none"
})

section1.append(div1, div2, div3, div4, div567, div8, div9, div10)


// Ligne 2
let section2 = document.createElement("section")
section2.style.margin = "10vh 0"

let x = document.createElement("div")
x.setAttribute("id", "grisnoir")
x.style.border = "10px solid #C7C7C7"
x.style.backgroundColor = "black"
x.addEventListener("click", () => {
    victime.style.border = "10px solid #C7C7C7"
    victime.style.backgroundColor = "black"
})

let divv1 = document.createElement("div")
divv1.setAttribute("class", "ligne2")
divv1.style.border = "5px solid black"
divv1.addEventListener("click", () => {
    victime.style.border = "5px solid black";
})

let divv2 = document.createElement("div")
divv2.setAttribute("class", "ligne2")
divv2.style.borderTop = "5px solid black"
divv2.addEventListener("click", () => {
    victime.style.border = "2px inset";
    victime.style.borderTop = "5px solid black";
})

let divv3 = document.createElement("div")
divv3.setAttribute("class", "ligne2")
divv3.style.borderRight = "5px solid black"
divv3.addEventListener("click", () => {
    victime.style.border = "2px inset";
    victime.style.borderRight = "5px solid black";
})

let divv4 = document.createElement("div")
divv4.setAttribute("class", "ligne2")
divv4.style.borderBottom = "5px solid black"
divv4.addEventListener("click", () => {
    victime.style.border = "2px inset";
    victime.style.borderBottom = "5px solid black";
})

let divv5 = document.createElement("div")
divv5.setAttribute("class", "ligne2")
divv5.style.borderLeft = "5px solid black"
divv5.addEventListener("click", () => {
    victime.style.border = "2px inset";
    victime.style.borderLeft = "5px solid black";
})

section2.append(x,divv1, divv2, divv3, divv4, divv5)



// Ligne 3

let section3 = document.createElement("section")
section3.style.margin = "10vh 0"

let divvv1 = document.createElement("div")
divvv1.setAttribute("class", "ligne3")
divvv1.style.borderRadius = "20%"
divvv1.addEventListener("click", () => {
    victime.style.borderRadius = "unset"
    victime.style.borderRadius = "35px";
})

let divvv2 = document.createElement("div")
divvv2.setAttribute("class", "ligne3")
divvv2.style.borderTopLeftRadius = "20%"
divvv2.addEventListener("click", () => {
    victime.style.borderTopLeftRadius = "35px";
})

let divvv3 = document.createElement("div")
divvv3.setAttribute("class", "ligne3")
divvv3.style.borderTopRightRadius = "20%"
divvv3.addEventListener("click", () => {
    victime.style.borderRadius = "unset"
    victime.style.borderTopRightRadius = "35px";
})

let divvv4 = document.createElement("div")
divvv4.setAttribute("class", "ligne3")
divvv4.style.borderBottomRightRadius = "20%"
divvv4.addEventListener("click", () => {
    victime.style.borderRadius = "unset"
    victime.style.borderBottomRightRadius = "35px";
})


let divvv5 = document.createElement("div")
divvv5.setAttribute("class", "ligne3")
divvv5.style.borderBottomLeftRadius = "20%"
divvv5.addEventListener("click", () => {
    victime.style.borderRadius = "unset"
    victime.style.borderBottomLeftRadius = "35px";
})

section3.append(divvv1, divvv2, divvv3, divvv4, divvv5)


// Ligne 4
let section4 = document.createElement("section")
section4.style.margin = "10vh 0"

let victime = document.createElement("div")
victime.setAttribute("class", "ligne4")
// victime.addEventListener("click", () => {
//     victime.classList.toggle("lign4")
// })

section4.appendChild(victime)

document.body.append(titre, hr, section1, section2, section3, section4)