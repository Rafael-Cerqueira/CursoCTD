import {convCentimetros, convURL, stringEx, ageDog, horaTrabalho, calculadoraIMC, stringMaiuscula, tipoDado, valorCircunferencia} from './ex1.js'

let polegadaEmCentimentros = convCentimetros(57);
console.log(polegadaEmCentimentros)

let conversorURL = convURL("funcaojs");
console.log(conversorURL)

let stringExclamacao = stringEx("Ola Mundo");
console.log(stringExclamacao)

let idadeCachorro = ageDog(3);
console.log(idadeCachorro)

let valorPorHora = horaTrabalho(6500);
console.log(valorPorHora)

let calcularIMC = calculadoraIMC(1.80, 80);
console.log(calcularIMC)

let tudoMaiusculo = stringMaiuscula("ola mundo");
console.log(tudoMaiusculo)

let tipoDeDados = tipoDado(true);
console.log(tipoDeDados)

let calcularCircunferencia = valorCircunferencia(5.5);
console.log(calcularCircunferencia)
