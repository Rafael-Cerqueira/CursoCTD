// Abrir vscode
// Crie a pasta “aula2”
// Crie o arquivo  “ex1.js”
// Escreva no arquivo: console.log(“Olá Mundo!”);
// Salve o arquivo;
// Abra o terminal embutido no VSCode;
// Execute o seu código, por meio do comando: node ex1.js
// Confira os resultados na interface do usuário.

export function mensagem() {
    const hello = "Olá Mundo!";
    return console.log(hello);
}


// (avançado)
// Tente abrir o Terminal externo e execute o código criado nos exercícios anteriores (Você precisará navegar até a pasta aula2 usando o comando cd)


// \desktop\CTD\Programação Imperativa\AtividadesCurso\aula2> node ex2.js


// Declare, atribua e exiba 3 variáveis ​​por console: uma string, uma numérica e uma booleana. O código abaixo é apenas um exemplo. Desta forma, você pode criar as variáveis baseadas em outras situações:

let nome = "Rafael";
let idade = 25;
let robo = false;

// Como seria mostrar um texto que informa na tela o que é cada coisa? Observe o exemplo abaixo, mas crie o seu próprio:


export function stringVariaveis(){
    let string = `nome do usuario: ${nome}, ele tem ${idade} anos, é um robô? ${robo}`;

    return console.log(string)
}

