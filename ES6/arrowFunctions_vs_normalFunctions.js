// ----------------------------REGULAR FUNCTIONS-------------------

//Named function with multiple parameters:
function sum(a, b){
    return a + b;
}

//Named function with 1 parameter:
function isPositive(number){
    return number >= 0;
}

//Named function with no parameters:
function randomNumber() {
    return Math.random;
}

//Anonm function(with no name)
document.addEventListener("click", function(){
    console.log("Click");
})

// ----------------------------ARROW FUNCTIONS-------------------

let sum = (a, b) = a + b;

let isPositive = number => number >= 0;

let randomNumber = () => Math.random;

document.addEventListener("click", () => console.log("Click"));
