var link = document.querySelector(".brown-button-big");
var form = document.querySelector(".search-form");

var checkIn = form.querySelector("[name=arrival-date]");
var checkOut = form.querySelector("[name=departure-date]");
var adult = form.querySelector("[name=adult]");
var child = form.querySelector("[name=child]");

var isStorageSupport = true;
var storageAdult = "";
var storageChild = "";

try {
  storageAdult = localStorage.getItem("adult");
  storageChild = localStorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
}

form.classList.add("form-hide");                         //Скрытие формы

link.addEventListener("click", function (evt) {          //Переключение класса
  evt.preventDefault();
  form.classList.toggle("form-hide");
  if (storageAdult || storageChild) {
    child.value = storageChild;
    adult.value = storageAdult;
  }
});

form.addEventListener("submit", function (evt) {         //отправка формы
  if (!checkIn.value || !checkOut.value || !adult.value || !child.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  } else {
      if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);            //взрослые и дети в  localStorage
      localStorage.setItem("child", child.value);
      }
    }
});
