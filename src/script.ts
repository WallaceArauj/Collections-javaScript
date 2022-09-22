import PromptSync = require ('prompt-sync')
const prompt = PromptSync();

/*Crie uma um programa de saúde, 
nesse programa desenvolva uma Arrow functions que calcula o imc de 
pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.*/


const peso = Number(prompt('Digite seu peso: '));
const altura = Number(prompt('Digite sua altura: '))

let imc = (peso: number , altura: number) => {
    return peso / Math.pow(altura,2);

    
}
const resultado = imc (peso, altura);




console.log (` O seu IMC é: ${resultado}`)

