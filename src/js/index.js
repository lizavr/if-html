const programName = 'Hello, World!';

console.log(programName);
import Swiper from 'swiper/bundle';

var swiper = new Swiper('.swiper', {
  slidesPerView: 4,
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
    1000: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
    1300: { slidesPerView: 4 },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}
