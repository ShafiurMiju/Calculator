
const display = document.getElementById("display");

function showDisplay(value){
    display.innerHTML += value;
}

function clearAll(){
    display.innerHTML = "";
}

function result(){
    display.innerHTML = eval(display.innerHTML);
}