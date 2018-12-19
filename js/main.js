(function($, undefined){

  $(document).ready(function () {

    // mobile menu links
    $('.main-menu > a').on('click', function(){
      $('#check-menu').trigger('click');
    });

    // modal
    $('.button-callback').on('click', function () {
      $('body').css('overflow', 'hidden');
      $('#modal-callback').removeClass('modal_hidden');
      $('#modal-callback').addClass('modal_visible');
    });
    $('.modal__close').on('click', function () {
      $('body').css('overflow', '');
      $('.modal').removeClass('modal_visible');
      $('.modal').addClass('modal_hidden');
    });

    // mask
    $("#tel").mask("+7-999-99-99-999");
    $("#tel_modal").mask("+7-999-99-99-999");

    // WOW
    new WOW().init();

    // slider clients
    $('.slider-clients').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '<div class="arrow arrow_left"><img src="img/arrow-left.png" alt="left-arrow"></div>',
      nextArrow: '<div class="arrow arrow_right"><img src="img/arrow-right.png" alt="right-arrow"></div>',
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
        {
          breakpoint: 830,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // slider projects
    $('.slider-projects').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="arrow projects-arrow_left"><img src="img/arrow-left.png" alt="left-arrow"></div>',
      nextArrow: '<div class="arrow projects-arrow_right"><img src="img/arrow-right.png" alt="right-arrow"></div>'
    });

    // form
    $('form').submit(function (event) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function () {
        $(this).find("input").val("");
        swal({
          title: "Спасибо! Ваша заявка принята.",
          text: "Мы свяжемся с вами в ближайшее время.",
          icon: "success",
          button: "Продолжить!",
        });
        $('form').trigger("reset");
      });
      return false;
    });

    // ym
    document.querySelector('#request').addEventListener('click', function (){
      ym(51629252, 'reachGoal', 'request'); return true;
    });
    document.querySelector('#callback').addEventListener('click', function (){
      ym(51629252, 'reachGoal', 'callback'); return true;
    })

  });

})(jQuery);