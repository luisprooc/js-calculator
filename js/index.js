const display = document.getElementById("display").firstElementChild;
const operators = Array.from(document.querySelectorAll("#operators button"));
const digits = Array.from(document.querySelectorAll("#digits button"));
const utils = Array.from(document.querySelectorAll("#utils"));

window.addEventListener("load",()=>{
    //displayAnimation();
    utils.map(util => util.addEventListener("click",(e)=>{
        e.target.id === "clear"? clearFn():EqualFn();   
    }));

    operators.map(operator => operator.addEventListener("click",introduceOperator));
    digits.map(digit => digit.addEventListener("click", introduceValue));
    localStorage.setItem("input","0");
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
    localStorage.setItem("input",display.innerText);
}

function introduceValue(e){
    if(localStorage.getItem("input")[0] === "0"){
        display.innerText = "";
    }
    setDisplay(e.target.innerText);
}

function introduceOperator(e){
    if(!/_{3}/.test(display.innerText)){
        display.innerText += e.target.innerText;
    }
}


function clearFn(){
    if(display.innerText !== "0"){
        display.innerText = "0";
        localStorage.setItem("input","0");
    }
    return;
}

function EqualFn(){
    if(/[*+-/]/.test(JSON.stringify(localStorage.getItem("input")))){
        console.log("YES")
    }
}
