document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("#banner nav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  window.addEventListener("click", function () {
    var headerM = document.querySelector("#banner nav");
    headerM.classList.toggle("movil-nav");
  });

  function switchStyle() {
    if (document.getElementById("styleSwitch").checked) {
      document.getElementById("gallery").classList.add("custom");
      document.getElementById("exampleModal").classList.add("custom");
    } else {
      document.getElementById("gallery").classList.remove("custom");
      document.getElementById("exampleModal").classList.remove("custom");
    }
  }
});
