const
  menulinks = document.querySelectorAll('.global-nav-link'),
  hamburger = document.querySelector('#hamburger'),
  overlay = document.querySelector('#overlay'),
  menuLabel = hamburger.querySelector('span');
// TODO メニューと閉じるの切り替えを追加した、確認する。
hamburger.addEventListener('click', () => {
  document.body.classList.toggle('is-active');
  if (document.body.classList.contains('is-active')) {
    menuLabel.textContent = '閉じる';
  } else {
    menuLabel.textContent = 'メニュー';
  }
});

overlay.addEventListener('click', () => {
  document.body.classList.remove('is-active');
  menuLabel.textContent = 'メニュー';
});

menulinks.forEach(link => {
  link.addEventListener('click', () => {
    if (document.body.classList.contains('is-active')) {
      document.body.classList.remove('is-active');
      menuLabel.textContent = 'メニュー';
    }
  });
});