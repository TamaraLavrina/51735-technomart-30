const goNext = document.querySelector('.gallery-button-next');
const goBack = document.querySelector('.gallery-button-back');
const slideFirst = document.querySelector('.slide-first');
const slideSec = document.querySelector('.slide-second');
const slide = document.querySelector('.slide-item');
const element = [slideFirst, slideSec];


goNext.addEventListener("click", function(evt){
  evt.preventDefault();
  if (slideFirst.classList.contains("slide-current")){
   slideFirst.classList.remove('slide-current');
  slideSec.classList.add('slide-current');
  }
  else {
    slideSec.classList.remove('slide-current');
    slideFirst.classList.add('slide-current');
  }
}
)


goBack.addEventListener("click", function(evt){
  evt.preventDefault();
  if (slideSec.classList.contains("slide-current")){
    slideSec.classList.remove('slide-current');
    slideFirst.classList.add('slide-current');
  }

  else {
    slideFirst.classList.remove('slide-current');
  slideSec.classList.add('slide-current');
  }

  }
)




