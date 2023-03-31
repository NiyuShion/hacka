import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';

function MyCarousel() {
  const carouselRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const options = {
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

    const flkty = new Flickity(carouselRef.current, options);

    function handleScroll() {
      flkty.slides.forEach(function (slide, i) {
        var image = slidesRef.current[i];
        var x = (slide.target + flkty.x) * -1/3;
        image.style.backgroundPosition = x + 'px';
      });
    }

    flkty.on('scroll', handleScroll);

    return () => {
      flkty.off('scroll', handleScroll);
      flkty.destroy();
    }
  }, []);

  return (
    <div className="carousel" data-carousel ref={carouselRef}>
      {slides.map((slide, i) => (
        <div className="carousel-cell" key={i} ref={el => slidesRef.current[i] = el}>
          {   <div class="hero-slider" data-carousel>
	<div class="carousel-cell" style="background-image: url(img/img-1.jpg);">
		<div class="overlay"></div>
		<div class="inner">
			<h3 class="subtitle">Экология</h3>
			<h2 class="title">Как часть нашей жизни</h2>
			<a href="#" class="btn">Подробнее</a>
		</div>
	</div>

	<div class="carousel-cell" style="background-image: url(img/img-2.jpg);">
		<div class="overlay"></div>
		<div class="inner">
			<h3 class="subtitle">экология</h3>
			<h2 class="title">это ответственность каждого из нас</h2>
			<a href="#" class="btn">Подробнее</a>
		</div>
	</div>

	<div class="carousel-cell" style="background-image: url(img/img-3.jpg);">
		<div class="overlay"></div>
		<div class="inner">
			<h3 class="subtitle">экология</h3>
			<h2 class="title">то, чего мы должны достичь</h2>
			<a href="#" class="btn">Подробнее</a>
		</div>
	</div>
</div>}
        </div>
      ))}
    </div>
  );
}
