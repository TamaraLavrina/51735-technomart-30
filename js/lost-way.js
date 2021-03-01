const lostway = document.querySelector(".lost-way-button");
const lostwayPopup = document.querySelector(".modal-write-us");
const lostwayClose = lostwayPopup.querySelector(".modal-close");
const lostwayForm = lostwayPopup.querySelector(".write-us-form");
const lostwayName = lostwayForm.querySelector(".lostway-name");
const lostwayEmail = lostwayForm.querySelector(".lostway-email");

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
