const goNext = document.querySelector('.gallery-button-next');
const goBack = document.querySelector('.gallery-button-back');
const slideFirst = document.querySelector('.slide-first');
const slideSec = document.querySelector('.slide-second');
const slide = document.querySelector('.slide-item');
const element = [slideFirst, slideSec];


goNext.addEventListener("click", function(evt){
  evt.preventDefault();
  for(let i=0; i <element.length; i++);
  element[i].classList.add('slide-current');
}
)



