document.getElementById('botao').onclick = function(){
    window.location.href='/salvar';
}

var data = 0;

document.getElementById("valor").innerText = data;

function mais() {
    data = data + 1;
    document.getElementById("valor").innerText = data;
}

function menos() {
    data = data - 1;
    document.getElementById("valor").innerText = data;
            }