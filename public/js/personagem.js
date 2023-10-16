function Mudarestado(el) {
    var elements = document.querySelectorAll('.area-selecao-personagem .quadrado');
    elements.forEach(function (element) {
        element.classList.remove('selected');
    });
    var selectedElement = document.getElementById(el);
    selectedElement.classList.add('selected');

    var areaPersonagemCabeca = document.querySelector('.area-personagem-cabeça img');
    var imageSource = selectedElement.querySelector('img').src;
    areaPersonagemCabeca.src = imageSource;
}


