function Mudarestado(el) {
    var elements = document.querySelectorAll('.area-selecao-personagem .quadrado');
    elements.forEach(function (element) {
        if (element.id !== el) {
            element.classList.add('hide');
            element.classList.remove('show');
        }
    });
    var selectedElement = document.getElementById(el);
    selectedElement.classList.remove('hide');
    selectedElement.classList.add('show');
}

