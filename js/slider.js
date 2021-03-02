const buttonChange = document.querySelector('.gallery-button-next');
const slideFirst = document.querySelector('.slide-first');
const slideSec = document.querySelector('.slide-second');


buttonChange.onclick = function() {
  slideSec.classList.add('slide-current');
  slideFirst.classList.remove('slide-current');

}
