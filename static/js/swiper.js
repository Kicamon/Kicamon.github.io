let start = false;
let init = function () {
	if (!start) {
		$('.swiper').append(`<img class="swiper-img"src="/static/images/acts/rec/1.jpg" alt="1">
        <img class="swiper-img"src="/static/images/acts/rec/2.png" alt="2">
		<img class="swiper-img"src="/static/images/acts/rec/3.jpg" alt="3">`);
		start = true;
	}
}

init();

const slides = document.querySelectorAll('.swiper-img');
let activeSlide = 0;
const body = document.body;

let change_img = function () {
	setInterval(function () {
		if (activeSlide == slides.length - 1) {
			activeSlide = 0;
		} else {
			activeSlide++;
		}
		setImg();
		setBg();
	}, 8000)
}

change_img();

let setImg = function () {
	slides.forEach(function (slide) {
		slide.classList.remove('active');
	});
	slides[activeSlide].classList.add('active');
}