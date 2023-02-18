let alice = [23, 67, 32];;
let bob = [12, 67, 43];

export function encontrarGanhador(a, b){
    let p1 = 0;
    let p2 = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            p1 += 1;
        }else if(a[i] < b[i]){
            p2 += 1;
        }
    }
    console.log("O participante 1 tem:", p1, "pontos. E o participante 2 tem:", p2, "pontos.")
}

// encontrarGanhador(alice, bob)

////////////////////////////////////////////

export function digitalHouse(n1, n2){

    let arrayUmCem = [];

    for(let i = 1; i <= 100; i++){
        arrayUmCem.push(i)
    }
    for(let j = 0; j < 100; j++){
        if(arrayUmCem[j] % n1 === 0){
            arrayUmCem[j] = "Digital"
        }else if(arrayUmCem[j] % n2 === 0){
            arrayUmCem[j] = "House"
        }else if(arrayUmCem[j] % n1 === 0 && arrayUmCem[j] % n2 === 0){
            arrayUmCem[j] = "Digital House"
        }
    }
    console.log(arrayUmCem)
}

// digitalHouse(28, 30)

///////////////////////////////////

let nums = [96, 89, 35, 47, 81, 23]

export function sumArray(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    console.log(soma)
}

// sumArray(nums)

/////////////////////////////////

let string = ["T", "C","H", "A", "U"]
let frase = ["o", "l", "a"]

export function join(array){
    let juntarString = ""
    for(let i = 0; i < array.length; i++){
        juntarString += array[i] 
    }
    console.log(juntarString)
}

join(frase)