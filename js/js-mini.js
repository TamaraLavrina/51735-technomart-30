const lostway = document.querySelector(".lost-way-button");
const lostwayPopup = document.querySelector(".modal-write-us");
const lostwayClose = lostwayPopup.querySelector(".modal-close");
const lostwayForm = lostwayPopup.querySelector(".write-us-form");
const lostwayName = lostwayForm.querySelector(".lostway-name");
const lostwayEmail = lostwayForm.querySelector(".lostway-email");
const goNext = document.querySelector('.gallery-button-next');
const goBack = document.querySelector('.gallery-button-back');
const slideFirst = document.querySelector('.slide-first');
const slideSec = document.querySelector('.slide-second');
const slide = document.querySelector('.slide-item');
const buyButtons = document.querySelectorAll(".button-card-buy");
const cartPopup = document.querySelector(".modal-catalog-cart");
const cartClose = cartPopup.querySelector(".modal-close");
const continueClose = cartPopup.querySelector(".stay-here");
const mapLink = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

lostway.addEventListener("click", function (evt) {
  evt.preventDefault();
  lostwayPopup.classList.add("modal-show")
  if (storage) {
    lostwayName.value = storage;
    lostwayEmail.focus();
  } else {
  lostwayName.focus();
  }
});

lostwayClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  lostwayPopup.classList.remove("modal-show");
  lostwayPopup.classList.remove("modal-error");
});

lostwayForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

lostwayForm.addEventListener("submit", function (evt) {
  if (!lostwayName.value || !lostwayEmail.value) {
    evt.preventDefault();
    lostwayPopup.classList.remove("modal-error");
    lostwayPopup.offsetWidth = lostwayPopup.offsetWidth;
    lostwayPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login", lostwayName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (lostwayPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      lostwayPopup.classList.remove("modal-show");
      lostwayPopup.classList.remove("modal-error");
    }
  }
});

buyButtons.forEach((buyButton) =>  {buyButton.addEventListener("click", function(evt){
  evt.preventDefault();
  cartPopup.classList.add("modal-show");
  })
})

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

continueClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});




mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});


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




