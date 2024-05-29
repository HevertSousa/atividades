const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res)=>{
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operacao = req.body.operacao;

    if(isNaN(num1)||isNaN(num2)){
        res.redirect('/?erro=Valores inválidos. Por favorm insira números');
        return;
    };

const resultado = calculadora.calcular(num1, num2, operacao);
    res.send(`
        <h1>Resultado da Operação</h1>
        <p>Resultado> ${resultado}</p>
        <a href="/">Voltar</a>`);
};