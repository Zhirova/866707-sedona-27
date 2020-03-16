var link = document.querySelector(".brown-button-big");
var form = document.querySelector(".search-form");

var checkin = form.querySelector("[name=arrival-date]");
var checkout = form.querySelector("[name=departure-date]");
var adult = form.querySelector("[name=adult]");
var child = form.querySelector("[name=child]");

link.addEventListener("click", function (evt) {          //Скрытие формы
  form.classList.toggle("form-hide");
})

form.addEventListener("submit", function (evt) {         //отправка формы
  if (!checkin.value || !checkout.value || !adult.value || !child.value) {
  evt.preventDefault();
  console.log("Заполните все поля!");
  } else {
      localStorage.setItem("adult", adult.value);            //взрослые и дети в  localStorage
      localStorage.setItem("child", child.value);
    }
});
