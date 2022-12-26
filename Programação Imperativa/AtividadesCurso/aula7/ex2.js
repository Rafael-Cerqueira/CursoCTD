
function impares(n){
    let cont = 1;
    while(cont <= n){
        if(cont % 2 != 0){
            console.log(cont)
        }
    cont++;
    }
}

// impares(100)

//////////////////////////////

function numerosPares(n){
    let cont = 1;
    while(cont <= n){
        if(cont % 2 == 0){
            console.log(cont)
        }
    cont ++;
    }
}

// numerosPares(100)

////////////////////////////

function paresEImpares(n){
    let cont = 1;
    let nPares = []
    let nImpares = []
    while(cont <= n){

        if(cont % 2 == 0){
            nPares.push(cont)
        }else if(cont % 2 != 0){
            nImpares.push(cont)
        }
    cont ++;
    }
    console.log("Numeros Pares: ", nPares)
    console.log("Numeros Impares: ", nImpares)
}

// paresEImpares(100)

////////////////////////////

const  prompt  =  require('prompt-sync')({sigint: true}) ;

function mediaAritimetica(){
    
    let numeroAlunos = prompt("Quantos Alunos a turma possui? ")

    let cont = 1;
    let soma = 0;
    let nota = 0;
    let notas = [];
    let intNotas = []

    while(cont <= numeroAlunos){
        nota = prompt("Digite a nota: ")
        notas.push(nota)
        cont++
    }

    for(let i = 0; i < notas.length; i++) {
        intNotas.push(parseInt(notas[i]))
    }

    for(let j = 0; j < intNotas.length; j++){
        soma += intNotas[j]
    }

    let media = soma/intNotas.length;

    console.log("A media da turma é: ", media);
}

mediaAritimetica()

