// Crie uma variável chamada linguagem, que terá uma string atribuída a ela. Em seguida, construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript", ela deve imprimir no console, o texto: "Estou aprendendo". Contudo, caso a variável esteja armazenando qualquer outra linguagem, imprima "Aprenderei mais tarde".


export function learn(lang){

    let linguagem = "javascript";

    if(linguagem == lang){
        console.log("Estou aprendendo.");
    }else{
        console.log("Aprenderei mais tarde");
    }
}

learn("cobol")
learn("javascript")

export function logico(){
    
    let status = false;

    if(status == true){
        console.log("Verdadeiro")
    }else{
        console.log("O valor é falso")
    }
}

