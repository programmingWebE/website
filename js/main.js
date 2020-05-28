$(document).ready(function() {

  $('.mobile-wrap').on('click', function() {
    $('.line-burger').toggleClass('line-active');
    $('.main-header__box').toggleClass('main-header__box--active');
    $('.main-header__list').slideToggle();
  });

  $(window).resize(function() {
    if ($(window).width() >= 650) {
      $('.main-header__list').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }
  });

  $('.main-header__button button').on('click', function(e) {
    $('.main-header__input').trigger('focus');
    $('.main-header__search').addClass('main-header__search-active');
  });

  $('html').on('click', function(e) {
    if (!$(e.target).is('.main-header__button button, .main-header__input, main-header__search-wrap, main-header__search-wrap, main-header__search-btn')) {
      $('.main-header__search').removeClass('main-header__search-active');
    }
  });

  $('.video__item--image').on('click', function() {
    $('.overlay-video').addClass('overlay-active');
    var video = $(this).attr('data-video');
    $('.inner__video').append($('<iframe>', {
      src: video,
      on: {
        load: function() {
          $('.overlay-video').addClass('overlay-active');
        }
      }
    }))
  });


  $(".pay__box").click(function() {
    $(".pay__box").removeClass("pay__box--active").eq($(this).index()).addClass("pay__box--active");

  });


  $('.overlay-close').on('click', function() {
    $('.overlay-video').removeClass('overlay-active');
    $('.inner__video iframe').remove();
  });


  function validate(input, length, regExp, error, phone) {

    $(input).on('blur keyup', function() {
      var value = $(this).val();
      var that = $(this);

      regExp = regExp == '' ? /./ : regExp;

      if (phone === true) {
        bool_reg = !regExp.test(value);
      } else {
        bool_reg = regExp.test(value);
      }

      if (value.length > length && value !== '' && bool_reg) {
        that.removeClass('form-fail').addClass('form-done');
        $(error).slideUp();
      } else {
        that.removeClass('form-done').addClass('form-fail');
        $(error).slideDown();
      }
    });

  }

  // деакцивация кнопки если есть поле с ошибкой

  function disBtn(input, btn) {
    var input = $(input);
    input.on('blur keyup', function() {

      if (input.hasClass('form-fail')) {
        $(btn).attr('disabled', 'disabled');
      } else {
        $(btn).removeAttr('disabled');
      }

    });

  }

  // для проверки при нажатии

  function valClick(input, length, regExp, error, btn, phone) {
    var value = $(input).val();

    regExp = regExp == '' ? /./ : regExp;

    if (phone === true) {
      bool_reg = regExp.test(value);
    } else {
      bool_reg = !regExp.test(value);
    }

    if (value.length < length && value === '' && bool_reg) {
      $(input).addClass('form-fail');
      $(error).slideDown();
    }
  }

  //  деакцивация кнопки при нажатии

  function disBtnClick(input, btn) {
    var input = $(input);

    if (input.hasClass('form-fail')) {
      $(btn).attr('disabled', 'disabled');
      return false;
    } else {
      return true;
    }

  }

  function validateCheck(input) {
    $(input).on('change', function() {

      var check = $(this).prop('checked');
      if (check) {
        $('button').prop('disabled', false);
      } else {
        $('button').prop('disabled', true);
      }
    });
  }

  $('input[type="tel"]').mask("+38 (999) 999-99-99");

  var regName = /^[a-zA-Zа-яА-ЯёЁ]+/;
  var regEmail = /[-.\w]+@[-.\w]+\.[-.\w]+/i;
  var regPhone = /[_]/i;
  var regNumber = /\d+/;

  // пример использования
  validate('#c_name', 1, regName, '.contacts__fail-name');
  validate('#c_phone', 1, regPhone, '.contacts__fail-phone', true);
  disBtn('#c_name, #c_phone', '.contacts__btn');

  validate('#r_phone', 1, regPhone, '.request__fail-phone', true);
  validate('#r_email', 1, regEmail, '.request__fail-email');
  validate('#r_surname', 1, regName, '.request__fail-surname');
  validate('#r_name', 1, regName, '.request__fail-name');
  validate('#r_patronymic', 1, regName, '.request__fail-patronymic');
  validate('#r_ipn', 1, regName, '.request__fail-ipn');
  validate('#r_trustee-phone', 1, regPhone, '.request__fail-trustee-phone');
  validate('#r_trustee-fio', 1, regName, '.request__fail-trustee-fio');
  validate('#r_place', 1, regName, '.request__fail-place');
  validate('#r_income', 1, regNumber, '.request__fail-income');
  validate('#r_costs', 1, regNumber, '.request__fail-costs');

  validateCheck('#req_offer');

  disBtn('#r_email, #r_email, #r_surname, #r_name, #r_patronymic, #r_ipn, #r_trustee-phone, #r_trustee-fio, #r_place, #r_income, #r_costs, #req_offer', '.request__btn');




   var planSlider = $('.plan__wrap.owl-carousel');
  planSlider.owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    navText: '',
    responsive: {
      0: {
        items: 1,
      },
      781: {
        items: 2,
      },
      1051: {
        items: 3,
      },

    },
    //mouseDrag: false,
    //touchDrag: false
  });

    var partnersSlider = $('.partners__wrap.owl-carousel');
  partnersSlider.owlCarousel({
    dots: true,
    nav: true,
    loop: true,
    navText: '',
    responsive: {
      0: {
        items: 1,
      },
      781: {
        items: 2,
      },
      1051: {
        items: 3,
      },

    },
    //mouseDrag: false,
    //touchDrag: false
  });


   var reviewsSlider = $('.reviews__wrap.owl-carousel');
  reviewsSlider.owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    navText: '',
    margin: 40,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      781: {
        items: 2,
      },
      961: {
        items: 3,
      },

    },
    //mouseDrag: false,
    //touchDrag: false
  });

  $('input, textarea').on('focus', function() {
        $(this).prev().addClass('label-active');
    });

    $('input, textarea').on('blur', function() {
        if($(this).val() == '') {
            $(this).prev().removeClass('label-active');
        }
    });

});