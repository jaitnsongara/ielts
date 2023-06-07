jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww >= 576) {
        $('.immi-map-img').removeClass('img-fluid');
      } else if (ww < 576) {
        $('.immi-map-img').addClass('img-fluid');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    alterClass();
  });

  