const button = document.getElementById("btn");
const color = document.getElementById("color");


const colors = ["#ff5703" , "red", "blue", "purple", "orange"];



const hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
]

function getRandomHexValue(){
    return Math.floor(Math.random()*hexValues.length);
}

button.addEventListener("click", ()=>{
    let stringColor = generateHex();
    document.body.style.backgroundColor = stringColor;
    color.textContent = stringColor;
})


function generateHex(){
    let hex = "#";
    for(let i = 0; i < 6; i++){
        hex+=hexValues[getRandomHexValue()];
    }
    return hex;
}

