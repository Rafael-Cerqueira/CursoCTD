 export function arraysFunctions(funcao){
    if(funcao == null){
        console.log("Digite uma dessas funçês no parâmetro: Join, Pop, Push, Shift e Unshift")
    }else{
        let produtos = ['Maçã', 'Margarina', 'Açucar', 'Café', 'Pão'];

        console.log("Array Padrão: ", produtos)

        switch(funcao){
            case 'join':
                console.log("Irá unir todos os itens do array e separa-los com um - :", produtos.join("-"));
                break;
            case 'pop':
                console.log("Eliminará o últi;mo item do array: ", produtos.pop(), "-", produtos)
                break;
            case 'push':
                console.log("Adicionará um novo item no final do array: ", produtos.push("Pão"), "-", produtos);
                break;
            case 'shift':
                console.log("Eliminará o primeiro item da lista de array: ", produtos.shift(), "-", produtos);
                break;
            case 'unshift':
                console.log("Adicionará um ou mais itens no início do array: ", produtos.unshift("Maçã", "Agua"), "-", produtos);
                break;
            default:
                console.log("Função inexistente :(")
                break;
        }

    }
 }
