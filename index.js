const imgs = document.querySelectorAll(".img_small_slippers");
const bigPhoto = document.querySelector("#bigPhoto");

imgs.forEach(function (img) {
  img.addEventListener("click", function () {
    if (img.classList.contains("active") == false) {
      img.classList.add("active");
      bigPhoto.src = img.src;

      imgs.forEach((e) => {
        if (e.src !== img.src && e.classList.contains("active") == true) {
          +e.classList.remove("active");
        }
      });
    }
  });
});
