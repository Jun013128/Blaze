const
  menulinks = document.querySelectorAll('.global-nav-link'),
  hamburger = document.querySelector('#hamburger'),
  overlay = document.querySelector('#overlay'),
  menuLabel = document.querySelector('#menulabel');
  
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
// TODO とりあえずフェードスライドはできたと思うけど、画像をどうするか確認する。
$('.mv-slider').slick({
  fade: true,
  speed: 1500,
  autoplaySpeed: 3000,
  arrows: false,
  autoplay: true,
  slidesToshow: 1,
  slidesToscroll: 1,
  infinite: true,
  dots: true,
});