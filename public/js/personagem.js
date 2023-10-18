function Mudarestado(el, imgSrc) {
    var elements = document.querySelectorAll('.quadrado.cabelos');
    elements.forEach(function (element) {
        element.classList.remove('selected');
    });

    var selectedElement = document.getElementById(el);
    selectedElement.classList.add('selected');

    var areacabelosCabeca = document.querySelector('.area-cabelos-cabeça img');
    areacabelosCabeca.src = imgSrc;
}

  document.getElementById('botao').onclick = function () {
    var peleSelecionada = document.querySelector('.area-personagem-cabeça img').src;

    window.location.href = '/cabelos?pele=' + encodeURIComponent(peleSelecionada);
}


