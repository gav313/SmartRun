  var slider = tns({
    container: '.slider__inner',
    items: 1,
    slideBy: '1',
    autoplay: false,
    controls: false,
    nav: true,
    navPosition: "bottom",
    navAsThumbnails: true,
    touch: true
  });

  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };
  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };


  (function($) {
    $(function() {
    
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault ();
        $('.catalog-item__info').eq(i).toggleClass('catalog-item__info_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
})
(jQuery);