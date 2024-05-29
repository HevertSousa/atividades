exports.calcular = (num1, num2, operacao) => {
    let resultado;

    switch(operacao){
        case'+':
            resultado = num1 + num2
            break;
        case'-':
            resultado = num1 - num2
            break;
        case'*':
            resultado = num1 * num2
            break;
        case'/':
            if(num2 !==0){
                resultado = num1 / num2
            } else {
                resultado = 'Erro: Divisão por zero';
            }
            break;
        default:
            resultado = 'Operação Inválida'
    }
    return resultado;
};