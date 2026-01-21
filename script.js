/**
 * 共通 ハンバーガーメニュー
 **/

const
  menulinks = document.querySelectorAll('.global-nav-link'),
  hamburger = document.querySelector('#hamburger'),
  overlay = document.querySelector('#overlay'),
  menuLabel = document.querySelector('#menulabel'),
  els = document.querySelectorAll('.fade-in');
  loader = document.querySelector('.start');
  
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


window.addEventListener('load', () => {
  if (loader) {
    // 1. すでにアニメーションを見たかチェック
    if (!sessionStorage.getItem('visited')) {
      // --- 初めてのアクセス（アニメーションを実行） ---

      // 3.5秒後にフェードアウト
      setTimeout(() => {
        loader.classList.add('is-loaded');
        // 「見た」という記録を残す
        sessionStorage.setItem('visited', 'true');
      }, 3500);

    } else {
      // --- 2回目以降のアクセス（即座に非表示） ---

      // 待ち時間なしで、即座に非表示にする
      loader.style.opacity = '0';      // 透明にする
      loader.style.visibility = 'hidden'; // クリックできないようにする
      loader.style.transition = 'none'; // アニメーションを無効化
      loader.classList.add('is-loaded');
    }
  }
});
  
