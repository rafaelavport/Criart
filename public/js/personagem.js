function Mudarestado(el) {
    var elements = document.querySelectorAll('.personagem');
    elements.forEach(function (element) {
        element.classList.add('hide');
        element.classList.remove('show');
    });
    var selectedElement = document.getElementById(el);
    selectedElement.classList.remove('hide');
    selectedElement.classList.add('show');
}

