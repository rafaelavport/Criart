function Mudarestado(el, imgSrc) {
    var elements = document.querySelectorAll('.quadrado.cabelos');
    elements.forEach(function (element) {
        element.classList.remove('selected');
    });

    var selectedElement = document.getElementById(el);
    selectedElement.classList.add('selected');

    var areacabelos = document.querySelector('.area-cabelos img');
    areacabelos.src = imgSrc;
}

var urlParams = new URLSearchParams(window.location.search);
var peleSelecionada = urlParams.get('pele');

document.getElementById('botao').onclick = function(){
    window.location.href='/tabela';
  }

