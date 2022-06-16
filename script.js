const currentValue = document.getElementById('currentValue');
const previousValue = document.getElementById('previousValue');


let power = true;

function operate (number){
    if(power == true){
        currentValue.textContent = `${currentValue.textContent}${number}`;
        currentSting = currentValue.textContent;
        a = Number(currentSting);
    }
    else if(power == false){
        currentValue.textContent = `${currentValue.textContent}${number}`;
        previousString = currentValue.textContent;
        b = Number(previousString);
    };    
};

function executeOperation (operator){
    if (power == true){
        power = false;
        previousValue.textContent = `${currentSting} ${operator}`
        currentValue.textContent = ``;
    }

    else if (power == false){
        power = true;
        previousValue.textContent = `${previousString} ${operator}`
        currentValue.textContent = ``;
    };
};


function equals (){
    add (a,b);
};





function add (a, b){
    console.log(a + b);
};
// function subtract (a, b){
//     return (a - b);
// };
// function multiply (a, b){
//     return (a * b);
// };
// function divide (a, b){
//     return (a / b);
// };
