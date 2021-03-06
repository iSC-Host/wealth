'use strict';

var toggle = document.querySelector('.c-hamburger');
toggle.addEventListener('click', function(e) {
  e.preventDefault();
  if (this.classList.contains('is-active')) {
    document.body.classList.remove('menu-open');
    this.classList.remove('is-active');
  } else {
    document.body.classList.add('menu-open');
    this.classList.add('is-active');
  }
});