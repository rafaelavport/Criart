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

    // Atualizar a visualização da área-selecionada com as imagens escolhidas
    exibirImagensSelecionadas();
}

// Função para exibir as imagens selecionadas na área-selecionada
function exibirImagensSelecionadas() {
    var areaSelecionada = document.getElementById('areaSelecionada');
    areaSelecionada.innerHTML = ''; // Limpar a área antes de exibir as novas imagens

    // Exibir cada imagem selecionada na área-selecionada sobreposta
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
    const areaSalvar = document.querySelector('.area-selecionada');
    html2canvas(areaSalvar).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        downloadImagem(imgData, 'personagem.png');
    });
}

function downloadImagem(data, filename) {
    const link = document.createElement('a');
    link.href = data;
    link.download = filename;
    link.click();
}

document.getElementById('botao-p').addEventListener('click', irParaRotaCabelos);

document.getElementById('botao-c').addEventListener('click', irParaRotaBlusas);

document.getElementById('botao-blusas').addEventListener('click', irParaRotaCalcas);

document.getElementById('botao-ca').addEventListener('click', irParaRotaSalvar);

document.getElementById('botao').onclick = function(){
    window.location.href='/home';
  }