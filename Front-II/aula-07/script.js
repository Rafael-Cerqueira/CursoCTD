// window.addEventListener(){

// }
const formTituloRef = document.querySelector('#formTitulo')

const formUrlRef = document.querySelector('#formUrl')

const formDescricaoRef = document.querySelector('#formDescricao')

const contentRef = document.querySelector('.content')

const cards = [

    {
        titulo: ``,
        url: ``,
        descricao: ``,
    }

]

function salvarTitulo(titulo){

    cards.titulo = titulo.value

}

function salvarUrl(url){

    cards.url = url.value

}

function salvarDescricao(descricao){

    cards.descricao = descricao.value

}

formTituloRef.addEventListener('keyup', (event) => salvarTitulo(event.target.value))

formUrlRef.addEventListener('keyup', (event) => salvarUrl(event.target.value))

formDescricaoRef.addEventListener('keyup', (event) => salvarDescricao(event.target.value))


for (let card of cards) {

    contentRef.innerHTML +=
    `
    <div class="card text-bg-dark mb-3" style="width: 18rem;">
    <img src="${cards.url}" alt="url">
    <h1>${cards.titulo}</h1>
    <div class="card-body">
      <p class="card-text">${cards.descricao}</p>
    </div>
    </div>
    `
}