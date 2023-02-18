import { encontrarGanhador, digitalHouse, sumArray, join } from './ex1.js'

// É necessário determinar o vencedor de um concurso de Stand-Up composto por 3 apresentações por participante.
// O público, no máximo 100 pessoas, votou quem eles acham que era melhor no final de cada etapa. Por exemplo, Alice sobe, se apresenta e desce; Bob sobe, aparece e desce.
// Após a apresentação, o público vota indicando quem eles acham que ganhou aquela rodada. Após isto, continua a próxima rodada assim como a primeira. E finalmente a terceira.

// A matriz de Alice é: alice = [ 23, 82, 46 ]
// A matriz de Bob é: bob = [ 45, 8, 32]

let alice = [23, 67, 32];;
let bob = [12, 67, 43];

encontrarGanhador(alice, bob)

// Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve
// imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
// ● Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
// você deve exibir a string &quot;Digital&quot; em vez do número.
// ● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,
// você deve exibir a string &quot;House&quot; em vez disso.
// ● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você
// deve exibir a string &quot;Digital House&quot; em vez do número.

digitalHouse(28, 30)

// Vamos pegar o exercício sumArray() que fizemos na classe arrays, mas desta vez
// vamos modificá-lo para que ele possa receber um array de números de qualquer
// quantidade de elementos.
// Se você não se lembrar da instrução original:
// Você deve criar uma função somaArray que aceita uma matriz de números e retorna a
// soma de todos eles.

let nums = [96, 89, 35, 47, 81, 23]
sumArray(nums)

// você deve modificar a função join() para que ela possa receber uma matriz de strings
// de qualquer quantidade de elementos.
// Importante: Você não pode usar o método original Array.join().

let string = ["T", "C","H", "A", "U"]
let frase = ["o", "l", "a"]

join(frase)