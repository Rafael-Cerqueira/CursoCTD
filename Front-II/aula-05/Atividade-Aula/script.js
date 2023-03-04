function manipularMenu(){

    let menu = document.querySelector('#mainMenu')
    menu.classList.toggle('opened')
}

function abrirMenu(){

    let menu = document.querySelector('#mainMenu')
    menu.classList.add('opened')
}

function fecharMenu(){

    let menu = document.querySelector('#mainMenu')
    menu.classList.remove('opened')
}
