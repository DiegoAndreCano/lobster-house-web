document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("#banner nav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  window.addEventListener("click", function () {
    var headerM = document.querySelector("#banner nav");
    headerM.classList.toggle("movil-nav");
  });
  // create references to the modal...
  var modal = document.getElementById("myModal");
  // to all images -- note I'm using a class!
  var images = document.getElementsByClassName("item");
  // the image in the modal
  var modalImg = document.getElementById("img01");
  // and the caption in the modal
  var captionText = document.getElementById("caption");

  // Go through all of the images with our custom class
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function (evt) {
      console.log(evt);
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
  }

  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("modal")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };
  span2.onclick = function () {
    modal.style.display = "none";
  };
});
