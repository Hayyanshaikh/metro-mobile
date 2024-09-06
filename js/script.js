$(function() {
  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');
});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 1200 ? menu.addClass('offcanvas offcanvas-end') : menu.removeClass('offcanvas offcanvas-start');
}