let harryPotter = ["Harry", "Ron", "Hermione", "Luna"]

export function imprimirInverso(array){

    let array2 = [];

    array2[3] = array[0]
    array2[2] = array[1]
    array2[1] = array[2]
    array2[0] = array[3]

    console.table(array2)
}

// imprimirInverso(harryPotter)
// imprimirInverso(harryPotter)

////////////////////////////////////////////////////////////////



let numbers = [96, 89, 35, 47];

export function somarArray(array){
    console.log(array[0] + array[1] + array[2] + array[3]);
}

// somarArray(numbers)

///////////////////////////////////////////////////////////////


let string = ["T", "C", "H", "A", "U"];

export function join(array){
    console.log(array[0] + array[1] + array[2] + array[3] + array[4]);
}

// join(string)

//////////////////////////////////////////////////////////////

let filmeESeries = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

export function arrayMaiuscula(array){
    let novoArray = []

    novoArray = array;

    console.log(novoArray[0].toUpperCase())
    console.log(novoArray[1].toUpperCase())
    console.log(novoArray[2].toUpperCase())
    console.log(novoArray[3].toUpperCase())
    console.log(novoArray[4].toUpperCase())

}

// arrayMaiuscula(filmeESeries)

///////////////////////////////////////////////////////////

let animacoes = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

export function unirArrays(array1, array2){


    array1.push(array2[0])
    array1.push(array2[1])
    array1.push(array2[2])
    array1.push(array2[3])
    array1.push(array2[4])
    
    let itemExcluido = array1.pop()

    console.log(itemExcluido)


    console.table(array1);

}

// unirArrays(filmeESeries, animacoes)

/////////////////////////////////////////////////////////////

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

export function comparar(array1, array2){
    if(array1[0] == array2[0]){
        console.log("Numeros iguais")
    }else{
        console.log("Numeros diferentes")
    }
    if(array1[1] == array2[1]){
        console.log("Numeros iguais")
    }else{
        console.log("Numeros diferentes")
    }
    if(array1[2] == array2[2]){
        console.log("Numeros iguais")
    }else{
        console.log("Numeros diferentes")
    }
    if(array1[3] == array2[3]){
        console.log("Numeros iguais")
    }else{
        console.log("Numeros diferentes")
    }
    if(array1[4] == array2[4]){
        console.log("Numeros iguais")
    }else{
        console.log("Numeros diferentes")
    }
    if(array1[5] == array2[5]){
        console.log("Numeros iguais")
    }else{
        console.log("Numeros diferentes")
    }
    if(array1[6] == array2[6]){
        console.log("Numeros iguais")
    }else{
        console.log("Numeros diferentes")
    }
    if(array1[7] == array2[7]){
        console.log("Numeros iguais")
    }else{
        console.log("Numeros diferentes")
    }
    if(array1[8] == array2[8]){
        console.log("Numeros iguais")
    }else{
        console.log("Numeros diferentes")
    }
}

comparar(asiaScores, euroScores)