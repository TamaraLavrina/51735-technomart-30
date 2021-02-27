const lostway = document.querySelector(".lost-way-button");
const lostwayPopup = document.querySelector(".modal-write-us");
const lostwayClose = lostwayPopup.querySelector(".modal-close");
const lostwayForm = lostwayPopup.querySelector(".write-us-form");
const lostwayName = lostwayForm.querySelector(".lostway-name");
const lostwayEmail = lostwayForm.querySelector(".lostway-email");

lostway.addEventListener("click", function (evt) {
  evt.preventDefault();
  lostwayPopup.classList.add("modal-show")
  lostwayName.focus();
});

lostwayClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  lostwayPopup.classList.remove("modal-show");
});

lostwayForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

lostwayForm.addEventListener("submit", function (evt) {
  if (!lostwayName.value || !lostwayEmail.value) {
    evt.preventDefault();
  }
});
