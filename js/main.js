jQuery(document).ready(function($) {

 new WOW().init();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true
  });
});

function set_body_height() { // set body height = window height
  $('.hero').height($(window).height());
}
$(document).ready(function() {
  $(window).bind('resize', set_body_height);
  set_body_height();
});

