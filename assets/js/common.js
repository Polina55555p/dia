"use strict"

$(function(){
  $('#phone').mask("+7 999 999 9999");
});




$(document).ready(function() {
    $('.slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: false,
      responsive: [
      {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
      }
    },
        ]
    });
  });

$(document).ready(function() {
    $('.slider-price').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      responsive: [
      {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,

      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
      }
    },
        ]
    });
  });

$(document).ready(function() {
    $('.slider-partners').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      responsive: [
      {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 400,
      settings: {
        dots: true,
        slidesToShow: 1,
        arrows: false,
      }
    },
        ]
    });
  });