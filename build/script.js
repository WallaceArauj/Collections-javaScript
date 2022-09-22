"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
/*Crie uma um programa de saúde,
nesse programa desenvolva uma Arrow functions que calcula o imc de
pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.*/
var peso = Number(prompt('Digite seu peso: '));
var altura = Number(prompt('Digite sua altura: '));
var imc = function (peso, altura) {
    return peso / Math.pow(altura, 2);
};
var resultado = imc(peso, altura);
console.log(" O seu IMC \u00E9: ".concat(resultado));
