const
  hamburger = document.querySelector('#hamburger'),
  overlay = document.querySelector('#overlay');

hamburger.addEventListener('click', () => {
  document.body.classList.toggle('is-active');
});

overlay.addEventListener('click', () => {
  document.body.classList.remove('is-active');
});