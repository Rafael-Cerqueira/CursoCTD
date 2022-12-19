// 1) Em um novo arquivo chamado ex3.js, exiba na tela a soma de dois números.
// 3) Declare e atribua 2 variáveis ​​numéricas independentes. Exiba a soma de ambas na tela.
// 4) Atribua a soma das duas variáveis ​​anteriores a uma outra variável e exiba-a na tela.

var num1 = 32;
var num2 = 45;

 function somar(n1, n2){
    return n1 + n2;

}

somar(num1, num2);

// 2) Repita o processo anterior, mas utilizando outro operador.

 function subtrair(n1, n2){
    return  n1 - n2;
}

 function multiplicar(n1, n2){
    return n1 * n2;
}

 function divisao(n1, n2){
    return  n1/n2;
}

 function potencia(n1, n2){
    return  n1**n2;
}

// 5) Re-atribua à variável anterior "1" +1, e exiba na tela. (O que  aconteceu?)

num1 = "1" + 1;
console.log(num1); // => 11

// 6) Re-atribua "olá" + 23, e exiba na tela. (O que aconteceu?)

num2 = "olá" + 23;
console.log(num2); // => olá23

// 7) Crie mensagens concatenadas com valores diferentes.

let num = "Ola mundo" + 123456
console.log(num);

/////////////////////////////////////////////////////////



 export function calculadora(n1, n2){

    let calc1 = somar(n1, n2);
    let calc2 = subtrair(n1, n2);
    let calc3 = multiplicar(n1, n2);
    let calc4 = divisao(n1, n2);

    console.log("Calculadora...")

    console.log('A soma dos dois numeros é: ', calc1);
    console.log('A subtração dos dois numeros é: ', calc2);
    console.log('A multiplicação dos dois numeros é: ', calc3);
    console.log('A divisao dos dois numeros é: ', calc4);
    
}

calculadora(25, 5);



