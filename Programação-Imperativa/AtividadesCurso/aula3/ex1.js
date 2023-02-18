

export function convCentimetros(n1){
    const polegada = 2.54;
    return n1 * polegada;
}

export function convURL(string){
    return `www.${string}.com.br`
}


export function stringEx(frase){
    return `${frase}!`
}

export function ageDog(idade){
    return idade * 7;
}

export function horaTrabalho(salario){
    let valorPorHora = salario/160
    return valorPorHora;
}

export function calculadoraIMC(altura, peso){
    let imc = peso / (altura**2)
    return imc.toFixed(2)
}

export function stringMaiuscula(string){
    return string.toUpperCase();
}

export function tipoDado(dado){
    return typeof dado;
}

export function valorCircunferencia(raio){
    return (2 * Math.PI * raio).toFixed(1)
}
