let email = document.querySelector(email)
let senha = document.querySelector(senha)

const fazerContaElement = document.getElementById('fazerConta');

fazerContaElement.addEventListener('click', function() {
  window.location.href = '/cadastro';
});
