var imagemCorpoSelecionado = '';
var imagemCabeloSelecionado = '';
var imagemBlusaSelecionado = '';
var imagemCalcaSelecionado = '';
var imagensSelecionadas = [];

function Mudarestado(id, imagem) {
    var corpoPersonagem = document.getElementById('corpoPersonagem');
    corpoPersonagem.src = imagem;
    corpoPersonagem.style.display = 'block';

    if (document.querySelector('.area-grande-personagens').style.display === 'block') {
        imagemCorpoSelecionado = imagem;
        console.log("Imagem do corpo selecionada:", imagemCorpoSelecionado);
    } else if (document.querySelector('.area-cabelos').style.display === 'block') {
        imagemCabeloSelecionado = imagem;
        console.log("Imagem do cabelo selecionada:", imagemCabeloSelecionado);
    } else if (document.querySelector('.area-blusas').style.display === 'block') {
        imagemBlusaSelecionado = imagem;
        console.log("Imagem da blusa selecionada:", imagemBlusaSelecionado);
    } else if (document.querySelector('.area-calcas').style.display === 'block') {
        imagemCalcaSelecionado = imagem;
        console.log("Imagem da calça selecionada:", imagemCalcaSelecionado);
    }
    imagensSelecionadas.push(imagem);

    exibirImagensSelecionadas();
}

function exibirImagensSelecionadas() {
    var areaSelecionada = document.getElementById('areaSelecionada');
    areaSelecionada.innerHTML = ''; // Limpar a área antes de exibir as novas imagens

    imagensSelecionadas.forEach(function (imagemSrc, index) {
        var img = document.createElement('img');
        img.src = imagemSrc;
        img.alt = 'Imagem ' + (index + 1);
        img.className = 'elemento-personagem';
        areaSelecionada.appendChild(img);
    });
}

function irParaRotaCabelos() {
    document.querySelector('.area-grande-personagens').style.display = 'none';
    document.querySelector('.area-cabelos').style.display = 'block';
    adicionarImagemSelecionada(imagemCorpoSelecionado);
}

function irParaRotaBlusas() {
    document.querySelector('.area-cabelos').style.display = 'none';
    document.querySelector('.area-blusas').style.display = 'block';
    adicionarImagemSelecionada(imagemCorpoSelecionado);
    adicionarImagemSelecionada(imagemCabeloSelecionado);
}

function irParaRotaCalcas() {
    document.querySelector('.area-blusas').style.display = 'none';
    document.querySelector('.area-calcas').style.display = 'block';
    adicionarImagemSelecionada(imagemCorpoSelecionado);
    adicionarImagemSelecionada(imagemCabeloSelecionado);
    adicionarImagemSelecionada(imagemBlusaSelecionado);
}

function irParaRotaSalvar() {
    document.querySelector('.area-calcas').style.display = 'none';
    document.querySelector('.salvar').style.display = 'block';
    adicionarImagemSelecionada(imagemCorpoSelecionado);
    adicionarImagemSelecionada(imagemCabeloSelecionado);
    adicionarImagemSelecionada(imagemBlusaSelecionado);
    adicionarImagemSelecionada(imagemCalcaSelecionado);
}

function capturarComoImagem() {
    const imagemSelecionada = document.querySelector('.area-selecionada img');

    // Verifica se a imagem foi encontrada
    if (imagemSelecionada) {
        const link = document.createElement('a');
        link.href = imagemSelecionada.src;
        link.download = 'personagem.png'; // Define o nome do arquivo como 'personagem.png'

        // Simula um clique no link para baixar a imagem
        link.click();
    } else {
        console.error('Imagem não encontrada na área selecionada');
    }
}


document.getElementById('botao-p').addEventListener('click', irParaRotaCabelos);

document.getElementById('botao-c').addEventListener('click', irParaRotaBlusas);

document.getElementById('botao-blusas').addEventListener('click', irParaRotaCalcas);

document.getElementById('botao-ca').addEventListener('click', irParaRotaSalvar);

document.getElementById('botao').onclick = function(){
    window.location.href='/home';
  }