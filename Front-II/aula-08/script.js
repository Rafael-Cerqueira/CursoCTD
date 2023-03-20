window.addEventListener('load', () => console.log('carregou'))

const buttonRef = document.querySelector('#loginButton')
const titleRef = document.querySelector('#formTitulo')
const urlRef = document.querySelector('#formUrl')


var userData = {
    title: '',
    url: ''
}

function validarUrl(url){

    userData.url = url
}

function validarTitle(titulo){

    if(titulo.length < 10){
        buttonRef.disabled = true
    }else{
        userData.title = titulo
        buttonRef.disabled = false

    }
    
    
}

function login(event){

    event.preventDefault()
    console.log(userData)

}

titleRef.addEventListener('keyup', (event) => validarTitle(event.target.value))
urlRef.addEventListener('keyup', (event) => validarUrl(event.target.value))
buttonRef.addEventListener('click', (event) => login(event))