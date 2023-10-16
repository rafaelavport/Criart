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

function troca() {
    // Adicione a lógica para o que acontece quando você clica na seta direita (se necessário).
}


