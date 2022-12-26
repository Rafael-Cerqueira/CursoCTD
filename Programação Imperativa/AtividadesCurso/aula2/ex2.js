export function mensagem() {
    const hello = "Olá Mundo!";
    return console.log(hello);
}

let nome = "Rafael";
let idade = 25;
let robo = false;

export function stringVariaveis(){
    let string = `nome do usuario: ${nome}, ele tem ${idade} anos, é um robô? ${robo}`;

    return console.log(string)
}

