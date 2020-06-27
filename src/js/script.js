$(document).ready(function(){
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 300,
        adaptiveHeight: false,
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png" alt="right"></button>'
      });
  });