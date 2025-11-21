/**
 * トップページのフェードスライド
 **/ 

$('#mv-slider').slick({
  fade: true,
  speed: 1500,
  autoplaySpeed: 4000,
  arrows: false,
  autoplay: true,
  slidesToshow: 1,
  slidesToscroll: 1,
  infinite: true,
  dots: true,
});