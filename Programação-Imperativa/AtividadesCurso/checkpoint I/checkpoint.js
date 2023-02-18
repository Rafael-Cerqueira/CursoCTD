export function microondas (produto, tempo){
    
    let produtos = produto;
 
    if(produto == null && tempo == null){
        console.log("Escolha um dos produtos no menu: Pipoca, Macarrão, Carne, Feijão, Brigadeiro");

    }else{

        switch(produtos){
            case 'pipoca':
                if(tempo >= 10 && tempo < 20){
                    console.log("Prato pronto, bom apetite!");
                }else if(tempo < 10){
                    console.log("Tempo insuficiente!");
                }else if(tempo >= 20 && tempo < 30){
                    console.log("Comida queimou!");
                }else if(tempo >= 30){
                    console.log("Kabummm!");
                }
                break;
            case 'Macarrão':
                if(tempo >= 8 && tempo < 16){
                    console.log("Prato pronto, bom apetite!");
                }else if(tempo < 8){
                    console.log("Tempo insuficiente!");
                }else if(tempo >= 16 && tempo < 24){
                    console.log("Comida queimou!");
                }else if(tempo >= 24){
                    console.log("Kabummm!");
                } 
                break;
            case 'Carne':
                if(tempo >= 15 && tempo < 30){
                    console.log("Prato pronto, bom apetite!");
                }else if(tempo < 15){
                    console.log("Tempo insuficiente!");
                }else if(tempo >= 30 && tempo < 45){
                    console.log("Comida queimou!");
                }else if(tempo >= 45){
                    console.log("Kabummm!");
                } 
                break;
            case 'Feijão':
                if(tempo >= 12 && tempo < 24){
                    console.log("Prato pronto, bom apetite!");
                }else if(tempo < 12){
                    console.log("Tempo insuficiente!");
                }else if(tempo >= 24 && tempo < 36){
                    console.log("Comida queimou!");
                }else if(tempo >= 36){
                    console.log("Kabummm!");
                } 
                break;
            case 'Brigadeiro':
                if(tempo >= 8 && tempo < 16){
                    console.log("Prato pronto, bom apetite!");
                }else if(tempo < 8){
                    console.log("Tempo insuficiente!");
                }else if(tempo >= 16 && tempo < 24){
                    console.log("Comida queimou!");
                }else if(tempo >= 24){
                    console.log("Kabummm!");
                } 
                break;
            default:
                console.log("Prato inexistente");
                break;
            }
    }
    
}

