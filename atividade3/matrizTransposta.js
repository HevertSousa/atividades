// **Instruções**
// No seu repositório de atividades, crie uma pasta atividade3;
// Dentro dessa pasta, crie o arquivo matrizTransposta.js
// Implemente a função transporMatriz(A);
// A função deve receber uma matriz (array de arrays) A e imprimir a matriz original e a versão transposta;
// Como solução envie o link da pasta atividade 3 do seu repositório. 

// Hevert Sousa
// Mat: UC19106625 
// Discp: Devenvolvimento WEB 
// Engenharia de Software


// Função para transposição de matriz
function transporMatriz(matriz){
    transposta = Array(matriz[0].length).fill().map(() => [])

    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz.length; j++){
             transposta[i][j] = matriz[j][i]
            //Acompanhando a criação da transposição da matriz;
             console.log(transposta)
        }
    }
    return transposta
}

const matriz = [
                [1, 2, 3],
                [4, 5, 6],
                [9, 8, 7]
            ];

var matrizTransposta = transporMatriz(matriz)
console.log('\n\n')
console.log(matriz)
console.log(matrizTransposta);