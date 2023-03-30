// loader
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      $(".loader").remove();
    });
  }, 0);
});

// toggle drop-down
let myBtndrop = document.querySelector(".flex-profile-d");
let drop = document.querySelector(".my-drop-now");
myBtndrop.addEventListener("click", function (e) {
  drop.classList.toggle("show-drop");
  e.stopPropagation();
});
document.body.addEventListener("click", function () {
  drop.classList.remove("show-drop");
});
drop.addEventListener("click", function (e) {
  e.stopPropagation();
});

// add bg color to header
let header = document.querySelector(".header");
window.onscroll = function () {
  if (window.pageYOffset > 30) {
    header.classList.add("bg-header");
  } else {
    header.classList.remove("bg-header");
  }
};
