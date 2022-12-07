import Swiper from 'swiper/bundle';

var swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    752: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
    1300: { slidesPerView: 4 },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 100 ? 'vertical' : 'horizontal';

  return direction;
}
