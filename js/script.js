$(function() {
  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');
});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-end') : menu.removeClass('offcanvas offcanvas-start');
}