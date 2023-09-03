function troca(){
    window.location.href = "file:///C:/Users/rafae/OneDrive/%C3%81rea%20de%20Trabalho/projeto/tela-personagem-1/index.html"
}
const box = document.querySelector('.box');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const boxPosition = box.offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollPosition > boxPosition - windowHeight + 400) {
    box.style.opacity = 1;
  }
});
