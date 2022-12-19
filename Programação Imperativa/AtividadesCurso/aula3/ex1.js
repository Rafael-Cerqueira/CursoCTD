// Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

export function convCentimetros(n1){
    const polegada = 2.54;
    return n1 * polegada;
}

// console.log(convCentimetros(57))

// Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

export function convURL(string){
    return `www.${string}.com.br`
}

// console.log(convURL("funcaojs"))

// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

export function stringEx(frase){
    return `${frase}!`
}

// console.log(stringEx("Ola Mundo"))

// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

export function ageDog(idade){
    return idade * 7;
}

// console.log(ageDog(3))

// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

export function horaTrabalho(salario){
    let valorPorHora = salario/160
    return valorPorHora;
}

// console.log(horaTrabalho(6500))

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.

export function calculadoraIMC(altura, peso){
    let imc = peso / (altura**2)
    return imc.toFixed(2)
}

// console.log(calculadoraIMC(1.80, 80))

// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 

export function stringMaiuscula(string){
    return string.toUpperCase();
}

console.log(stringMaiuscula("ola mundo"))

// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.

export function tipoDado(dado){
    return typeof dado;
}

// console.log(tipoDado(true))

// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.

export function valorCircunferencia(raio){
    return (2 * Math.PI * raio).toFixed(1)
}

// console.log(valorCircunferencia(5.5))