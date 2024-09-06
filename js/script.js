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
});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 1200 ? menu.addClass('offcanvas offcanvas-end') : menu.removeClass('offcanvas offcanvas-start');
}