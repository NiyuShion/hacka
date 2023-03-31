var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15
  }
};

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = (slide.target + flkty.x) * -1/3;
    image.style.backgroundPosition = x + 'px';
  });
});

// Получаем элементы DOM
const menuToggle = document.querySelector('.menu-toggle');
const categories = document.querySelector('.categories');
const mobileMenu = document.querySelector('.mobile-menu');

// Обрабатываем клик по кнопке меню
menuToggle.addEventListener('click', function() {
  mobileMenu.classList.toggle('show');
  categories.classList.toggle('hide');
});

// Добавляем класс "hide" к категориям на мобильных устройствах
function checkWidth() {
  if (window.innerWidth < 768) {
    categories.classList.add('hide');
    menuToggle.style.display = 'block';
  } else {
    categories.classList.remove('hide');
    menuToggle.style.display = 'none';
    mobileMenu.classList.remove('show');
  }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);




