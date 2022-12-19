function somar(n1, n2, n3){
    return n1 + n2 + n3;
}

function subtrair(n1, n2){
    return n1 - n2;
}

function multiplicar(n1, n2){
    return n1 * n2;
}

function dividir(n1, n2){
    return n1 / n2;
}

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.

export function quadradoDoNumero(n1){
    return multiplicar(n1, n1)
}

// console.log(quadradoDoNumero(5))

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

export function mediaDeTresNumeros(n1, n2, n3){
    let soma = somar(n1, n2, n3);
    let totalNumeros = mediaDeTresNumeros.length;
    let media = dividir(soma,totalNumeros);
    
    return media;
}

// console.log(mediaDeTresNumeros(26, 54, 10))

// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 

export function calculaPorcentagem(valor, porcentagem){
    const porcent = multiplicar(valor, porcentagem)/100;
    return `${porcentagem}% de ${valor} é igual a: ${porcent}`;
}

// console.log(calculaPorcentagem(500, 35))

// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
// Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

export function geradorDePorcentagem(n1, n2){
    const porcentagemGerada = dividir(n1, n2) * 100;
    return `${n1} é ${porcentagemGerada.toFixed(1)}% de ${n2}`;
}

// console.log(geradorDePorcentagem(2, 200))