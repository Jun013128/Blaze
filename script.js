/**
 * 共通 ハンバーガーメニュー
 **/

const
  menulinks = document.querySelectorAll('.global-nav-link'),
  hamburger = document.querySelector('#hamburger'),
  overlay = document.querySelector('#overlay'),
  menuLabel = document.querySelector('#menulabel'),
  els = document.querySelectorAll('.fade-in');
  
const hamburgerClose = () => {
  document.body.classList.remove('is-active');
  menuLabel.textContent = 'メニュー';
};

hamburger.addEventListener('click', () => {
  document.body.classList.toggle('is-active');
  if (document.body.classList.contains('is-active')) {
    menuLabel.textContent = '閉じる';
  } else {
    menuLabel.textContent = 'メニュー';
  }
});

overlay.addEventListener('click', hamburgerClose);

menulinks.forEach(link => {
  link.addEventListener('click', () => {
    if (document.body.classList.contains('is-active')) {
      hamburgerClose();
    }
  });
});


/**
 * スクロールフェードイン
 **/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
},{
  rootMargin: '0px 0px -20% 0px',
  threshold: 0
});
els.forEach(el => observer.observe(el));