const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/somar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.somar(parseFloat(a), parseFloat(b));
  res.send(resultado.toString());
});

app.get('/subtrair/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.subtrair(parseFloat(a), parseFloat(b));
  res.send(resultado.toString());
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.multiplicar(parseFloat(a), parseFloat(b));
  res.send(resultado.toString());
});

app.get('/dividir/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.dividir(parseFloat(a), parseFloat(b));
  if (isNaN(resultado) || !isFinite(resultado)) {
    res.status(400).send('Divisão por zero ou valor inválido.');
  } else {
    res.send(resultado.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});