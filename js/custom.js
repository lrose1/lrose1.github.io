/* jQuery Preloader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* jQuery to collapse the navbar on scroll
    -----------------------------------------------*/
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });


  /* Parallax section  (desktop only)
     Skipped on phones/tablets: scroll-driven parallax + fixed
     backgrounds are janky or unsupported on mobile browsers.
    -----------------------------------------------*/
  function initParallax() {
    $('#work').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.2);
  }
  if (window.matchMedia('(min-width: 1025px)').matches) {
    initParallax();
  }


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

});
