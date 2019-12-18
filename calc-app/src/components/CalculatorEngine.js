const math = require('mathjs');

let currentValue = '';
let register =[];
let history = [];
let result = '';

class CalculatorEngine {
    constructor (){
        history = [];
        register =[];
        currentValue = '';
        result = '';
    }

    inputDigit(digit){
        debugger;
        if(result !== ''){
            result = '';
            currentValue = '';
        }

        currentValue += digit;
    }

    inputDecimal(){
        if(result !== ''){
            result = '';
            currentValue = '';
        }

        if(currentValue.indexOf('.')>=0){
            return;
        }

        if(currentValue === ''){
            currentValue += '0.';
        }else{
            currentValue+='.';
        }
    }

    clear(){
        currentValue = '';
        register =[];
        result = '';
    }

    clearAll(){
        currentValue = '';
        register =[];
        result = '';
        history =[];
    }

    clearHistory(){
        history = [];
    }
    
    delete(){
        if (currentValue === ''){
            return;
        }

        currentValue = currentValue.substring(0, currentValue.length - 1);
    }

    add(){
        if (currentValue === ''){
            return;
        }
        register.push(currentValue);
        register.push('+');

        currentValue = '';
    }

    substract(){
        if (currentValue === ''){
            return;
        }
        register.push(currentValue);
        register.push('-');

        currentValue = '';
    }

    multiply(){
        if (currentValue === ''){
            return;
        }
        register.push(currentValue);
        register.push('*');

        currentValue = '';
    }

    divide(){
        if (currentValue === ''){
            return;
        }
        register.push(currentValue);
        register.push('/');

        currentValue = '';
    }

    equals(){
        if (currentValue === ''){
            return;
        }

        register.push(currentValue);

        const expression = register.join(' ');
        
        result = math.evaluate(expression);
        currentValue = result.toString();
        history.splice(0, 0, { expression, result}); //agrega historia al principio del array
        register = [];
    }

    loadHistory(index){
        currentValue = history[index]
    }

    toggleSign(){
        currentValue = (parseFloat(currentValue) * (-1)).toString();
    }

    getValue(){
        return currentValue;
    }

    getExpression(){
        return register.join(' '); // junta los numeros y signos del array con un espacio
    }

    getHistory(){
        return history;
    }

    getResult(){
        return result;
    }
}

export default CalculatorEngine;