function Mudarestado(el, imgSrc) {
    var elements = document.querySelectorAll('.quadrado.personagem');
    elements.forEach(function (element) {
        element.classList.remove('selected');
    });

    var selectedElement = document.getElementById(el);
    selectedElement.classList.add('selected');

    var areaPersonagemCabeca = document.querySelector('.area-personagem-cabeça img');
    areaPersonagemCabeca.src = imgSrc;
}

document.getElementById('botao').onclick = function(){
    window.location.href='/tabela';
  }