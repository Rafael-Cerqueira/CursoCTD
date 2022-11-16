function menuMicroondas(comida, tempo) {
    // array de objetos contendo o nosso menu
    const MENU = [
        { "id": 1, "item": "pipoca", "tempo": 10 },
        { "id": 2, "item": "macarrão", "tempo": 8 },
        { "id": 3, "item": "carne", "tempo": 15 },
        { "id": 4, "item": "feijão", "tempo": 12 },
        { "id": 5, "item": "brigadeiro", "tempo": 8 },
    ];
    // variavel que ira checkar se a comida passada pelo usuario sera encontrada no menu
    let checkMenu = MENU.find(e => e.id == comida || e.item == comida.toLowerCase());
    // mensagens padrão para entregar ao usuario
    const MSG = ["Prato inexistente", "Tempo insuficiente", "A comida queimou", "Kabumm", "Prato pronto, bom apetite!!!"];
    // condições a ser checkadas 
    if (checkMenu == undefined) {
        return `${MSG[0]}`
    } else if (checkMenu != undefined && tempo == null){
        return `Defina o tempo de preparo`
    } else {
        if (tempo < checkMenu.tempo) {
            return `${MSG[1]}. ${MSG[4]}`;
        } else if (tempo > 2 * checkMenu.tempo) {
            return `${MSG[2]} ${MSG[4]}`
        } else if (tempo > 3 * checkMenu.tempo) {
            return `${MSG[3]} ${MSG[4]}`;
        } else {
            return `${MSG[4]}`
        }
    } 
}
console.log(menuMicroondas('2', 17));