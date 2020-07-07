var writeLink = document.querySelector(".link-write");
var mapLink = document.querySelector(".link-map");

var writePopup = document.querySelector(".modal-feedback");
var writeClose = writePopup.querySelector(".modal-close");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
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

var cart = document.querySelector(".modal-info"),
  button_buy = Array.prototype.slice.call(document.querySelectorAll(".link-buy")),
  onClickButton = function(e) {
    e.preventDefault(), document.querySelector(".modal-info").classList.add("modal-show")
  };

button_buy.forEach(function(e) {
  e.addEventListener("click", onClickButton)
}
);

var cart_close = document.querySelector(".modal-close"),
  buy_continue = document.querySelector(".continue");

cart_close.addEventListener("click", function(e) {
  e.preventDefault(), cart.classList.remove("modal-show")
}), buy_continue.addEventListener("click", function(e) {
  e.preventDefault(), cart.classList.remove("modal-show")
}), window.addEventListener("keydown", function(e) {
  27 === e.keyCode && cart.classList.contains("modal-show") && cart.classList.remove("modal-show")
});