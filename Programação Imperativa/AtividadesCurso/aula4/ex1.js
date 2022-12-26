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

export function quadradoDoNumero(n1){
    return multiplicar(n1, n1)
}

export function mediaDeTresNumeros(n1, n2, n3){
    let soma = somar(n1, n2, n3);
    let totalNumeros = mediaDeTresNumeros.length;
    let media = dividir(soma,totalNumeros);
    
    return media;
}

export function calculaPorcentagem(valor, porcentagem){
    const porcent = multiplicar(valor, porcentagem)/100;
    return `${porcentagem}% de ${valor} é igual a: ${porcent}`;
}

export function geradorDePorcentagem(n1, n2){
    const porcentagemGerada = dividir(n1, n2) * 100;
    return `${n1} é ${porcentagemGerada.toFixed(1)}% de ${n2}`;
}
