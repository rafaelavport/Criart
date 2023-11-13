
var imagemPersonagemSelecionado;

function Mudarestado(id, imagem) {
    var elemento = document.getElementById(id);
    if (elemento.style.opacity == "1") {
        elemento.style.opacity = "0.5";
    } else {
        elemento.style.opacity = "1";
        imagemPersonagemSelecionado = imagem;
    }
}


function irParaRotaCabelos() {

    document.querySelector('.area-grande-personagens').style.display = 'none';

    document.querySelector('.area-cabelos').style.display = 'block';

    var imgCorpoPersonagem = document.createElement('img');
    imgCorpoPersonagem.src = imagemPersonagemSelecionado;
    imgCorpoPersonagem.alt = 'Corpo do personagem';
    imgCorpoPersonagem.className = 'corpo-personagem';

    document.querySelector('.area-cabelos').appendChild(imgCorpoPersonagem);
}


function irParaRotaBlusas() {

    document.querySelector('.area-cabelos').style.display = 'none';

    document.querySelector('.area-blusas').style.display = 'block';

    var imgCorpoPersonagem = document.createElement('img');
    imgCorpoPersonagem.src = imagemPersonagemSelecionado;
    imgCorpoPersonagem.alt = 'Corpo do personagem';
    imgCorpoPersonagem.className = 'corpo-personagem'; 


    document.querySelector('.area-blusas').appendChild(imgCorpoPersonagem);
}


function irParaRotaCalcas() {

    document.querySelector('.area-blusas').style.display = 'none';

    document.querySelector('.area-calcas').style.display = 'block';

    var imgCorpoPersonagem = document.createElement('img');
    imgCorpoPersonagem.src = imagemPersonagemSelecionado;
    imgCorpoPersonagem.alt = 'Corpo do personagem';
    imgCorpoPersonagem.className = 'corpo-personagem'; 


    document.querySelector('.area-calcas').appendChild(imgCorpoPersonagem);
}


function voltarParaRotaPersonagem() {
    document.querySelector('.area-cabelos').style.display = 'none';
    document.querySelector('.area-blusas').style.display = 'none';
    document.querySelector('.area-calcas').style.display = 'none';


    document.querySelector('.area-grande-personagens').style.display = 'block';


    var imgCorpoPersonagem = document.querySelector('.corpo-personagem');
    if (imgCorpoPersonagem) {
        imgCorpoPersonagem.remove();
    }
}


document.getElementById('botao').addEventListener('click', irParaRotaCabelos);

document.getElementById('botao-c').addEventListener('click', irParaRotaBlusas);

document.getElementById('botao-blusas').addEventListener('click', irParaRotaCalcas);

document.getElementById('botao-calcas').addEventListener('click', voltarParaRotaPersonagem);
