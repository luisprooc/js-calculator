const display = document.getElementById("display").firstElementChild;
const operators = Array.from(document.querySelectorAll("#operators button"));
const utils = Array.from(document.querySelectorAll("#utils"));

window.addEventListener("load",()=>{
    displayAnimation();
    utils.map(util => util.addEventListener("click",(e)=>{
        e.target.id === "clear"? clearFn():EqualFn();   
    }));
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

function clearFn(){
    display.textContent = "0";
}

function EqualFn(){
    return
}