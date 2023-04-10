/* Teste Login com To Do */

var loginButtonRef = document.querySelector('#login')

function authUser(event){

    event.preventDefault()

    const userLoginData = {
        email: 'email@email.com',
        password: '1234'
    }

    const requestHeaders = {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }
    
    var requestConfig = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(userLoginData)
    }

    fetch('https://todo-api.ctd.academy/v1/users', requestConfig).then(
        response => {
            if(response.ok) {
                response.json().then(
                    token => {
                        localStorage.setItem('authToken', token.jwt)
                        window.location.href = '/aula-17/tasks.html'
                    }
                )
            }else{
                
            }
        }
    )
}

loginButtonRef.addEventListener('click', () => authUser())
