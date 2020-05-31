"use strict";

$(document).ready(function () {
  svg4everybody({});
});
$(document).ready(function () {
  $('.callback-btn').each(function () {
    $(this).append('<span class="callback-btn__bezier"></span><span class="callback-btn__bezier"></span>');
  });
  $('.basket-prev__btn').each(function () {
    $(this).append('<span class="basket-prev__btn--bezier"></span><span class="basket-prev__btn--bezier"></span>');
  });
});
$('.basket-prev').hover(function () {
  $('.overlay').toggleClass('overlay--active');
});
$('li.js-submenu-catalog').hover(function () {
  $('.submenu-catalog').toggleClass('submenu-catalog--width');
});
$('.js-submenu-catalog').hover(function () {
  $('.overlay').toggleClass('overlay--active');
  $('.header__top').toggleClass('header__top--active');
});

var modal = function modal() {
  $('.search__link').click(function () {
    $('.search-modal').addClass('opend');
    $('.overlay').addClass('overlay--active');
    $('html').addClass('hidden');
  });
  $('.search-modal__close').click(function () {
    $('.search-modal').removeClass('opend');
    $('.overlay').removeClass('overlay--active');
    $('html').removeClass('hidden');
  });
  $('.overlay').click(function () {
    $('.search-modal').removeClass('opend');
    $('.overlay').removeClass('overlay--active');
    $('html').removeClass('hidden');
  });
  $('.modal-href').click(function () {
    var modalName = $(this).attr('show-modal');
    $('.modal.' + modalName).addClass('modal--active');
    $('.overlay').addClass('overlay--active');
    $('html').addClass('hidden');
    $('.overlay--active').click(function () {
      $('.modal.' + modalName).removeClass('modal--active');
      $('html').removeClass('hidden');
    });
    $('.modal-close').click(function () {
      $('.modal.' + modalName).removeClass('modal--active');
      $('html').removeClass('hidden');
      $('.overlay').removeClass('overlay--active');
    });
  });
};

modal();
'use strict';

function r(f) {
  /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f();
}

r(function () {
  if (!document.getElementsByClassName) {
    // Поддержка IE8
    var getElementsByClassName = function getElementsByClassName(node, classname) {
      var a = [];
      var re = new RegExp('(^| )' + classname + '( |$)');
      var els = node.getElementsByTagName("*");

      for (var i = 0, j = els.length; i < j; i++) {
        if (re.test(els[i].className)) a.push(els[i]);
      }

      return a;
    };

    var videos = getElementsByClassName(document.body, "youtube");
  } else {
    var videos = document.getElementsByClassName("youtube");
  }

  var nb_videos = videos.length;

  for (var i = 0; i < nb_videos; i++) {
    // Находим постер для видео, зная ID нашего видео
    videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)'; // Размещаем над постером кнопку Play, чтобы создать эффект плеера

    var play = document.createElement("div");
    play.setAttribute("class", "play");
    videos[i].appendChild(play);

    videos[i].onclick = function () {
      // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
      var iframe = document.createElement("iframe");
      var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
      if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
      iframe.setAttribute("src", iframe_url);
      iframe.setAttribute("frameborder", '0'); // Высота и ширина iFrame будет как у элемента-родителя

      iframe.style.width = this.style.width;
      iframe.style.height = this.style.height; // Заменяем начальное изображение (постер) на iFrame

      this.parentNode.replaceChild(iframe, this);
    };
  }
});

var sandwich = function sandwich() {
  $('.sandwich__open-btn').click(function () {
    $('.menu').addClass('opend');
    $('.menu-layer').addClass('menu-layer--active');
  });
  $('.menu-close').click(function () {
    $('.menu').removeClass('opend');
    $('.menu-outer').removeClass('opend');
    $('.menu-layer').removeClass('menu-layer--active');
    return false;
  });
  $('.sandwich .menu-layer').click(function () {
    $('.menu').toggleClass('opend');
    $(this).removeClass('menu-layer--active');
  });
  $('.menu-catalog__item--dropdown').click(function () {
    $(this).children(".menu-outer").addClass('opend');
  });
  $('.menu-outer__back').click(function () {
    $('.menu-outer').removeClass('opend');
    return false;
  });
};

sandwich();

if ($(window).width() < '768') {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    /*Если сделали скролл на 100px задаём новый класс для header*/

    if (height > 100) {
      $('header').addClass('header-fixed');
    } else {
      /*Если меньше 100px удаляем класс для header*/
      $('header').removeClass('header-fixed');
    }
  });
}

var select = function select() {
  var selectCurrent = document.querySelectorAll('.catalog-select__header'),
      selectItem = document.querySelectorAll('.catalog-select__item');
  selectCurrent.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.currentTarget.parentElement.classList.toggle('is-open');
    });
  });
  selectItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.currentTarget.closest('.catalog-select').querySelector('.catalog-select__current').innerHTML = e.currentTarget.innerHTML;
      e.currentTarget.closest('.catalog-select').classList.remove('is-open');
    });
  });
};

select();
$('.catalog-nav__mobile-link').click(function () {
  $(this).toggleClass('catalog-nav__mobile-link--active');
  $('.catalog-nav__list').toggleClass('catalog-nav__list--active');
});
$('.catalog-nav__item').click(function () {
  $(this).toggleClass('catalog-nav__item--active');
  $(this).children('.catalog-nav__sublist').toggleClass('catalog-nav__sublist--active');
});
$(".inputmask-tel").inputmask({
  "mask": "+7 (999) 999-9999"
});
var newest = new Swiper('.newest-container', {
  slidesPerView: 1,
  spaceBetween: 41,
  loop: true,
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 41
    },
    870: {
      slidesPerView: 3,
      spaceBetween: 41
    },
    1170: {
      slidesPerView: 4,
      spaceBetween: 41
    }
  },
  navigation: {
    nextEl: '.newest-button-next',
    prevEl: '.newest-button-prev'
  }
});
var reviews = new Swiper('.reviews-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    520: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev'
  }
});
var photo = new Swiper('.photo-container', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    520: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1020: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: '.photo-button-next',
    prevEl: '.photo-button-prev'
  }
});
var partners = new Swiper('.partners-container', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    520: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1020: {
      slidesPerView: 5,
      spaceBetween: 10
    }
  },
  navigation: {
    nextEl: '.partners-button-next',
    prevEl: '.partners-button-prev'
  }
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}