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
$('li#js-submenu-catalog').hover(function () {
  $('.submenu-catalog').toggleClass('submenu-catalog--width');
});
$('.main-nav__item--catalog').hover(function () {
  $('.overlay').toggleClass('overlay--active');
  $('.header__top').toggleClass('header__top--active');
});

var searchModal = function searchModal() {
  $('.search__link').click(function () {
    $('.search-modal').addClass('opend');
  });
  $('.search-modal__close').click(function () {
    $('.search-modal').removeClass('opend');
  });
};

searchModal();

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

sandwich(); // Полифилы
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