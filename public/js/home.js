document.getElementById('botao').onclick = function(){
  window.location.href='/personagem';
}

const box1 = document.querySelector('.box1');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const boxPosition = box1.offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollPosition > boxPosition - windowHeight + 400) {
    box1.style.opacity = 1;
  }
});

const box2 = document.querySelector('.box2');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const boxPosition = box2.offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollPosition > boxPosition - windowHeight + 400) {
    box2.style.opacity = 1;
  }
});

const box3 = document.querySelector('.box3');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const boxPosition = box3.offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollPosition > boxPosition - windowHeight + 400) {
    box1.style.opacity = 1;
  }
});

const box4 = document.querySelector('.box4');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const boxPosition = box4.offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollPosition > boxPosition - windowHeight + 400) {
    box2.style.opacity = 1;
  }
});
