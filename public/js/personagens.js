// Variável global para armazenar a imagem do corpo do personagem selecionado
var imagemPersonagemSelecionado;

// Função para mudar o estado e armazenar a imagem do corpo do personagem
function Mudarestado(id, imagem) {
    var elemento = document.getElementById(id);
    if (elemento.style.opacity == "1") {
        elemento.style.opacity = "0.5";
    } else {
        elemento.style.opacity = "1";
        imagemPersonagemSelecionado = imagem;
    }
}

// Função para ir para a rota 'cabelos'
function irParaRotaCabelos() {
    // Ocultar a rota 'personagem'
    document.querySelector('.area-grande-personagens').style.display = 'none';

    // Exibir a rota 'cabelos'
    document.querySelector('.area-cabelos').style.display = 'block';

    // Criar um elemento de imagem para exibir a imagem do corpo do personagem selecionado
    var imgCorpoPersonagem = document.createElement('img');
    imgCorpoPersonagem.src = imagemPersonagemSelecionado;
    imgCorpoPersonagem.alt = 'Corpo do personagem';
    imgCorpoPersonagem.className = 'corpo-personagem'; // Adicione uma classe para estilização

    // Adicionar a imagem do corpo do personagem à área de cabelos
    document.querySelector('.area-cabelos').appendChild(imgCorpoPersonagem);
}

// Função para ir para a rota 'blusas'
function irParaRotaBlusas() {
    // Ocultar a rota 'cabelos'
    document.querySelector('.area-cabelos').style.display = 'none';

    // Exibir a rota 'blusas'
    document.querySelector('.area-blusas').style.display = 'block';

    // Criar um elemento de imagem para exibir a imagem do corpo do personagem selecionado
    var imgCorpoPersonagem = document.createElement('img');
    imgCorpoPersonagem.src = imagemPersonagemSelecionado;
    imgCorpoPersonagem.alt = 'Corpo do personagem';
    imgCorpoPersonagem.className = 'corpo-personagem'; // Adicione uma classe para estilização

    // Adicionar a imagem do corpo do personagem à área de blusas
    document.querySelector('.area-blusas').appendChild(imgCorpoPersonagem);
}

// Função para ir para a rota 'calcas'
function irParaRotaCalcas() {
    // Ocultar a rota 'blusas'
    document.querySelector('.area-blusas').style.display = 'none';

    // Exibir a rota 'calcas'
    document.querySelector('.area-calcas').style.display = 'block';

    // Criar um elemento de imagem para exibir a imagem do corpo do personagem selecionado
    var imgCorpoPersonagem = document.createElement('img');
    imgCorpoPersonagem.src = imagemPersonagemSelecionado;
    imgCorpoPersonagem.alt = 'Corpo do personagem';
    imgCorpoPersonagem.className = 'corpo-personagem'; // Adicione uma classe para estilização

    // Adicionar a imagem do corpo do personagem à área de calças
    document.querySelector('.area-calcas').appendChild(imgCorpoPersonagem);
}

// Função para voltar para a rota 'personagem'
function voltarParaRotaPersonagem() {
    // Ocultar a rota 'cabelos', 'blusas' e 'calcas'
    document.querySelector('.area-cabelos').style.display = 'none';
    document.querySelector('.area-blusas').style.display = 'none';
    document.querySelector('.area-calcas').style.display = 'none';

    // Exibir a rota 'personagem'
    document.querySelector('.area-grande-personagens').style.display = 'block';

    // Remover a imagem do corpo do personagem da DOM
    var imgCorpoPersonagem = document.querySelector('.corpo-personagem');
    if (imgCorpoPersonagem) {
        imgCorpoPersonagem.remove();
    }
}

// Adicione um evento de clique à seta para ir para a rota 'cabelos'
document.getElementById('botao').addEventListener('click', irParaRotaCabelos);

// Adicione um evento de clique à seta para ir para a rota 'blusas'
document.getElementById('botao-c').addEventListener('click', irParaRotaBlusas);

// Adicione um evento de clique à seta para ir para a rota 'calcas'
document.getElementById('botao-blusas').addEventListener('click', irParaRotaCalcas);

// Adicione um evento de clique à seta para voltar para a rota 'personagem'
document.getElementById('botao-calcas').addEventListener('click', voltarParaRotaPersonagem);
