import { arraysFunctions } from './ex1.js';
import { imprimirInverso, somarArray, join, arrayMaiuscula, unirArrays, comparar } from './ex2.js';

// Crie um array que contenha nomes de produtos para compra. 

// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

// Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

// console.log(“O método Join realiza tal coisa”)
// console.log(RESULTADO_DO_JOIN)

arraysFunctions("push")

// Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.
// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

let harryPotter = ["Harry", "Ron", "Hermione", "Luna"]
imprimirInverso(harryPotter)

// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
// Exemplo:
// somarArray([1,2,3])                // 6
// somarArray([10, 3, 10, 4])     // 27
// somarArray([-5,100])             // 95

let numbers = [96, 89, 35, 47];
somarArray(numbers)

// Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
// Importante: Não poderá utilizar o método Array.join() original.
// Por exemplo:
// join(["o","l","á"]) deve retornar a string "olá".
// join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".

let string = ["T", "C", "H", "A", "U"];
join(string)

// O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
// Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
// 	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
// Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada.

// Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
// Dica: revise o que faz o método de strings .toUpperCase().

let filmeESeries = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

arrayMaiuscula(filmeESeries)

// Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
// 	"Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"
// Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

// Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
// PS: por precaução, salve o elemento que você vai deletar em uma variável.

let animacoes = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

unirArrays(filmeESeries, animacoes)

// Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
// 	//const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// 	//const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
// Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções, a fim de verificar seu correto funcionamento.
// Se chegarmos a este ponto e tudo estiver bem, o tech leader da equipe deve estar extremamente feliz com nosso trabalho e desempenho.
// Bom trabalho!

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

comparar(asiaScores, euroScores)