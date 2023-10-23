function Mudarestado(el, imgSrc) {
    var elements = document.querySelectorAll('.quadrado .personagem');
    elements.forEach(function (element) {
        element.classList.remove('selected');
    });

    var selectedElement = document.getElementById(el);
    selectedElement.classList.add('selected');

    var areapersoCabeca = document.querySelector('.area-personagem-cabeça img');
    areapersoCabeca.src = imgSrc;
}

document.getElementById('botao').onclick = function(){
    window.location.href='/cabelos';
  }



