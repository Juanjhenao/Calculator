const currentValue = document.getElementById('currentValue');
const previousValue = document.getElementById('previousValue');

currentValue.textContent = `0`
let dot = `.`
let currentString;
let previousString;

function operate (number){                                            //al presionar cada numero
    if (number == `.`){
        if (currentValue.textContent == `0`){
            currentValue.textContent = `0`
        }
        else if (currentValue.textContent.includes('.')){
            return
        };
    }
    else if (currentValue.textContent == `0`){
        currentValue.textContent = ``
    };
    
    currentValue.textContent = `${currentValue.textContent}${number}` //se agrega numero entero en la cadena

};

function executeOperation (operator){                                      //al presionar una operacion matematica
    if (previousValue.textContent != `` && currentValue.textContent != ``){
        equals();
    };
        if (currentValue.textContent == `0`|| currentValue.textContent == ``){ //si la pantalla inicial es 0 o está vacia
                    if (operator == "-"){                                      // y la operacion selecionada es -
                currentValue.textContent = `-`                                 //se cambia el 0 o el vacio por - (para expresar numeros negativos)
                return
            };
        }
        else if (currentValue.textContent == `-`){                       //si en la pantalla inicial hay un menos
        return                                                       //no hacer nada
        }
    currentString = currentValue.textContent;                         //se añade el resultado de la cadena a una variable
    a = Number(currentString);                                        //se crea una variable que es la cadena transformada a numero
    operationChange(operator);                                       //cambia la variable que indica que operacion es
    previousValue.textContent = `${currentString} ${operator}`        //se muestra en previous value el numero y el operador
    currentValue.textContent = ``;                                   //current value pasa a estar vacio de nuevo
};



function operationChange (operator){
    if (operator == "+"){
        operatorTipe = "add";
    }
    else if (operator == "-"){
        operatorTipe = "subtract";
    }
    else if (operator == "×"){
        operatorTipe = "multiply";
    }
    else if (operator == "÷"){
        operatorTipe = "divide";
    };
};

function equals (){
 
    currentString = currentValue.textContent;
    b = Number(currentString);
    if (a == undefined  && b == undefined){
        return
    }
    else {
        if (operatorTipe == "add"){
        add(a,b);
        }
        else if (operatorTipe == "subtract"){
        subtract(a,b);
        }
        else if (operatorTipe == "multiply"){
        multiply(a,b);
        }
        else if (operatorTipe == "divide"){
        divide(a,b);
        }
    };
};

function add (a, b){
    previousValue.textContent = `${a} + ${b} =`
    currentValue.textContent = (a + b);
};
function subtract (a, b){
    previousValue.textContent = `${a} - ${b} =`
    currentValue.textContent = (a - b);
};
function multiply (a, b){
    previousValue.textContent = `${a} × ${b} =`
    currentValue.textContent = (a * b);
};
function divide (a, b){
    if (a == 0 && b == 0){
        previousValue.style.fontSize = "1.2em";
        previousValue.textContent = `if you can count, count me out`;
        currentValue.textContent = `:v`;
    }
    else{
    previousValue.textContent = `${a} ÷ ${b} =`
    currentValue.textContent = (a / b);
    };
};

function reset(){
    currentValue.textContent = `0`
    previousValue.textContent = ``
    window.location.reload();
};

function deleteNumber (){
    currentString = currentValue.textContent;
    let currentStringDeleted = currentString.substring(0, currentString.length - 1);
    currentValue.textContent = currentStringDeleted
    if (currentValue.textContent == ``){
        currentValue.textContent = `0`
    }
};

document.addEventListener('keydown', (Event) => {

   const keyName = Event.key;

    if (keyName == "1") operate(keyName);
    if (keyName == "2") operate(keyName);
    if (keyName == "3") operate(keyName);
    if (keyName == "4") operate(keyName);
    if (keyName == "5") operate(keyName);
    if (keyName == "6") operate(keyName);
    if (keyName == "7") operate(keyName);
    if (keyName == "8") operate(keyName);
    if (keyName == "9") operate(keyName);
    if (keyName == "0") operate(keyName);
    if (keyName == ".") operate(keyName);
    if (keyName == "+") executeOperation ("+");
    if (keyName == "*") executeOperation ("×");
    if (keyName == '/') executeOperation ("÷");
    if (keyName == '-') executeOperation ("-");
    if (keyName == "Backspace") deleteNumber ();
    if (keyName == "Enter") equals();
});