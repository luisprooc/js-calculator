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

function introduceValue(e){
    if(/_{3}/.test(display.innerText)){
        display.innerText = "";
    }
    display.innerText += e.target.innerText;
}

function introduceOperator(e){
    if(!/_{3}/.test(display.innerText)){
        display.innerText += e.target.innerText;
    }
}


function clearFn(){
    display.innerText = "0";
}

function EqualFn(){
    console.log(display.innerText)
}