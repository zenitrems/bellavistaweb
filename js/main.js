$('#nav-toggle').on('click', function () {
  this.classList.toggle('active')
})
$('#nav-toggle').click(function () {
  $('nav ul').toggle()
})


$(document).ready(function () {
  $('.slick-slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


// Custom carousel nav
jQuery(function ($) {
  $('.carousel-prev').click(function () {
    $(this).parent().find('.slick-slider').slick('slickPrev');
  });
  $('.carousel-next').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.slick-slider').slick('slickNext');
  });
});


// Back to top button
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
  }, 800);
  return false;
});