const
  menulinks = document.querySelectorAll('.global-nav-link'),
  hamburger = document.querySelector('#hamburger'),
  overlay = document.querySelector('#overlay');

hamburger.addEventListener('click', () => {
  document.body.classList.toggle('is-active');
});

overlay.addEventListener('click', () => {
  document.body.classList.remove('is-active');
});

// TODO ハンバーガーメニューをクリックした時にメニューが消えるようにしたけど、これで大丈夫かを確認する。
// constとDOMContentLoadedについても確認する。
menulinks.forEach(link => {
  link.addEventListener('click', () => {
  document.body.classList.remove('is-active');
  });
});