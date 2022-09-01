const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(x, y) 
    {
        const validateX = validate({ x },  CalculadoraConstraint.calculadoraConstraint);
        const validateY = validate({ y },  CalculadoraConstraint.calculadoraConstraint);       
        if(validateX !== undefined || validateY !== undefined){
            return 'Error';
        }
        let soma = x + y;
        return soma;
    },

    subtracao(x, y) 
    {
        const validateX = validate({ x },  CalculadoraConstraint.calculadoraConstraint);
        const validateY = validate({ y },  CalculadoraConstraint.calculadoraConstraint);       
        if(validateX !== undefined || validateY !== undefined){
            return 'Error';
        }
        let subt = x - y;
        return subt;
    },

    multiplicacao(x, y) 
    {
        const validateX = validate({ x },  CalculadoraConstraint.calculadoraConstraint);
        const validateY = validate({ y },  CalculadoraConstraint.calculadoraConstraint);       
        if(validateX !== undefined || validateY !== undefined){
            return 'Error';
        }
        let mult = x * y;
        return mult;
    },

    divisao(x, y) 
    {
        const validateX = validate({ x },  CalculadoraConstraint.calculadoraConstraint);
        const validateY = validate({ y },  CalculadoraConstraint.calculadoraConstraint);       
        if(validateX !== undefined || validateY !== undefined){
            return 'Error';
        }
        let div = x / y;
        return div;
    },

    exponenciacao(x, y) 
    {
        const validateX = validate({ x },  CalculadoraConstraint.calculadoraConstraint);
        const validateY = validate({ y },  CalculadoraConstraint.calculadoraConstraint);       
        if(validateX !== undefined || validateY !== undefined){
            return 'Error';
        }
        let expo = x ** y;
        return expo;
    }
    
};

module.exports = Calculadora;