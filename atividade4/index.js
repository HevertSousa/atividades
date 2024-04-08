// Atividade 04
// Desenvolvimento WEB 
// Hevert Sousa
// UC19106625

const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = process.env.PORT || 3000;


// Definição de rota com express
app.get('/somar/:a/:b', (req, res) => {
    // Recebendo variáveis da URL
  const { a, b } = req.params;
  const resultado = calculadora.somar(parseFloat(a), parseFloat(b));
  res.send(resultado.toString());
});

// Definição de rota com express
app.get('/subtrair/:a/:b', (req, res) => {
    // Recebendo variáveis da URL
  const { a, b } = req.params;
  const resultado = calculadora.subtrair(parseFloat(a), parseFloat(b));
  res.send(resultado.toString());
});

// Definição de rota com express
app.get('/multiplicar/:a/:b', (req, res) => {
    // Recebendo variáveis da URL
    const { a, b } = req.params;
  const resultado = calculadora.multiplicar(parseFloat(a), parseFloat(b));
  res.send(resultado.toString());
});

// Definição de rota com express
app.get('/dividir/:a/:b', (req, res) => {
    // Recebendo variáveis da URL
  const { a, b } = req.params;
  const resultado = calculadora.dividir(parseFloat(a), parseFloat(b));
 // Verificando para não haver divisão por 0
  if (isNaN(resultado) || !isFinite(resultado)) {
    res.status(400).send('Divisão por zero ou valor inválido.');
  } else {
    res.send(resultado.toString());
  }
});

// Mostrando a porta em que o servidor está rodando
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});