const formTituloRef = document.querySelector('#formTitulo')
const formUrlRef = document.querySelector('#formUrl')
const formDescricaoRef = document.querySelector('#formDescricao')
const botaoEnviarRef = document.querySelector('#botaoEnviar')
const contentRef = document.querySelector('.content')


const cards = []

formTituloRef.addEventListener('input', validarCampos);
formDescricaoRef.addEventListener('input', validarCampos);

function validarCampos() {

  const tituloValido = formTituloRef.value.length >= 4;
  const descricaoValida = formDescricaoRef.value.length >= 4;

  if (tituloValido && descricaoValida) {
    botaoEnviarRef.disabled = false;
  } else {
    botaoEnviarRef.disabled = true;
  }

}

botaoEnviarRef.addEventListener('click', (event) => {
  event.preventDefault();

  const cardCursos = {
    titulo: formTituloRef.value,
    url: formUrlRef.value,
    descricao: formDescricaoRef.value,
  }

  let valido = true;

  if (cardCursos.titulo.length < 4 || cardCursos.descricao.length < 4) {
    alert('O título e a descrição devem ter pelo menos 4 caracteres');
    valido = false;
  }

  if (valido && cardCursos.url && typeof cardCursos.url === 'string') {

    const img = new Image();
    img.addEventListener('load', () => {

      cards.push(cardCursos);

      const novoCard = `
        <div class="card text-bg-dark mb-3" style="width: 18rem;">
          <img src="${cardCursos.url}" alt="url">
          <h1>${cardCursos.titulo}</h1>
          <div class="card-body">
            <p class="card-text">${cardCursos.descricao}</p>
          </div>
        </div>
      `;

      
      contentRef.innerHTML += novoCard;
    });
    
    img.src = cardCursos.url;
    img.addEventListener('error', () => {

      alert('A URL inserida não é uma imagem válida!');
    });
  }

  if (botaoEnviarRef.disabled == false) {
    formTituloRef.value = ''
    formUrlRef.value = ''
    formDescricaoRef.value = ''
  }
});
