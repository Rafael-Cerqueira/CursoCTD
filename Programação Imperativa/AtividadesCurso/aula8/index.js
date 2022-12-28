import { converterMaiuscula, passagemDeElemento, passagemDeElementoPop, compararClassificacoes, pontuacaoMedia, pontuacaoMaior, competicao} from './ex1.js'

// Nos pediram para passar todos os elementos para letras maiúsculas, o que na época tínhamos feito de forma &quot;manual&quot;. Vamos movê-lo para uma maneira mais automática usando loops.

let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"];

converterMaiuscula(filmes)

// Agora precisamos modificar a função passagemDeElemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original.

let animacoes = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

passagemDeElemento(filmes, animacoes)

// A partir deste ponto, se você decidiu trabalhar em um arquivo diferente ao invés d e modificar o anterior, lembre-se que tivemos um infiltrado dentro de nossos filmes de animação, o qual tivemos que tirar e salvar em outra variável antes de fazer a passagem de elementos de um array para outro!

passagemDeElementoPop(filmes, animacoes)

// Finalmente, devemos modificar nossa função comparadora para os filmes
// como temos feito até agora.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

compararClassificacoes(asiaScores, euroScores)

// Um cliente nos pede para fazer um aplicativo que possa determinar os vencedores de um concurso que foi realizado no fim de semana.

// Para isso, precisaremos seguir as seguintes instruções e informações para poder desenvolver nosso aplicativo.

// Cada participante tem 5 notas, dos quais suas pontuações individuais serão formadas, os participantes com suas respectivas pontuações são:

// ● Participante A: 5, 8, 4, 9, 5;
// ● Participante B: 8, 7, 8, 6, 8;
// ● Participante C: 7, 5, 10, 8, 3.

// O concurso consiste em 2 modalidades de seleção para um vencedor:

// ● Melhor média (a maior pontuação média entre os concorrentes);
// ● Maior e-tip(a maior pontuação entre as 5 notas de cada participante).

// Com essas informações, nosso líder de Tecnologia nos pergunta o seguinte:

// 1. Determine qual seria a maneira ideal de representar cada participante com suas pontuações.

// 2. Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.

// 3. Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem.

// 4. Logo nosso líder tecnológico nos pede para criar essas duas funções, geramos uma nova funcionalidade chamada competição que receberá os 3 participantes por parâmetros, executará as duas funções criadas anteriormente para calcular as médias e pontuações mais altas de cada uma e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.

competicao(Luiz, Amanda, Jessica)