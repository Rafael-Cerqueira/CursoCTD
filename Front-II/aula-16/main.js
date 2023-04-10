const cepInputRef = document.querySelector('#cep')
const cityInputRef = document.querySelector('#cidade')
const bairroInputRef = document.querySelector('#bairro')

function FillFormWithAddress(address){

    cityInputRef.value = address.localidade
    bairroInputRef.value = address.bairro

}

function searchAddress(){

    const cep = cepInputRef.value

    if(cepInputRef.value.length === 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
            response => {
                response.json().then(
                    data => {
                        
                        if(data.erro === undefined){
                            
                            FillFormWithAddress(data)

                        }else{
                            
                            console.log('O cep informado não funciona')
                            cepInputRef.value = ''
                        }
                    }
                )
            }
        )
    }
}

cepInputRef.addEventListener('keyup', () => searchAddress())

/* Teste API ToDO */

var userData = {
    firsName: 'Rafael',
    lastName: 'Cerqueira',
    email: 'email@email.com',
    password:'1234'
}

const requestHeaders = {
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
}

var requestConfig = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(userData)
}


fetch('https://todo-api.ctd.academy/v1/users', requestConfig).then(
    response => {
        if(response.ok){
            console.log('O usuario foi cadastrado com sucesso')
            windows.location.href = '/aula-16/index.html'
        }else{
            console.log('O usuario ja foi cadastro')
        }
    }
)