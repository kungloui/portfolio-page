$(document).ready(function(){



});
$(window).scroll(function(){
  if($(this).scrollTop()>0)
    {
      $('.landing-headings').fadeOut();
    }
    else{
      $('.landing-headings').fadeIn();
    }
  });


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
//              var scale = elementDistanceFromBottom / elementHeight

//              if (scale < 0) {
//                $(this).css({'transform':'scale(0)','opacity':'0'});
//              } else if (scale > 1) {
//                $(this).css({'transform':'scale(1)','opacity':'1'});
//              } else {
//                $(this).css({'transform':'scale(' + scale + ')','opacity':scale});
//              }
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
