$(document).ready(function() {
  // --------------------------------
  // WINDOW HEIGHT TESTING
  // --------------------------------
  $(window).on('scroll', function() {
    console.log("Window Height: ", $(window).height());
    console.log("Document Height: ", $(document).height());
    console.log("ScrollTop: ", $(window).scrollTop());
  });
  
  
  // --------------------------------
  // MORPHING HEADER TEXT
  // --------------------------------
  $("#js-rotating").Morphext({
    animation: "flipInX",
    separator: "|",
    speed: 2000
  });
  
  
  // --------------------------------
  // NAVBAR COLOR CHANGE ON SCROLL
  // --------------------------------
  var checkScroll = function() {
    var scroll = $(window).scrollTop();
    var lower = 100; var upper = 200;

    if (scroll > lower && scroll <= upper) {
      $('.navbar').addClass('scroll');
    } else if (scroll > upper){
      $('.navbar').addClass('scroll')
    } else {
      $('.navbar').removeClass('scroll');
    }
  };
    
  checkScroll();
  
  $(window).scroll(checkScroll);
  
  
  // --------------------------------
  // NAVLINKS EASING TO SECTIONS
  // --------------------------------
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 84)
        }, 1500, "easeInOutExpo");
        return false;
      }
    }
  });
  
  
  // --------------------------------
  // ABOUT POEM ANIMATION
  // --------------------------------
  var animateAboutPoem = function() {
    var revealLine = function() {
      $(this).fadeIn(9000);
    };

    $.each($('p.poem-line'), revealLine);
  };
  
  var scrollAboutDistance = $('#about .poem').offset().top - $(window).height() + 100;

  $(window).scroll(function(event) {
    if ($(window).scrollTop() >= scrollAboutDistance)  {
      animateAboutPoem();
    }
  });
  
  
  // --------------------------------
  // TYPED.JS
  // --------------------------------
  var scrollTypedDistance = $('#skills-description').offset().top - $(window).height() + 400;
  var animateTypedString = false;
  $(window).scroll(function(event) {
    if ($(window).scrollTop() >= scrollTypedDistance && !animateTypedString)  {
      var options = {
        strings: ["^1000I don't know who you are or what you want^300.^300.^300.^300but I can tell you that I have acquired a very particular set of skills over a short span of time.^1000 While I'm always experimenting with new languages,^300 frameworks,^300 and libraries to better my arsenal,^500 the array of icons below are my primary weapons of mass creation."],
        typeSpeed: 30
      }
      var typed = new Typed('#skills-description', options);
      animateTypedString = true;
    }
  });
  
  
  // --------------------------------
  // SKILLS ICONS TOOLTIP
  // --------------------------------
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
  

});