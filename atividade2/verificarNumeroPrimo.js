// Atividade 2: Implemente uma função com a seguinte assinatura: verificarNumeroPrimo(n)
// A função deve verificar se o número "n" recebido é primo e retornar true, caso verdadeiro, ou false caso nã seja primo.
// No mesmo arquivo faça a chamada da função para os seguintes casos de teste: 
// verificarNumeroPrimo(0); //false
// verificarNumeroPrimo(1); //false
// verificarNumeroPrimo(2); //true
// verificarNumeroPrimo(3); //true
// verificarNumeroPrimo(7); //true
// verificarNumeroPrimo(83); //true
// verificarNumeroPrimo(100); //false
// verificarNumeroPrimo(991); //true
// verificarNumeroPrimo(104729); //true
// verificarNumeroPrimo(14348907); //false

// Hevert Sousa
// UC19106625
// Desenvolvimento Web


function verificarNumeroPrimo(n){
    if (n <= 1){
        return false;
    }

    for (let i = 2; i<= Math.sqrt(n); i++){
        if (n % i === 0){
            return false;
        }
    }
    return true;
}

function verificaPrimosNoVetor(vetor){
    const resultados = [];

    for (let i = 0; i < vetor.length; i++){
        resultados.push(verificarNumeroPrimo(vetor[i]));
    }

    return resultados;
}

const n = [0,1,2,3,7,83,100,991,104729,14348907];
const resultados = verificaPrimosNoVetor(n);

console.log('Resultados: ');

for(let i = 0; i < n.length; i++){
    console.log(`${n[i]} é primo? ${resultados[i]}`);
}
