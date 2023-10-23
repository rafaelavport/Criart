function Mudarestado(el) {
    var elements = document.querySelectorAll('.personagem');
    var elements = document.querySelectorAll('.area-selecao-personagem .quadrado');
    elements.forEach(function (element) {
        element.classList.add('hide');
        element.classList.remove('show');
    });
    var selectedElement = document.getElementById(el);
    selectedElement.classList.remove('hide');
    selectedElement.classList.add('show');
    document.getElementById(el).classList.remove('hide');

    var areaPersonagemCabeca = document.querySelector('.area-personagem-cabeça');
    areaPersonagemCabeca.classList.remove('hide');
}

document.getElementById('botao').onclick = function(){
    window.location.href='/cabelos';
  }



