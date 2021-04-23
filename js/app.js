'use strict';

const toggle = document.querySelector('.header__toggle');
const page = document.querySelector('.page');
const mobileNav = document.querySelector('.header__mobile');
const burger = document.querySelector('.burger');
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');

// + Dark mode
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    page.classList.add('dark');
    mobileNav.classList.add('dark');
    page.classList.remove('light');
    mobileNav.classList.remove('light');
  } else {
    page.classList.remove('dark');
    mobileNav.classList.remove('dark');
    page.classList.add('light');
    mobileNav.classList.add('light');
  }
});

// + Burger menu

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('header__active');
});