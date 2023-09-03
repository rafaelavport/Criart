function troca(){
    window.location.href = "file:///C:/Users/rafae/OneDrive/%C3%81rea%20de%20Trabalho/projeto/tela-salvar/index.html"
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