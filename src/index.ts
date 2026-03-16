//LISTA O1!

/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */

import { promises } from "timers";

//Início do seu código

function criaNovoVetor(v: number[], v1: number, v2: number) {
    const novoVetor = v.concat(v1, v2)
    return novoVetor
}
console.log(criaNovoVetor([1, 2, 3], 0, 0))

//Fim do seu código

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código

function divisivelPor11(minimo: number, maximo: number) {


    const vazio = [];

    for (let i = minimo; i <= maximo; i++) {
        const element = i;
        if (i % 11 == 0) {
            vazio.push(i)
        }
    }
    return vazio

}

console.log(divisivelPor11(1, 110))

//Fim do seu código

/**
 *  Exercício 03 - maioresDeIdade
 * Nome da função - maioresDeIdade
 * Crie uma função que retorna um array com os objetos com idade maior que 18
 * @param {vetor:Pessoa[]} vetor Vetor de objetos com id, nome e idade
 * @returns {Pessoa[]} Retorna um array com os objetos com idade maior que 18
 * @example
 * 
 * const pessoa1 = {id: 1, nome: 'João', idade: 20}
 * const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
 * const pessoa3 = {id: 3, nome: 'José', idade: 17}
 * maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]
 */
interface Pessoa {
    id: number,
    nome: string,
    idade: number
}

//Início do seu código

function maioresDeIdade(vetor: Pessoa[]) {

    const vazio = [];

    for (let i = 0; i < vetor.length; i++) {
        const element = vetor[i]!;
        if (element.idade >= 18) {
            vazio.push(element)
        }
    }


    return vazio
}

const pessoa1 = { id: 1, nome: 'João', idade: 20 }
const pessoa2 = { id: 2, nome: 'Maria', idade: 18 }
const pessoa3 = { id: 3, nome: 'José', idade: 17 }
maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]

console.log(maioresDeIdade([pessoa1, pessoa2, pessoa3]))

//Fim do seu código

/**
 * Exercício 04 - resolve equação
 * Nome da função - resolveEquacao
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^2 + 2x + 6
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 * resolveEquacao([1, 2, 3]) // [9, 14, 21]
 */

//Início do seu código

function resolveEquacao(vetor: number[]) {
    const y = vetor.map((x) => x ^ 2 + 2 * x + 6)


    return y
}


console.log(resolveEquacao([1, 2, 3]))

//Fim do seu código

//LISTA 02!

/**
 * Exercício 01 - Calcular o quadrado de um número
 * Nome da função - calcularQuadrado
 * Crie uma função que receba um número e retorne o seu valor elevado ao quadrado.
 * @param {number} a Número a ser calculado
 * @returns {number} Retorna o quadrado do número
 * @example
 * calcularQuadrado(2) // 4
 * calcularQuadrado(-3) // 9
 */

//Início do seu código

function calcularQuadrado(a: number) {
    return a * a
}
console.log(calcularQuadrado(4))

//Fim do seu código

/**
 * Exercício 02 - Verificar se um número é positivo
 * Nome da função - ehPositivo
 * Crie uma função que retorne verdadeiro se o número for maior que zero e falso caso contrário.
 * @param {number} a Número a ser verificado
 * @returns {boolean} Retorna true para positivos e false para negativos ou zero
 * @example
 * ehPositivo(2) // true
 * ehPositivo(-3) // false
 */

//Início do seu código

function ehPositivo(a: number): boolean {
    return a > 0;
}
console.log(ehPositivo(2));  // true
console.log(ehPositivo(-3)); // false
console.log(ehPositivo(0));  // false

//Fim do seu código