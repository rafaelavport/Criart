document.getElementById('botao').onclick = function(){
  window.location.href='/personagem';
}

const box = document.querySelector('.boxes');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const boxPosition = box.offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollPosition > boxPosition - windowHeight + 400) {
    box.style.opacity = 1;
  }
});
