import {convCentimetros, convURL, stringEx, ageDog, horaTrabalho, calculadoraIMC, stringMaiuscula, tipoDado, valorCircunferencia} from './ex1.js'

// Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

let polegadaEmCentimentros = convCentimetros(57);
console.log(polegadaEmCentimentros)

// Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

let conversorURL = convURL("funcaojs");
console.log(conversorURL)

// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

let stringExclamacao = stringEx("Ola Mundo");
console.log(stringExclamacao)

// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

let idadeCachorro = ageDog(3);
console.log(idadeCachorro)

// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

let valorPorHora = horaTrabalho(6500);
console.log(valorPorHora)

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.

let calcularIMC = calculadoraIMC(1.80, 80);
console.log(calcularIMC)

// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne.

let tudoMaiusculo = stringMaiuscula("ola mundo");
console.log(tudoMaiusculo)

// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.

let tipoDeDados = tipoDado(true);
console.log(tipoDeDados)

// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.

let calcularCircunferencia = valorCircunferencia(5.5);
console.log(calcularCircunferencia)
