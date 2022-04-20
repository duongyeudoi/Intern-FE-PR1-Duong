window.addEventListener('mousedown', (event) => {
  const navToggle = document.querySelector('.header-nav--toggle');
  const menu = document.querySelector('.header-nav__list');
  if (event.target === navToggle) {
    menu.classList.add('show');
  } else if (event.target != navToggle && event.target.parentNode != menu) {
    menu.classList.remove('show');
  }
});
