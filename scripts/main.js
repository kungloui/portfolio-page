var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width > 500) {
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 0) {
        $('.landing-headings').fadeOut();
      } else {
        $('.landing-headings').fadeIn();
      }
  });
}

$(document).ready(function(){
  function draw() {
    requestAnimationFrame(draw);
    // Drawing code goes here
    scrollEvent();
  }
  draw();
});

function scrollEvent(){
  if(!is_touch_device()){
    viewportTop = $(window).scrollTop();
    windowHeight = $(window).height();
    viewportBottom = windowHeight + viewportTop;
    if($(window).width())

    $('.about__row').each(function(){
      var fadeBuffer = 200
      var elementRect = this.getBoundingClientRect()
      var elementHeight = elementRect.height
      var elementBottom = elementRect.bottom
      var elementDistanceFromBottom = windowHeight - elementBottom + elementHeight - fadeBuffer
      if (elementDistanceFromBottom > 0) {
        this.classList.add('about__row--expanded')
      }
    });
  }
}

function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers
    || 'onmsgesturechange' in window; // works on ie10
}

jQuery(document).ready(function() {
  jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');

    e.preventDefault();
  });
});

$(function() {
    var nav = $('nav li a');
    console.log(nav)
    var heightThreshold = $("#contact").offset().top;
    console.log(heightThreshold)
    var heightThresholdEnd = $("#contact").offset().top +$("#contact").height() ;
    console.log(heightThresholdEnd)
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= heightThreshold && scroll <=  heightThresholdEnd ) {
            nav.addClass('dark');
        } else {
            nav.removeClass('dark');
        }
    });
})
