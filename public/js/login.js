let email = document.querySelector(email)
let senha = document.querySelector(senha)

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fazerConta').onclick = function() {
      window.location.href = '/cadastro';
  }
});
