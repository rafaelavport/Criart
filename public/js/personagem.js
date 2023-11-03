function Mudarestado(el, imgSrc) {
    var elements = document.querySelectorAll('.quadrado .corpo');
    elements.forEach(function (element) {
        element.classList.remove('selected');
    });

    var selectedElement = document.getElementById(el);
    selectedElement.classList.add('selected');

    var areacorpo = document.querySelector('.area-personagem-cabeça img');
    areacorpo.src = imgSrc;
}



