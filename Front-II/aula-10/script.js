window.addEventListener('load', () => console.log('carregou'))

const userEmailRef = document.querySelector('#userEmail')
const userPasswordRef = document.querySelector('#userPassword')
const buttonRef = document.querySelector('#loginButton')

var formErrors = {
    userEmail: true,
    userPassword: true,
}

function checkFormValidity(){

    const formErrorsArray = Object.values(formErrors)
    const formValidity = formErrorsArray.every(item => item === false)

    buttonRef.disabled = !formValidity
}

function validarField(inputRef){

    const inputValid = inputRef.checkValidity()
    const div =  inputRef.parentElement
    
    if(inputValid){

       div.classList.remove('error')

    }else{

        div.classList.add('error')

    }

    formErrors[inputRef.id] = !inputValid

    checkFormValidity()

}

function login(event){

    event.preventDefault()

    userData = {
        nome: userEmailRef.value,
        password: userPasswordRef.value,
    }
}

userEmailRef.addEventListener('keyup',() => validarField(userEmailRef))
userPasswordRef.addEventListener('keyup',() => validarField(userPasswordRef))
buttonRef.addEventListener('click', (event) => login(event))