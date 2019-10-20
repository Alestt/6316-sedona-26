var search = document.querySelector(".search__button");
var modal = document.querySelector(".search__form");

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("search__form--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
     if (modal.classList.contains("search__form--show")) {
       modal.classList.remove("search__form--show");
    }
  }
});
