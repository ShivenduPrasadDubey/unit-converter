/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input")
const inputBtn = document.getElementById("conv-btn")
let legthInfo = document.getElementById("length")
let volInfo = document.getElementById("vol")
let massInfo = document.getElementById("mass")
inputBtn.addEventListener("click", function(){
    const valve = inputEl.value
    render(valve)
})
function render(value){
    const lengthFeet = value*3.281
    const lengthMeter = value*0.304785126
    const volumeGallon = value*0.264
    const volumeLitre = value*3.78787879
    const massPound = value*2.204
    const massKilo = value*0.453720508
    legthInfo.innerHTML = `${value} meters = ${lengthFeet.toFixed(3)} feet | ${value} feet = ${lengthMeter.toFixed(3)} meters`
    volInfo.innerHTML = `${value} litres = ${volumeGallon.toFixed(3)} gallons | ${value} gallons = ${volumeLitre.toFixed(3)} litres`
    massInfo.innerHTML = `${value} kilos = ${massPound.toFixed(3)} pounds | ${value} pounds = ${massKilo.toFixed(3)} kilos`
}
const modeButton = document.getElementById("modes")
const div1 = document.getElementById("divs1")
const div2 = document.getElementById("divs2")
const div3 = document.getElementById("divs3")
const h41 = document.getElementById("h31")
const h42 = document.getElementById("h32")
const h43 = document.getElementById("h33")
const l = document.getElementById("length")
const v = document.getElementById("vol")
const m = document.getElementById("mass")
const btm = document.getElementById("bottom-container")
const fweo = document.getElementById("body")
const pver = document.getElementById("mod")
pver.addEventListener("click", function(){
    btm.style.background = "#1F2937"
    div1.style.background = "#273549"
    div3.style.background = "#273549"
    div2.style.background = "#273549"
    h41.style.color = "#5A537B"
    h42.style.color = "#5A537B"
    h43.style.color = "#5A537B"
    l.style.color = "#353535"
    v.style.color = "#353535"
    m.style.color = "#353535"
    fweo.style.background = "#000000"
})
modeButton.addEventListener("click", function(){
    btm.style.background = "#F4F4F4"
    div1.style.background = "#FFFFFF"
    div3.style.background = "#FFFFFF"
    div2.style.background = "#FFFFFF"
    h41.style.color = "#5A537B"
    h42.style.color = "#5A537B"
    h43.style.color = "#5A537B"
    l.style.color = "#353535"
    v.style.color = "#353535"
    m.style.color = "#353535"
    fweo.style.background = "#FFFFFF"
})
