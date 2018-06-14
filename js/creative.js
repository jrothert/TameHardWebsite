
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Ladet Bild #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">Das Bild #%curr%</a> konnte nicht geladen werden.'
    }
  });

})(jQuery); // End of use strict

var metz = document.getElementById('divMetz');
var nussbaumer = document.getElementById('divNussbaumer');
var rothert = document.getElementById('divRothert');

metz.addEventListener("mouseover", function (event) {
    showVideo('Metz');
}, false);
metz.addEventListener("mouseout", function (event) {
    showPic('Metz');
}, false);
nussbaumer.addEventListener("mouseover", function (event) {
    showVideo('Nussbaumer');
}, false);
nussbaumer.addEventListener("mouseout", function (event) {
    showPic('Nussbaumer');
}, false);
rothert.addEventListener("mouseover", function (event) {
    showVideo('Rothert');
}, false);
rothert.addEventListener("mouseout", function (event) {
    showPic('Rothert');
}, false);


function showVideo(name) {
    var video = document.getElementById('video' + name);
    var pic = document.getElementById('pic' + name);
    video.style.display = "block";
    pic.style.display = "none";
}

function showPic(name) {
    var video = document.getElementById('video' + name);
    var pic = document.getElementById('pic' + name);
    video.style.display = "none";
    pic.style.display = "block";
}

[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});
