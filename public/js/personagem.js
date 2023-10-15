function Mudarestado(el) {
    var elements = document.querySelectorAll('.area-selecao-personagem .quadrado');
    elements.forEach(function (element) {
        element.classList.remove('show');
        element.classList.add('hide');
    });
    document.getElementById(el).classList.remove('hide');
    document.getElementById(el).classList.add('show');
}
