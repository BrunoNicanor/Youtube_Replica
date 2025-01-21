//Conteúdos
let listaConteudos = [
    {
        thumb: '1',
        duracao: '16:10',
        perfil: '1',
        titulo: 'Aprenda a Programar Online Gratis Agora',
        nomeCanal: 'Nome Canal',
        view: '15,2 mil visualizações &#8226; há 5 horas'
    },
    {
        thumb: '2',
        duracao: '23:45',
        perfil: '2',
        titulo: 'Como dominar CSS em pouco tempo',
        nomeCanal: 'Código Fácil',
        view: '15,2 mil visualizações &#8226; há 5 horas'
    },
    {
        thumb: '3',
        duracao: '42:30',
        perfil: '3',
        titulo: 'JavaScript do zero ao avançado',
        nomeCanal: 'DevPro',
        view: '20 mil visualizações &#8226; há 1 dia'
    },
    {
        thumb: '4',
        duracao: '11:59',
        perfil: '4',
        titulo: 'React JS na prática',
        nomeCanal: 'React Master',
        view: '5,8 mil visualizações &#8226; há 3 dias'
    },
    {
        thumb: '5',
        duracao: '54:20',
        perfil: '1',
        titulo: 'Back-end com Node.js',
        nomeCanal: 'Backend School',
        view: '8,2 mil visualizações &#8226; há 5 dias'
    },
    {
        thumb: '6',
        duracao: '35:10',
        perfil: '2',
        titulo: 'Como criar um site do zero',
        nomeCanal: 'Code Academy',
        view: '12,5 mil visualizações &#8226; há 1 semana'
    },
    {
        thumb: '7',
        duracao: '50:45',
        perfil: '3',
        titulo: 'Animações com CSS',
        nomeCanal: 'CSS Expert',
        view: '9,1 mil visualizações &#8226; há 2 semanas'
    },
    {
        thumb: '8',
        duracao: '28:30',
        perfil: '4',
        titulo: 'Banco de Dados MySQL do Básico',
        nomeCanal: 'DB Masters',
        view: '6,7 mil visualizações &#8226; há 3 semanas'
    },
    {
        thumb: '9',
        duracao: '41:20',
        perfil: '1',
        titulo: 'Melhores práticas JavaScript',
        nomeCanal: 'Dev Masterclass',
        view: '18,3 mil visualizações &#8226; há 1 mês'
    },
    {
        thumb: '10',
        duracao: '47:50',
        perfil: '2',
        titulo: 'Segredos do Frontend Moderno',
        nomeCanal: 'Frontend Pro',
        view: '21 mil visualizações &#8226; há 2 meses'
    },
    {
        thumb: '11',
        duracao: '30:25',
        perfil: '3',
        titulo: 'Dicas avançadas de Python',
        nomeCanal: 'Python Gurus',
        view: '11 mil visualizações &#8226; há 1 ano'
    },
    {
        thumb: '12',
        duracao: '59:15',
        perfil: '4',
        titulo: 'Como criar APIs com REST',
        nomeCanal: 'API Experts',
        view: '25 mil visualizações &#8226; há 6 meses'
    },
    {
        thumb: '6',
        duracao: '35:10',
        perfil: '2',
        titulo: 'Como criar um site do zero',
        nomeCanal: 'Code Academy',
        view: '12,5 mil visualizações &#8226; há 1 semana'
    },
    {
        thumb: '7',
        duracao: '50:45',
        perfil: '3',
        titulo: 'Animações com CSS',
        nomeCanal: 'CSS Expert',
        view: '9,1 mil visualizações &#8226; há 2 semanas'
    },
    {
        thumb: '8',
        duracao: '28:30',
        perfil: '4',
        titulo: 'Banco de Dados MySQL do Básico',
        nomeCanal: 'DB Masters',
        view: '6,7 mil visualizações &#8226; há 3 semanas'
    },
    {
        thumb: '9',
        duracao: '41:20',
        perfil: '1',
        titulo: 'Melhores práticas JavaScript',
        nomeCanal: 'Dev Masterclass',
        view: '18,3 mil visualizações &#8226; há 1 mês'
    },
    {
        thumb: '10',
        duracao: '47:50',
        perfil: '2',
        titulo: 'Segredos do Frontend Moderno',
        nomeCanal: 'Frontend Pro',
        view: '21 mil visualizações &#8226; há 2 meses'
    },
    {
        thumb: '11',
        duracao: '30:25',
        perfil: '3',
        titulo: 'Dicas avançadas de Python',
        nomeCanal: 'Python Gurus',
        view: '11 mil visualizações &#8226; há 1 ano'
    },
    {
        thumb: '12',
        duracao: '59:15',
        perfil: '4',
        titulo: 'Como criar APIs com REST',
        nomeCanal: 'API Experts',
        view: '25 mil visualizações &#8226; há 6 meses'
    }
];

