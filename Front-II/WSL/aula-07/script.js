function darkMode(){
    let color = document.querySelector('.Body')
    color.classList.toggle('dark')
}

let containerRef = document.querySelector('.container')

let animais = [
    {
        imagem: './imagens/tiger.jpg',
        titulo: 'O tigre',
        descricao: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão'
    },
    {
        imagem: './imagens/leon.jpg',
        titulo: 'O leão',
        descricao: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero         gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
    },
    {
        imagem: './imagens/leopardo.jpg',
        titulo: 'O leopardo',
        descricao: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).'
    },
    {
        imagem: './imagens/pantera-negra.jpg',
        titulo: 'A pantera negra</h2',
        descricao: 'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais'
    },
    {
        imagem: './imagens/jaguar.jpg',
        titulo: 'O jaguar',
        descricao: 'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).'
    },
    {
        imagem: './imagens/chita.jpg',
        titulo: 'O guepardo',
        descricao: 'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.'
    }
]

for (let animal of animais) {

    containerRef.innerHTML +=

    `
    <div class="item">
        <img src="${animal.imagem}">
        <h2>${animal.titulo}</h2>
        <p>${animal.descricao}</p>
    </div>

    `
}