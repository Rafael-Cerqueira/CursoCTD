export function podeSubir(altura, acompanhada){

    let alturaPessoa = altura;
    let acompanhadaPessoa = acompanhada;
    let retorno = false;

    if(alturaPessoa > 1.40 && alturaPessoa < 2.00){
        console.log("Acesso Autorizado")
    }else if(alturaPessoa < 1.40 && alturaPessoa >= 1.20 && acompanhadaPessoa === acompanhada){
        retorno = true;
        if(acompanhadaPessoa == "sim"){
            console.log("Acesso autorizado");
        }else if (acompanhadaPessoa == "não") {
            console.log("Acesso autorizado apenas com acompanhante")
        }
    }else if(alturaPessoa < 1.20 && acompanhadaPessoa != null || acompanhadaPessoa == null){
        console.log("Acesso negado");
    }else{
        console.log("Acesso negado");
    }
}







