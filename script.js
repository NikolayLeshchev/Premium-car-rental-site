document.getElementById("main-action").onclick = function () {
  document.getElementById("car").scrollIntoView({ behavior: "smooth" });
};

var buttuns = document.getElementsByClassName("car-button");
for (var i = 0; i < buttuns.length; i++) {
  buttuns[i].onclick = function () {
    document.getElementById("price").scrollIntoView({ behavior: "smooth" });
  };
}

document.getElementById("price-action").onclick = function () {
  if (document.getElementById("name").value === "") {
    alert("Заполните поле имя!");
  } else if (document.getElementById("phone").value === "") {
    alert("Заполните поле телефон!");
  } else if (document.getElementById("car-choise").value === "") {
    alert("Заполните поле автомобиль!");
  } else {
    alert("Спасибо за заявку. Мы свяжемся с Вами в ближайшее время");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let layer = document.querySelector(".price-image");
  document.addEventListener("mousemove", (event) => {
    layer.style.transform =
      "translate3d(" +
      (event.clientX * 0.2) / 12 +
      "px," +
      (event.clientY * 0.2) / 8 +
      "px,0px)";
  });

  const elem = document.querySelector(".main");
  document.addEventListener("scroll", () => {
    elem.style.backgroundPositionX = "0" + 0.25 * window.pageYOffset + "px";
  });
});
