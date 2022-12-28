let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"];

export function converterMaiuscula(array){
    let cont = 0
    while(cont < array.length){
        let arrayM = array[cont].toUpperCase()
        console.log(arrayM)
        cont++
    }

}

// converterMaiuscula(filmes)

///////////////////////////////////

let animacoes = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

export function passagemDeElemento(array1, array2){
    let arrayUnico = [];
    for(let i = 0; i < array1.length; i++){
        arrayUnico.push(array1[i].toUpperCase()) 
    }

    for(let j = 0; j < array2.length; j++){
        arrayUnico.push(array2[j].toUpperCase())
    }
    
    console.log(arrayUnico)
}

// passagemDeElemento(filmes, animacoes)

/////////////////////////////////

export function passagemDeElementoPop(array1, array2){
    let arrayUnico = [];
    for(let i = 0; i < array1.length; i++){
        arrayUnico.push(array1[i].toUpperCase()) 
    }

    array2.pop()

    for(let j = 0; j < array2.length; j++){
        arrayUnico.push(array2[j].toUpperCase())
    }
    
    console.log(arrayUnico)
}

// passagemDeElementoPop(filmes, animacoes)

////////////////////////////////////

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

export function compararClassificacoes(asia, europa){
    let tamanhoArray;
    if(asia.length > europa.length){
        tamanhoArray = asia.length
    }else{
        tamanhoArray = europa.length
    }
    i = 0;
    while(i < tamanhoArray){
        if(asia[i] == europa[i]){
            console.log("Numeros Iguais!")
        }else{
            console.log("Numeros Diferentes!")
        }
        i ++
    }
}

// compararClassificacoes(asiaScores, euroScores)

/////////////////////////////////////////////

let Luiz = [5, 8, 4, 9, 5];
let Amanda = [8, 7, 8, 6, 8];
let Jessica =  [7, 5, 10, 8, 3];

export function pontuacaoMedia(participante){
    let tamanho = participante.length;
    let soma = 0;

    for(let i = 0; i < tamanho; i++){
        soma += participante[i] ;
    }

    let media = soma/tamanho
    return media
}

export function pontuacaoMaior(participante){

    let i = 0;
    let maior = 0;

    while(i < participante.length){

        if(participante[i] > maior){
            maior = participante[i];
        }

        i++;
    }
    return maior
}

export function competicao(p1, p2, p3){
    
    let participante1 = p1;
    let participante2 = p2;
    let participante3 = p3;

    if(pontuacaoMaior(participante1) > pontuacaoMaior(participante2) && pontuacaoMaior(participante1) > pontuacaoMaior(participante3)){
        console.log("A maior nota é", pontuacaoMaior(participante1))
    }else if(pontuacaoMaior(participante2) > pontuacaoMaior(participante1) && pontuacaoMaior(participante2) > pontuacaoMaior(participante3)){
        console.log("A maior nota é", pontuacaoMaior(participante2))
    }else{
        console.log("A maior nota é", pontuacaoMaior(participante3))
    }

    if(pontuacaoMedia(participante1) > pontuacaoMedia(participante2) && pontuacaoMedia(participante1) > pontuacaoMedia(participante3)){
        console.log("A maior media é: ", pontuacaoMedia(participante1))
    }else if(pontuacaoMedia(participante2) > pontuacaoMedia(participante1) && pontuacaoMedia(participante2) > pontuacaoMedia(participante3)){
        console.log("A maior media é: ", pontuacaoMedia(participante2))
    }else{
        console.log("A maior media é: ", pontuacaoMedia(participante3))
    }

}

// competicao(Luiz, Amanda, Jessica)
