// Configuration for TMDB
// To se the latest configuration fetch it from https://api-content.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

import jQuery from '../node_modules/jquery/dist/jquery.min.js';
import  '../node_modules/slick-carousel/slick/slick.min.js';
import '../node_modules/slick-carousel/slick/slick.js';
import 'slick-carousel';

window.$ = window.jQuery = jQuery;
//window.$ = window.jQuery = require('jquery');

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4acab064360358f6bbe8f0179d5a14e3';

// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add('rmdb-header-collapse')
  } else {
    document.getElementById("navbar").classList.remove('rmdb-header-collapse')
  }
}