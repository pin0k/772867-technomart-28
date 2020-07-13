var writeLink = document.querySelector(".link-write");
var writePopup = document.querySelector(".modal-feedback");
var writeClose = writePopup.querySelector(".modal-close");
var feedbackForm = writePopup.querySelector(".feedback-form");

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
  userNameButton.focus();
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writePopup.classList.remove("modal-show");
    }
  }
});