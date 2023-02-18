import {quadradoDoNumero, mediaDeTresNumeros, calculaPorcentagem, geradorDePorcentagem} from './ex1.js'

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.

let quadradoNumero = quadradoDoNumero(5)
console.log(quadradoNumero)

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

let media = mediaDeTresNumeros(26, 54, 10)
console.log(media)

// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 

let valorPorcentagem = calculaPorcentagem(500, 35)
console.log(valorPorcentagem)

// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
// Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

let quantoPorcento = geradorDePorcentagem(20, 400)
console.log(quantoPorcento)