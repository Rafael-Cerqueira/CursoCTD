const authToken = localStorage.getItem('authToken')
const createTaskBUttonRef = document.querySelector('#createTaskButton')

const requestHeaders = {
    'Accept' : 'application/json',
    'Content-Type': 'application/json',
    'Authorization': authToken
}

function logout(){

    window.location.href = '/aula-17/login.html'
    localStorage.clear()
}

function createTask(){

    const taskData = {
        description: 'Teste tarefa 1',
        completed: false
    }

    var requestConfig = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(taskData)
    } 

    fetch('https://todo-api.ctd.academy/v1/tasks', requestConfig).then(
        response => {
            if(response.ok){
                response.json().then(
                    data => {
                        console.log(data)
                    }
                )
            }
        }
    )

}

function getTasks(){

    var requestConfig = {
        method: 'GET',
        headers: requestHeaders,
    }

    fetch('https://todo-api.ctd.academy/v1/tasks', requestConfig).then(
        response => {
            if(response.ok){
                response.json().then(
                    tasks => {
                        console.log(tasks)
                    }
                )
            }
        }
    )
}

function getUserData(){
    
    var requestConfig = {
        method: 'GET',
        headers: requestHeaders,
    }

    fetch('https://todo-api.ctd.academy/v1/getMe', requestConfig).then(
        response => {
            if(response.ok){
                //Colocar os dados do use no HTML
                getTasks()
            }else {
                // Verificar o que deu errado
                if(response.status === 401){

                    logout()

                }
            }
        }
    )

}

function checkAuthTokenExist(){

    if(authToken === null){
        window.location.href = '/aula-17/login.html'
    }else {
        getUserData()
    }
}

checkAuthTokenExist()

createTaskBUttonRef.addEventListener('click', () => createTask())