for (let index = 0; index < listaConteudos.length; index++) {
    const sectionConteudos = document.getElementById('conteudos');
    let novoDivConteudo = document.createElement('div');
    novoDivConteudo.classList.add('conteudo');

    sectionConteudos.appendChild(novoDivConteudo);

    novoDivConteudo.innerHTML = `
    <div class="conteudo__superior" 
    style="background-image: url('/Image/thumbnail/${listaConteudos[index].thumb}.jpg');">
        <div class="conteudo__superior__duracao">${listaConteudos[index].duracao}</div>
    </div>
    <div class="conteudo__inferior">
        <div class="conteudo__inferior__imgCanal" 
        style="background-image: url('/Image/perfil/${listaConteudos[index].perfil}.png'); background-size: contain;"></div>
        <div class="conteudo__inferior__texto">
            <div class="conteudo__inferior__texto__titulo">${listaConteudos[index].titulo}</div>
            <div class="conteudo__inferior__texto__canal">
                <p>${listaConteudos[index].nomeCanal}</p>
                <p>${listaConteudos[index].view}</p>
            </div>
        </div>
        <div class="conteudo__inferior__btnOpcao">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    `;
}

//Nav
let listaTextoNavegacao = [
    "Tudo",
    "Jogos",
    "Músicas",
    "Mixes",
    "Notícias",
    "Gadgets",
    "Filmes",
    "Corrida",
    "Brasil",
    "Política",
    "Eventos",
    "Super-Heróis",
    "Marvel",
    "Dc Comics"
  ];

for (let index = 0; index < listaTextoNavegacao.length; index++) {
    const nav = document.querySelector('nav');
    let novoDivNavegacao = document.createElement('div');
    nav.appendChild(novoDivNavegacao);
    
    novoDivNavegacao.innerText = listaTextoNavegacao[index];
}

//Aside

//Pegando largura da tela
let larguraTela = window.innerWidth;
//let larguraTela = window.innerWidth;

//Criando sub-lista para conteúdo mobile
let listaAsideButtonMobile = [
    {imagem: "/Image/icon/mais.png", titulo: ""},
    {imagem: "/Image/icon/Inscricao.png", titulo: "Inscrições"},
    {imagem: "/Image/icon/foto.jpg", titulo: "Você"}
];
//Criando lista para conteúdo desktop
let listaAsideButtonDesktop = [
    {imagem: "/Image/icon/Inscricao.png", titulo: "Inscrições"},
    {imagem: "/Image/icon/music.png", titulo: "Youtube Music"},
    {imagem: "/Image/icon/download.png", titulo: "Downloads"}
];
//Criando lista auxiliar para escolha
let listaEscolha = [];

window.addEventListener('load', (event) =>{
    verificaTelaImprime(event)
});

window.addEventListener('resize',  (event) =>{
    verificaTelaImprime(event)
});


//Fazendo verificação de tamanho de tela
const asideButton = document.querySelectorAll('.aside_button');

//Criando função para verificar tamanho de tela e selecionar lista
function verificaTelaImprime(event){
    if (event.target.innerWidth <= 700){
        listaEscolha = listaAsideButtonMobile;
    }else{
        listaEscolha = listaAsideButtonDesktop;
    }

    imprimindoAsideButton();
}
//Criando função para imprimir os elementos de Aside
function imprimindoAsideButton(){

    //Elementos Aside Desktop
    let listaAsideButton = [
        { imagem: "/Image/icon/home.png", titulo: "Início" },
        { imagem: "/Image/icon/shorts.png", titulo: "Shorts" },
        { imagem: listaEscolha[0].imagem, titulo: listaEscolha[0].titulo},
        //{ imagem: "/Image/icon/Inscricao.png", titulo: "Inscrições" },
        { imagem: listaEscolha[1].imagem, titulo: listaEscolha[1].titulo},
        //{ imagem: "/Image/icon/music.png", titulo: "Youtube Music" },
        { imagem: "/Image/icon/historico.png", titulo: "Histórico" },
        { imagem: "/Image/icon/playlist.png", titulo: "Playlist" },
        { imagem: "/Image/icon/seusvideos.png", titulo: "Seus vídeos" },
        { imagem: "/Image/icon/seusfilmes.png", titulo: "Seus Filmes" },
        { imagem: "/Image/icon/MaisTarde.png", titulo: "Assistir mais tarde" },
        { imagem: "/Image/icon/Gostei.png", titulo: "Vídeos com Gostei" },
        { imagem: listaEscolha[2].imagem, titulo: listaEscolha[2].titulo},
        //{ imagem: "/Image/icon/download.png", titulo: "Downloads" },
        { imagem: "/Image/icon/clipes.png", titulo: "Seus clipes" },
        { imagem: "/Image/icon/Studio.png", titulo: "Youtube Studio" },
        { imagem: "/Image/icon/Youtube_Music.png", titulo: "Youtube Music" },
        { imagem: "/Image/icon/Kids.png", titulo: "Youtube Kids" },
        { imagem: "/Image/icon/config.png", titulo: "Configurações" },
        { imagem: "/Image/icon/Flag.png", titulo: "Histórico de denu" },
        { imagem: "/Image/icon/ajuda.png", titulo: "Ajuda" },
        { imagem: "/Image/icon/feedback.png", titulo: "Enviar Feedback" }
    ];
    
    for (let index = 0; index < listaAsideButton.length; index++) {

        let novoDivAside = asideButton[index];
    
        novoDivAside.innerHTML = `
        <div class="button_icone">
            <img src="${listaAsideButton[index].imagem}" alt="">
        </div>
        <div class="button_texto">
            <p>${listaAsideButton[index].titulo}</p>
        </div>
    `;   
    }
}