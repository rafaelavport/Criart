function Mudarestado(el) {
    var elements = document.querySelectorAll('.area-selecao-personagem .quadrado');
    elements.forEach(function (element) {
        element.classList.add('hide');
    });
    document.getElementById(el).classList.remove('hide');

    var areaPersonagemCabeca = document.querySelector('.area-personagem-cabeça');
    areaPersonagemCabeca.classList.remove('hide');
}

