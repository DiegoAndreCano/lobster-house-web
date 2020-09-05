document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("#banner nav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  window.addEventListener("click", function () {
    var headerM = document.querySelector("#banner nav");
    headerM.classList.toggle("movil-nav");
  });
});
