$(function() {
  convertToOffcanvas();
  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');

  var swiper = new Swiper(".product_slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".deal_section .swiper-button-next",
      prevEl: ".deal_section .swiper-button-prev",
    },
  });
  var swiper = new Swiper(".benifit_product_slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".benefits .swiper-button-next",
      prevEl: ".benefits .swiper-button-prev",
    },
  });

  var swiper = new Swiper('.page-3-slider', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 1200 ? menu.addClass('offcanvas offcanvas-end') : menu.removeClass('offcanvas offcanvas-start');
}