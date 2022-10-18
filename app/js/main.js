$(function(){

  $('.reviews-slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt="" /></button>',
   //centerMode:true,
    infinite: true,
  //  variableWidth: true,
     slidesToShow: 4,
    slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 1441,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 1191,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 890,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     },
      {
        breakpoint:615,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      },
    ]
  });

  window.onscroll = function () { headerFixedFunction() };

  // Get the header
  var header = document.getElementById("header-top");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function headerFixedFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    }
    else {
      header.classList.remove("sticky");
    }
  }


  $(".menu-btn").on("click", function () {
    $('.mobile-menu').toggleClass("active");
  });
  
  $(".menu__link").on("click", function () {
    if (!($(this).hasClass('active'))) {
      $('.menu__link').removeClass('active');
      $(this).addClass('active');
      $('.mobile-menu').removeClass('active');
    }
  });

  $('.cakes__items').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt="" /></button>',
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 735,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,          
          
        }
      },
      {
        breakpoint:501,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            arrows: false
        }
      }

    ]
  });

  $('.viewed__items').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt="" /></button>',
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false

        }
      },
    ]
  });

  $('.product__add').on("click", function () {
    let productAmount = $(".cart-amount").data("amount");
    productAmount += 1;
    $('.cart-amount').html(productAmount);
    $(".cart-amount").data("amount", productAmount)
  })
  let productAmount = $(".cart-amount").data("amount");
  $('.cart-amount').html(productAmount);  

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="" /></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="" /></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.on('click', function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.on('click', function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    Price();
  });


  $('.quantity-button').on('click', function () {

    let cakeAmount = $(this).parent().prev().val();
    let productPrice = $(this).parent().parent().parent().next().children().data('cakes');

    let price = cakeAmount * productPrice;

    $(this).parent().parent().parent().next().children().html(price + " ");
    if ($(this).hasClass('quantity-up'))    
      productAmount += 1;
    else
      {productAmount -= 1;
        if (cakeAmount = 1)
          productAmount= cakeAmount+1; } 
    $('.cart-amount').html(productAmount);
    $(".cart-amount").data("amount", productAmount);
    Price();
  });
  Price();
  $(".cart__item-remove").on("click", function (){
    $(this).parent().remove();
    let productAmount = $(".cart-amount").data("amount");
    let removedAmount = $(this).siblings().children().children().val();
    productAmount -= removedAmount;
    $('.cart-amount').html(productAmount);
    $(".cart-amount").data("amount", productAmount);
    Price();

  })
  function Price() {
    var num = 0;
    $('.quantity-button').each(function () {
      if ($(this).hasClass("quantity-up")) {
        var a = $(this).parent().parent().parent().next().children().text();
        num += Number(a);
      }
    });
    $('#total').html(num +'₽');
  }

  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);

  $('#date').datepicker({
    minDate: 0,
    beforeShow: function (input, inst) {
      setTimeout(function () {
        inst.dpDiv.outerWidth($('#date').outerWidth());
      }, 0);
    }
  });
  $('.hasDatepicker').on('click', function () {
    $(this).outerWidth($('#date').outerWidth());
  });

  $(".lazy").Lazy();
})

