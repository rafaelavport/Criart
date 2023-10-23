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

document.getElementById('botao-c').onclick = function(){
    window.location.href='/tabela';
  }