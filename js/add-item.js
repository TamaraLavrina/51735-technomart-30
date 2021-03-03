
const buyButtons = document.querySelectorAll(".button-card-buy");
const cartPopup = document.querySelector(".modal-catalog-cart");
const cartClose = cartPopup.querySelector(".modal-close");
const continueClose = cartPopup.querySelector(".stay-here");

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

