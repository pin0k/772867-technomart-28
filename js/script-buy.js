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

cart_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  cart.classList.remove("modal-show");
})

buy_continue.addEventListener("click", function(evt) {
  evt.preventDefault();
  cart.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cart.classList.contains("modal-show")) {
      evt.preventDefault();
      cart.classList.remove("modal-show");
    }
  }
});