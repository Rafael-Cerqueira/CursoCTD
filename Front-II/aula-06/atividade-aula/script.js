let contentRef = document.querySelector('#content')


const noticias = [

    {
        titulo: 'Esse é o primeiro post',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et, recusandae sed, iure, sint dicta quo animi ullam dolor culpa tempore quia quod nam id porro eveniet vitae magni nostrum.',
        url:'#'
    },
    {
        titulo: 'Esse é segundo post',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et, recusandae sed, iure, sint dicta quo animi ullam dolor culpa tempore quia quod nam id porro eveniet vitae magni nostrum.',
        url:'#'
    },
    {
        titulo: 'Esse é o terceiro post',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et, recusandae sed, iure, sint dicta quo animi ullam dolor culpa tempore quia quod nam id porro eveniet vitae magni nostrum.',
        url: '#'
    }

]

for (let noticia of noticias) {

    contentRef.innerHTML += `

    <article>

        <h1>${noticia.titulo}</h1>
        <p>${noticia.descricao}</p>
        <a href="">${noticia.url}</a>

    </article>
    
    `
}
