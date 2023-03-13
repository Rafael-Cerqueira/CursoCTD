const formTituloRef = document.querySelector('#formTitulo')
const formUrlRef = document.querySelector('#formUrl')
const formDescricaoRef = document.querySelector('#formDescricao')
const botaoEnviarRef = document.querySelector('#botaoEnviar')
const contentRef = document.querySelector('.content')


const cards = []


botaoEnviarRef.addEventListener('click', (event) => {
    event.preventDefault();

    const cardCursos = {

        titulo: formTituloRef.value,
        url: formUrlRef.value,
        descricao: formDescricaoRef.value,

    }

    cards.push(cardCursos)

    const novoCard = 

    `
    <div class="card text-bg-dark mb-3" style="width: 18rem;">
    <img src="${cardCursos.url}" alt="url">
    <h1>${cardCursos.titulo}</h1>
    <div class="card-body">
      <p class="card-text">${cardCursos.descricao}</p>
    </div>
    </div>
    `

    contentRef.innerHTML += novoCard
})
