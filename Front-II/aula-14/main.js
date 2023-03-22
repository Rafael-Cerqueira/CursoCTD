const cepInputRef = document.querySelector('#cep')
const cityInputRef = document.querySelector('#cep')
const bairroInputRef = document.querySelector('#cep')

function FillFormWithAddress(){

    cityInputRef.value = searchAddress.localidade
    bairroInputRef.value = searchAddress.bairro

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

                        console.log(data)
                    }
                )
            }
        )
    }
}

cepInputRef.addEventListener('keyup', () => searchAddress())