$(document).ready(function() {
  // function is_touch_device() {
  //   return 'ontouchstart' in window;        // works on most browsers
  //       // || navigator.maxTouchPoints;       // works on IE10/11 and Surface
  // }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    $('html').addClass('touch');
  }

  $('.menu-icon').click(function() {
    $('.menu-icon').fadeOut(500);
    $('.nav-cover').fadeIn(500);
  });

  $('.menu-close').click(function() {
    $('.menu-icon').fadeIn(500);
    $('.nav-cover').fadeOut(500, function() {
      $('.nav-cover').hide();
    });
  });

  $('.interior-image').each(function () {
    $(this).fadeTo('slow', 1);
  });

  if ( $('#selector').length ) {
    $('.hero').unslider({
      animation: 'fade',
      arrows: false,
      autoplay: true,
      delay: 5000,
      nav: false
    });
  }
});

$(window).on('load', function() {
  $('.interiors .content li').each(function () {
    $(this).fadeTo('slow', 1);
  });
});
