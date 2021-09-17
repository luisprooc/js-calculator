const display = document.getElementById("display").firstElementChild;
const operators = Array.from(document.querySelectorAll("#operators button"));
const digits = Array.from(document.querySelectorAll("#digits button"));
const utils = Array.from(document.querySelectorAll("#utils"));
let prevValue = "0";

window.addEventListener("load",()=>{
    utils.map(util => util.addEventListener("click",(e)=>{
        e.target.id === "clear"? clearFn():EqualFn();   
    }));

    operators.map(operator => operator.addEventListener("click",introduceOperator));
    digits.map(digit => digit.addEventListener("click", introduceValue));
});


function displayAnimation(){
    setInterval(() => {
        if(display.classList.contains("black-display")){
            display.classList.replace("black-display","white-display");
        }
        else{
            display.classList.replace("white-display","black-display");
        }
    }, 1000);
}

function setDisplay(value){
    display.innerText += value;
    prevValue = value;
}

function introduceValue(e){
    if(prevValue === "0" && display.innerText[0] === "0") display.innerText = "";
    setDisplay(e.target.innerText);
}

function introduceOperator(e){

    if(/[1-9]/.test(prevValue) || e.target.innerText === "-"){
        setDisplay(e.target.innerText);
    }

    else if(/[*+/-]/.test(display.innerText) && e.target.innerText !== "-"){
        display.innerText = display.innerText.slice(0,-1) + e.target.innerText;
        prevValue = e.target.innerText;
        return;
    }
}


function clearFn(){
    if(display.innerText !== "0"){
        display.innerText = "0";
        prevValue = "0";
    }
    return;
}

function EqualFn(){
    if(/[*+-/]/.test(display.innerText) && /\d/.test(prevValue)){
        console.log("YES");
    }
}
