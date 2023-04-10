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