jQuery(document).ready(function ($) {

  new WOW().init();

  $(window).bind('resize', set_body_height);
  set_body_height();

  $('body').css('display', 'none');
  $('body').fadeIn(2000);
 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // $(window).scroll(function() {
  //   $(".parallax-mirror img").css({
  //     'opacity': 1 - (($(this).scrollTop()) / 500)
  //   });
  // });
  


});

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true
  });
});

function set_body_height() {

  if ($(window).height() > 620) {
    $('.hero').height(620);
  } else {
    $('.hero').height($(window).height());
  }
  $('#final-image').height($(window).height() / 2);
}
